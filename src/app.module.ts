import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { CreateAccountController } from "./controllers/create-account.controller";

@Module({
  controllers: [CreateAccountController], // Recebe os controllers que existem nesses modules.
  providers: [PrismaService], // Declarar todas as dependências que os meus controllers podem ter.
})

/*
- Tudo que não é controller, provavelmente será um provider
- Tudo que não recebo requisição HTTP, é um provider
- Tudo que eu vou precisar injetar em outras classes, é um provider
*/

// Controllers => tudo que recebe requisição HTTP
export class AppModule {}
