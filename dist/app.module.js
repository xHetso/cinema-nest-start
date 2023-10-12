"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const movie_module_1 = require("./movie/movie.module");
const genre_module_1 = require("./genre/genre.module");
const actor_module_1 = require("./actor/actor.module");
const auth_module_1 = require("./auth/auth.module");
const mongo_config_1 = require("./config/mongo.config");
const files_module_1 = require("./files/files.module");
const telegram_module_1 = require("./telegram/telegram.module");
const user_module_1 = require("./user/user.module");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const rating_module_1 = require("./rating/rating.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            nestjs_typegoose_1.TypegooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: mongo_config_1.getMongoConfig,
            }),
            movie_module_1.MovieModule,
            genre_module_1.GenreModule,
            actor_module_1.ActorModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            files_module_1.FilesModule,
            telegram_module_1.TelegramModule,
            rating_module_1.RatingModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map