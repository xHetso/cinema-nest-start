import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { RatingModel } from './rating.model';
import { SetRatingDto } from './dto/set-rating.dto';
import { MovieService } from 'src/movie/movie.service';
export declare class RatingService {
    private readonly ratingModel;
    private readonly movieService;
    constructor(ratingModel: ModelType<RatingModel>, movieService: MovieService);
    averageRatingbyMovie(movieId: Types.ObjectId | string): Promise<number>;
    setRating(userId: Types.ObjectId, dto: SetRatingDto): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, any> & RatingModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: Types.ObjectId;
    }>;
    getMovieValueByUser(movieId: Types.ObjectId, userId: Types.ObjectId): Promise<number>;
}
