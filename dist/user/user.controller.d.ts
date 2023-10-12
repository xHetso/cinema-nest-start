import { UserService } from './user.service';
import { UpdateDto } from './dto/update.dto';
import { UserModel } from './user.model';
import { Types } from 'mongoose';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(_id: string): Promise<import("@typegoose/typegoose").DocumentType<UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    updateProfile(_id: string, data: UpdateDto): Promise<void>;
    getFavorites(_id: string): Promise<import("@typegoose/typegoose").Ref<import("../movie/movie.model").MovieModel, Types.ObjectId>[]>;
    toggleFavorite(movieId: Types.ObjectId, user: UserModel): Promise<void>;
    getCountUsers(): Promise<number>;
    getUsers(searchTerm?: string): Promise<import("@typegoose/typegoose").DocumentType<UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getUser(id: string): Promise<import("@typegoose/typegoose").DocumentType<UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    updateUser(id: string, data: UpdateDto): Promise<void>;
    delete(id: string): Promise<void>;
}
