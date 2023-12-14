import multer from 'multer';
import path from 'path';
import fs from 'fs';

export let uploadedFileName = '';

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'files';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, 'files');
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    uploadedFileName = fileName;
    console.log(uploadedFileName);
    cb(null, fileName);
  },
});

export const upload = multer({ storage: multerConfig });
