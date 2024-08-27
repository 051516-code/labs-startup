export interface User {
    id: string;                               // Unique identifier for the user
    name: string;                            // Full name of the user
    email: string;                           // Email address of the user
    phoneNumber?: string;                    // Optional contact phone number
    passwordHash: string;                    // Password hash (for authentication)
    createdDate: Date;                       // Date when the user account was created
    lastLoginDate?: Date;                    // Optional date of the last login
    profilePicture?: string;                 // Optional URL or filename of the profile picture
    companies: string[];                     // Array of IDs of companies managed or owned by the user
    role: 'admin' | 'user';                  // Role of the user (e.g., admin, user)
}
