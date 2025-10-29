import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL?: string;
    emailVerified?: boolean;
    avatar?: string;
    // preferences: UserPreferences;
    // subscription?: UserSubscription;
    createdAt: Date | Timestamp;
    lastLoginAt?: Date | Timestamp;
}