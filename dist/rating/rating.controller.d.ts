import { Types } from 'mongoose';
import { SetRatingDto } from './dto/set-rating.dto';
import { RatingService } from './rating.service';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    setRating(userId: Types.ObjectId, dto: SetRatingDto): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, any> & import("./rating.model").RatingModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: Types.ObjectId;
    }>;
    getMovieValueByUser(movieId: Types.ObjectId, userId: Types.ObjectId): Promise<number>;
}
