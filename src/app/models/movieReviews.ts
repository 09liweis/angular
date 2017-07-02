export class MovieReviews {
    id: number;
    page: number;
    results: Array<{
        id: string;
        author: string;
        content: string;
        url: string;
    }>;
    total_pages: number;
    total_results: number;
}
