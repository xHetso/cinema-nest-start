import { Injectable, UnauthorizedException } from '@nestjs/common'
/* Injectable - декоратор NestJS, который помечает класс AuthService как инжектируемый сервис.
UnauthorizedException - класс исключения NestJS, который используется 
для обработки ошибок аутентификации и авторизации. */
import { JwtService } from '@nestjs/jwt'
/* JwtService - сервис NestJS для работы с JSON Web Tokens (JWT), 
используется для создания и верификации токенов. */
import { ModelType } from '@typegoose/typegoose/lib/types'
/* ModelType - тип данных, используемый при работе с Typegoose, библиотекой для работы 
с MongoDB и Mongoose с использованием TypeScript. */
import { genSalt, hash, compare } from 'bcryptjs'
/* genSalt - функция для генерации "соли" при хешировании паролей.
hash - функция для хеширования паролей.
compare - функция для сравнения пароля и хеша при аутентификации. */
import { InjectModel } from 'nestjs-typegoose'
/* InjectModel - декоратор NestJS, используемый для инжекции модели данных 
(в вашем случае, UserModel), определенной с использованием Typegoose. */
import { RefreshTokenDto } from './dto/refreshToken.dto'
/* RefreshTokenDto - это DTO (Data Transfer Object), используемый для 
передачи данных о запросе на обновление токенов. */
import { AuthDto } from './dto/auth.dto'
/* AuthDto - еще один DTO, используемый для передачи данных 
аутентификации, таких как email и пароль. */
import { UserModel } from '../user/user.model'
/* UserModel - представляет модель данных пользователя, которая используется для взаимодействия 
с базой данных и выполнения операций с пользователями в сервисе AuthService. */
@Injectable()//если в экспортируемом классе есть конструктор либо параметр то используем @Injectable()
export class AuthService {
	constructor(
		@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
		/*readonly Это ключевое слово указывает, 
		что после инициализации значения переменной 
		AuthService нельзя будет изменить. То есть, после установки значения при 
		создании экземпляра класса AuthController, это значение останется неизменным.*/
		private readonly jwtService: JwtService
	) {}

	async login({ email, password }: AuthDto) {
		const user = await this.validateUser(email, password)

		const tokens = await this.issueTokenPair(String(user._id))

		return {
			user: this.returnUserFields(user),
			...tokens,
		}
	}

	async register({ email, password }: AuthDto) {
		const salt = await genSalt(10)
		const newUser = new this.UserModel({
			email,
			password: await hash(password, salt),
		})
		const user = await newUser.save()

		const tokens = await this.issueTokenPair(String(user._id))

		return {
			user: this.returnUserFields(user),
			...tokens,
		}
	}

	async getNewTokens({ refreshToken }: RefreshTokenDto) {
		if (!refreshToken) throw new UnauthorizedException('Please sign in!')

		const result = await this.jwtService.verifyAsync(refreshToken)

		if (!result) throw new UnauthorizedException('Invalid token or expired!')

		const user = await this.UserModel.findById(result._id)

		const tokens = await this.issueTokenPair(String(user._id))

		return {
			user: this.returnUserFields(user),
			...tokens,
		}
	}

	async findByEmail(email: string) {
		return this.UserModel.findOne({ email }).exec()//findOne({ email }) метод выполняет запрос к базе данных для поиска email
		/* .exec(): Этот метод выполняет запрос к базе данных и возвращает обещание (Promise), которое разрешится результатом запроса. */
	}

	async validateUser(email: string, password: string): Promise<UserModel> {
		const user = await this.findByEmail(email)
		if (!user) throw new UnauthorizedException('User not found')

		const isValidPassword = await compare(password, user.password)
		if (!isValidPassword) throw new UnauthorizedException('Invalid password')

		return user
	}

	async issueTokenPair(userId: string) {
		const data = { _id: userId }

		const refreshToken = await this.jwtService.signAsync(data, {
			expiresIn: '15d',
		})

		const accessToken = await this.jwtService.signAsync(data, {
			expiresIn: '1h',
		})

		return { refreshToken, accessToken }
	}

	returnUserFields(user: UserModel) {
		return {
			_id: user._id,
			email: user.email,
			isAdmin: user.isAdmin,
		}
	}
}
