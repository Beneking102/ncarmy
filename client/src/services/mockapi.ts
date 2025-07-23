// Mock API service for React-only deployment
interface ApplicationData {
  name: string;
  gameInfo: string;
  preferredUnit: string;
  visaLevel: string;
  motivation: string;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  async submitApplication(data: ApplicationData) {
    await delay(1000); // Simulate network delay
    
    // Save to localStorage for demo purposes
    const applications = JSON.parse(localStorage.getItem('nc-army-applications') || '[]');
    const newApplication = {
      ...data,
      id: Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    applications.push(newApplication);
    localStorage.setItem('nc-army-applications', JSON.stringify(applications));
    
    // Simulate success
    return {
      success: true,
      data: newApplication
    };
  },

  async submitContact(data: ContactData) {
    await delay(800); // Simulate network delay
    
    // Save to localStorage for demo purposes
    const contacts = JSON.parse(localStorage.getItem('nc-army-contacts') || '[]');
    const newContact = {
      ...data,
      id: Date.now(),
      status: 'new',
      createdAt: new Date().toISOString()
    };
    contacts.push(newContact);
    localStorage.setItem('nc-army-contacts', JSON.stringify(contacts));
    
    // Simulate success
    return {
      success: true,
      data: newContact
    };
  }
};