import { Injectable } from "@nestjs/common";
import { UploadApiErrorResponse, UploadApiResponse, v2 } from "cloudinary";
const toStream = require("buffer-to-stream");

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    if (!file.mimetype.startsWith("image")) {
      throw new Error("Sorry, this file is not an image, please try again");
    }

    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        {
          folder: process.env.CLOUDINARY_FOLDER_NAME,
          use_filename: true,
          unique_filename: false,
          filename_override: file.originalname,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      toStream(file.buffer).pipe(upload);
    });
  }
}
