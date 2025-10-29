import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
    user:  null
}

// export const useAuthStore = create<AuthState>()(
//     devtools(
//        persist(
//         (set, get) => ({
//             user: null
//         })
//        )
//     )
// )