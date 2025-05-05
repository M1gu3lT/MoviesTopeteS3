import { CastModel } from "./cast.model";

export interface MoviesModel{
    title: string;
    director: string;
    poster: string;
    trailerUrl: string;
    _id: string | number;
    cast?: CastModel;
    favorited?: boolean;
  hidden?: boolean;
}