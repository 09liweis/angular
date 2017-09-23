import {Movie} from '../movie'
export class Person{

    popularity: number;
    id:number;
    profile_path:string;
    name:string;
    known_for:Array<Movie>;
    adult:boolean;
}