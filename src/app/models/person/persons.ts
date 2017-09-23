import {Person} from './person'

export class Persons{
    page: number;
    total_pages: number;
    total_results: number;
    results: Array<Person>;
}