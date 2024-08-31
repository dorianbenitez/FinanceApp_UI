// Define the User interface to match the data structure expected from the backend
export interface User {
    id: number;            // Assuming 'id' is a number, adjust if needed
    email: string;
    firstName: string;     // User's first name
    lastName: string;      // User's last name
    dateOfBirth: string;   // Date of birth as a string (e.g., 'YYYY-MM-DD')
    password: string;
}