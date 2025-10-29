"use client"
import { useAuthStore } from "../coinhub/app/store/authStore";
import { User } from "../coinhub/app/types/auth";

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null
}

interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>;
 
}

export function useAuth(): AuthState & AuthActions{
    const {
        user
    } = useAuthStore();
}