import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env/env'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'
import { EnvService } from './env/env.service'
import { EnvModule } from './env/env.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
    EnvModule,
  ],
  providers: [EnvService],
})

/*
- Tudo que não é controller, provavelmente será um provider
- Tudo que não recebo requisição HTTP, é um provider
- Tudo que eu vou precisar injetar em outras classes, é um provider
*/

// Controllers => tudo que recebe requisição HTTP
export class AppModule {}
