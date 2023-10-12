import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MovieModule } from './movie/movie.module'
import { GenreModule } from './genre/genre.module'
import { ActorModule } from './actor/actor.module'
import { AuthModule } from './auth/auth.module'
import { getMongoConfig } from './config/mongo.config'
import { FilesModule } from './files/files.module'
import { TelegramModule } from './telegram/telegram.module'
import { UserModule } from './user/user.module'

import { TypegooseModule } from 'nestjs-typegoose'
import { RatingModule } from './rating/rating.module'

//Модуль может в себе включать другие модули, это такая плата куда можем коннектить
//Это корневой мозг где за все отвечает

@Module({
	imports: [
		/*
		forRoot в коде ConfigModule.forRoot() настраивает модуль 
		ConfigModule для загрузки переменных окружения из файла 
		.env и делает их доступными для других частей вашего приложения. 
		*/
		ConfigModule.forRoot(),
		// Здесь вы можете передавать опции и конфигурацию для ConfigModule
      	// Например, указать путь к файлу с переменными окружения или другие параметры.
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		MovieModule,
		GenreModule,
		ActorModule,
		UserModule,
		AuthModule,
		FilesModule,
		TelegramModule,
		RatingModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
