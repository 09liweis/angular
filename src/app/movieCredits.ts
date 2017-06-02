export class MovieCredits {
    id: number;
    cast: Array<{
        cast_id: number;
        character: string;
        credit_id: string;
        id: number;
        name: string;
        order: number;
        profile_path: string;
    }>;
    crew: Array<{
        credit_id: string;
        department: string;
        id: number;
        job: string;
        name: string;
        profile_path: string;
    }>;
}
