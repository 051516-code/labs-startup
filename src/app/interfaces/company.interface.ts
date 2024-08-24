import { Review } from "./review.interface";

export interface Company {
    id: string;                              // Unique identifier for the company
    name: string;                            // Name of the company
    logo: string;                            // URL or filename of the logo
    banner: string;                          // URL or filename of the banner image
    description: string;                     // Description of the company
    phoneNumber: string;                     // Contact phone number
    email: string;                           // Company email address
    website?: string;                        // URL of the company website (optional)
    address: {                               // Physical address
        street: string;                     // Street address
        cep: string;                        // Postal code
    }
    geographicLocation: {                   // Coordinates for geolocation
        latitude: number;                   // Latitude coordinate
        longitude: number;                  // Longitude coordinate
    }
    operatingHours?: {                      // Optional operating hours
        opening: string;                    // Opening time
        closing: string;                    // Closing time
        specialHours?: { [date: string]: { opening: string; closing: string } }; // Optional special hours
    }
    serviceAvailability?: { [service: string]: { opening: string; closing: string } }; // Optional service-specific availability
    type: 'mechanic' | 'tow' | 'other';     // Type of business
    status: 'active' | 'inactive';          // Status of the company
    creationDate: Date;                     // Date the company was created
    lastUpdateDate: Date;                   // Date of last update
    registrationNumber?: string;            // Legal registration number (optional)
    certifications?: {                     // Certifications and permits
        name: string;                      // Name of the certification
        issuedBy: string;                  // Entity that issued the certification
        validUntil?: Date;                 // Expiration date (optional)
    }[];
    gallery?: string[];                     // Gallery of images (optional)
    socials: {                              // Social media links
        facebook?: string;                  // Facebook URL (optional)
        instagram?: string;                 // Instagram URL (optional)
        x?: string;                         // X (formerly Twitter) URL (optional)
    }
    reviews?: Review[];                     // List of reviews and ratings
    communicationChannels?: {               // Additional communication channels
        chatOnline?: string;                // URL for online chat
        supportEmail?: string;             // Email for support
    };
    promotions?: { 
        title: string;
        description: string;
        startDate: Date;
        endDate: Date;
    }[]; // List of promotions or offers
    activityLog?: { 
        date: Date;
        event: string;
        details?: string;
    }[]; // Optional history of activities
    statistics?: { 
        totalRequests?: number;
        averageRating?: number;
        responseTime?: number; // Average response time in minutes
    };
    media?: { 
        images?: string[];  // URLs of images
        videos?: string[];  // URLs of videos
    };
    documents?: { 
        [type: string]: string; // Document type and URL or path
    };
}
