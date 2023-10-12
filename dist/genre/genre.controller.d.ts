/// <reference types="mongoose" />
import { CreateGenreDto } from './dto/create-genre.dto';
import { GenreService } from './genre.service';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    bySlug(slug: string): Promise<import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    getAll(searchTerm?: string): Promise<import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getPopular(): Promise<import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getCollections(): Promise<import("./interfaces/genre.interface").ICollection[]>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    create(): Promise<import("mongoose").Types.ObjectId>;
    update(id: string, dto: CreateGenreDto): Promise<import("@typegoose/typegoose").DocumentType<import("./genre.model").GenreModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    delete(id: string): Promise<void>;
}
