import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("/attachments")
export class UploadAttachmentsController {
  //   constructor() {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  async handle(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 2, // 2mb
          }),
          new FileTypeValidator({ fileType: ".(png|jpg|jpeg|pdf)" }),
        ],
      })
    )
    file: Express.Multer.File
  ) {
    console.log(file);
  }
}