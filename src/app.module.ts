import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { CreateAccountController } from "./controllers/create-account.controller";
import { envSchema } from "./env";
import { AuthModule } from "./auth/auth.module";
import { AuthenticateController } from "./controllers/authenticate-controller";
import { CreateQuestionController } from "./controllers/create-question.controller";
import { FetchRecentQuestionsController } from "./controllers/fetch-recent-questions.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ], // Recebe os controllers que existem nesses modules.
  providers: [PrismaService], // Declarar todas as dependências que os meus controllers podem ter.
})

/*
- Tudo que não é controller, provavelmente será um provider
- Tudo que não recebo requisição HTTP, é um provider
- Tudo que eu vou precisar injetar em outras classes, é um provider
*/

// Controllers => tudo que recebe requisição HTTP
export class AppModule {}
