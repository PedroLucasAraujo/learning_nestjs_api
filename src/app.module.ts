import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  controllers: [AppController], // Recebe os controllers que existem nesses modules.
  providers: [AppService], // Declarar todas as dependências que os meus controllers podem ter.
})

/*
- Tudo que não é controller, provavelmente será um provider
- Tudo que não recebo requisição HTTP, é um provider
- Tudo que eu vou precisar injetar em outras classes, é um provider
*/

// Controllers => tudo que recebe requisição HTTP
export class AppModule {}
