import { prop, Ref } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { MovieModel } from 'src/movie/movie.model'

export interface UserModel extends Base {}//в Base входит id

export class UserModel extends TimeStamps { //TimeStamps помогает автоматический добавлять поля id, createdAt, updatedAt
	@prop({ unique: true })//email должен быть уникальным
	email: string

	@prop()
	password: string

	@prop({ default: false })//по дефолту будет false
	isAdmin?: boolean

	@prop({ default: [], ref: () => MovieModel })
	favorites?: Ref<MovieModel>[]
}
