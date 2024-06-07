import { Injectable } from '@nestjs/common'

@Injectable() // Serve para declarar que essa app.service é injetável
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
}
