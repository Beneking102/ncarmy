import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // For React-only deployment, use mock API
  const { mockApi } = await import('@/services/mockapi');
  
  if (url.includes('/api/applications') && method === 'POST') {
    const result = await mockApi.submitApplication(data as any);
    return new Response(JSON.stringify(result.data), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  if (url.includes('/api/contact') && method === 'POST') {
    const result = await mockApi.submitContact(data as any);
    return new Response(JSON.stringify(result.data), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Fallback for other endpoints
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const endpoint = queryKey.join("/");
    
    // For React-only deployment, return mock data from localStorage
    if (endpoint.includes('/api/applications')) {
      return JSON.parse(localStorage.getItem('nc-army-applications') || '[]');
    }
    
    if (endpoint.includes('/api/contact')) {
      return JSON.parse(localStorage.getItem('nc-army-contacts') || '[]');
    }
    
    // Fallback to original fetch behavior for other endpoints
    const res = await fetch(endpoint, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
