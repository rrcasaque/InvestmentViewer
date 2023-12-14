import { Error } from '../models/Error';
import { uploadedFileName } from './MulterUpload';
import { ICloudManager } from './interfaces/ICloudManager';
import { Storage } from '@google-cloud/storage';
import fs from 'fs';

export class GCloudStorage implements ICloudManager {
  private storage: Storage;
  private projectId = process.env.PROJECT_ID;
  private keyFilename = process.env.KEYFILENAME;
  constructor(private bucketName: string) {
    this.bucketName = bucketName;
    this.storage = new Storage({
      projectId: this.projectId,
      keyFilename: this.keyFilename,
    });
  }

  async uploadFile() {
    try {
      const bucket = this.storage.bucket(this.bucketName);

      await bucket.upload(`./files/${uploadedFileName}`, {
        destination: uploadedFileName,
        public: true,
      });

      fs.readdirSync('./files').forEach((file) => {
        fs.rmSync(`./files/${file}`);
      });

      fs.rmdirSync('./files');

      console.log(
        `https://storage.googleapis.com/${this.bucketName}/${uploadedFileName}`
      );
      return `https://storage.googleapis.com/${this.bucketName}/${uploadedFileName}`;
    } catch (error) {
      throw new Error('file upload failed', 400);
    }
  }

  async deleteFile(fileName: string) {
    try {
      const bucket = this.storage.bucket(this.bucketName);
      const file = bucket.file(fileName);
      await file.delete();
    } catch (error) {
      throw new Error('file deleted failed', 400);
    }
  }
}
