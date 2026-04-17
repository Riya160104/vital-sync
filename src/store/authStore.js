import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Mock user database
const MOCK_USERS = [
    {
        id: '1',
        email: 'doctor@vitalsync.com',
        password: 'doctor123',
        name: 'Dr. Sarah Sharma',
        role: 'doctor',
        isLoggedIn: false
    },
    {
        id: '2',
        email: 'patient@vitalsync.com',
        password: 'patient123',
        name: 'Deepak Verma',
        role: 'patient',
        isLoggedIn: false
    }
];

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null,

            login: async (email, password, role) => {
                set({ loading: true, error: null });
                
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const user = MOCK_USERS.find(
                    u => u.email === email && u.password === password && u.role === role
                );
                
                if (user) {
                    const loggedInUser = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        isLoggedIn: true
                    };
                    set({ 
                        user: loggedInUser, 
                        isAuthenticated: true, 
                        loading: false,
                        error: null
                    });
                    return { success: true };
                } else {
                    set({ 
                        error: 'Invalid email, password, or role', 
                        loading: false 
                    });
                    return { success: false, error: 'Invalid credentials' };
                }
            },

            register: async (name, email, password, role) => {
                set({ loading: true, error: null });
                
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const existingUser = MOCK_USERS.find(u => u.email === email);
                if (existingUser) {
                    set({ error: 'User already exists', loading: false });
                    return { success: false };
                }
                
                const newUser = {
                    id: String(MOCK_USERS.length + 1),
                    email,
                    password,
                    name,
                    role,
                    isLoggedIn: false
                };
                MOCK_USERS.push(newUser);
                
                set({ loading: false, error: null });
                return { success: true };
            },

            logout: () => {
                set({ user: null, isAuthenticated: false, error: null });
            },

            clearError: () => set({ error: null })
        }),
        {
            name: 'vitalsync-auth',
            getStorage: () => localStorage
        }
    )
);

export default useAuthStore;