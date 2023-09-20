import { ConfigService } from '@nestjs/config' //Это чтобы получать переменные с .env
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJWTConfig = async (
	configService: ConfigService
): Promise<JwtModuleOptions> => ({
	secret: configService.get('JWT_SECRET'),
})
