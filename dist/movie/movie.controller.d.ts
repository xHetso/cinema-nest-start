import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieService } from './movie.service';
import { Types } from 'mongoose';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    bySlug(slug: string): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    byActor(actorId: Types.ObjectId): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    byGenres(genreIds: Types.ObjectId[]): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getAll(searchTerm?: string): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getMostPopular(): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    updateCountOpened(slug: string): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, any> & import("./movie.model").MovieModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: Types.ObjectId;
    }>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    create(): Promise<Types.ObjectId>;
    update(id: string, dto: CreateMovieDto): Promise<import("@typegoose/typegoose").DocumentType<import("./movie.model").MovieModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    delete(id: string): Promise<void>;
}
