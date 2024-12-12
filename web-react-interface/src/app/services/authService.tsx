// services/authService.ts

interface LoginCredentials {
    email: string;
    password: string;
  }
  
  interface RegisterUserData {
    name: string;
    email: string;
    password: string;
  }
  
  export const loginUser  = async (credentials: LoginCredentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Failed to login');
    }
  
    const data = await response.json();
    return data; 
  };
  
  export const registerUser  = async (userData: RegisterUserData) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to register');
    }
  
    const data = await response.json();
    return data; 
  };