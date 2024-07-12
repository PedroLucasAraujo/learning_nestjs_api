import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "./env";
import { AuthModule } from "./auth/auth.module";
import { HttpModule } from "./http/http.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
  ],
})

/*
- Tudo que não é controller, provavelmente será um provider
- Tudo que não recebo requisição HTTP, é um provider
- Tudo que eu vou precisar injetar em outras classes, é um provider
*/

// Controllers => tudo que recebe requisição HTTP
export class AppModule {}
