export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}