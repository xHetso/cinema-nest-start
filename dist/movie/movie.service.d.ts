import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { TelegramService } from 'src/telegram/telegram.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieModel } from './movie.model';
export declare class MovieService {
    private readonly movieModel;
    private readonly telegramService;
    constructor(movieModel: ModelType<MovieModel>, telegramService: TelegramService);
    getAll(searchTerm?: string): Promise<DocumentType<MovieModel>[]>;
    bySlug(slug: string): Promise<DocumentType<MovieModel>>;
    byActor(actorId: Types.ObjectId): Promise<DocumentType<MovieModel>[]>;
    byGenres(genreIds: Types.ObjectId[]): Promise<DocumentType<MovieModel>[]>;
    updateCountOpened(slug: string): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, any> & MovieModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: Types.ObjectId;
    }>;
    byId(id: string): Promise<DocumentType<MovieModel>>;
    create(): Promise<Types.ObjectId>;
    update(id: string, dto: CreateMovieDto): Promise<DocumentType<MovieModel> | null>;
    delete(id: string): Promise<DocumentType<MovieModel> | null>;
    getMostPopular(): Promise<DocumentType<MovieModel>[]>;
    updateRating(id: string, newRating: number): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, any> & MovieModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: Types.ObjectId;
    }>;
    sendNotifications(dto: CreateMovieDto): Promise<void>;
}
