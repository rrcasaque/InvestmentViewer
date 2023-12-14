export interface ICloudManager {
  uploadFile(): Promise<string>;
  deleteFile(fileName: string): Promise<void>;
}
