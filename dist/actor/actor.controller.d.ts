/// <reference types="mongoose" />
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
export declare class ActorController {
    private readonly actorService;
    constructor(actorService: ActorService);
    getAll(searchTerm?: string): Promise<import("@typegoose/typegoose").DocumentType<import("./actor.model").ActorModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    bySlug(slug: string): Promise<import("@typegoose/typegoose").DocumentType<import("./actor.model").ActorModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    create(): Promise<import("mongoose").Types.ObjectId>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./actor.model").ActorModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    update(id: string, dto: CreateActorDto): Promise<import("@typegoose/typegoose").DocumentType<import("./actor.model").ActorModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    delete(id: string): Promise<void>;
}
