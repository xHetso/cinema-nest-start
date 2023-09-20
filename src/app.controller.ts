import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
//Контроллер обрабатывает входные выходные данные(Все запросы идут в контроллер)
//Контроллер отправляет в сервис и так же принимает с сервиса и отвечает на запросы
@Controller()//служит для того что бы внутри скобки написать какой нибудь адрес
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
