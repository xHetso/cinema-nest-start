import { ConfigService } from '@nestjs/config' //Это чтобы получать переменные с .env
import { TypegooseModuleOptions } from 'nestjs-typegoose' //чтобы подключить Mongo DB мы используем эту библиотеку

const options = {}

export const getMongoConfig = async (
	configService: ConfigService
): Promise<TypegooseModuleOptions> => ({
	uri: configService.get('MONGO_URI'),
	...options,
})
/*ConfigService в этом коде является сервисом, предоставляемым фреймворком 
Nest.js для управления конфигурацией приложения. Этот сервис позволяет вам 
получать доступ к переменным среды и другим настройкам, определенным в файлах конфигурации, таких как .env. */

/* (configService: ConfigService) - это параметр функции в ts,Это означает, что функция ожидает один аргумент, который будет передан при ее вызове, 
и этот аргумент будет доступен внутри функции под именем configService.*/

/*Так мы пишем без стрелочной функции
    export async function getMongoDbConfig(configService: ConfigService): Promise<TypegooseModuleOptions> {
    return {
        uri: configService.get('MONGO_URI'),
    };
}
*/

/* Это мы общешаем что возвращаемое значении функции будет в виде <TypegooseModuleOptions>
    Promise<TypegooseModuleOptions>
*/