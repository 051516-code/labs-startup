export interface Review {
    reviewerId: string;                   // Unique identifier for the reviewer
    reviewerName: string;                 // Name of the reviewer
    rating: number;                       // Rating given (e.g., from 1 to 5)
    comment: string;                      // Review comment
    date: Date;                           // Date of the review
    response?: string;                    // Optional response from the company
    category?: string;                    // Optional category or type of review
    status?: 'pending' | 'approved' | 'rejected';  // Optional status of the review
    reviewerResponse?: string;            // Optional response from the reviewer
    isFeatured?: boolean;                 // Optional flag indicating if the review is featured
    likes?: number;                       // Optional number of likes
    dislikes?: number;                    // Optional number of dislikes
    media?: {                             // Optional media attachments
        images?: string[];                // URLs of images
        videos?: string[];                // URLs of videos
    };
    categories?: {                        // Optional categories for different aspects of the review
        [category: string]: number;
    };
    userExperience?: string;              // Optional description of the user's experience
    reviewerReviewCount?: number;         // Optional total number of reviews by the reviewer
    lastUpdated?: Date;                   // Optional date when the review was last updated
    responses?: { 
        responderId: string;    // Unique identifier for the responder
        responseText: string;  // Response text
        responseDate: Date;    // Date of the response
    }[]; // Optional responses to the review
    helpfulVotes?: number;   // Optional number of users who found the review helpful
    unhelpfulVotes?: number; // Optional number of users who found the review unhelpful
    moderationStatus?: 'pending' | 'approved' | 'rejected'; // Optional status of moderation
}
