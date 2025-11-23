// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// interface AuthState {
//     user:  null
// }

// export const useAuthStore = create<AuthState>()(
//     devtools(
//        persist(
//         (set, get) => ({
//             user: null,
//             isLoading: false,
//             error: null,

//             setUser: (user) => set({ user }),
//             setLoading: (isLoading) => set({ isLoading }),
//             setError: (error) => set({ error })
//         })
//        )
//     )
// )