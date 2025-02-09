import multer from 'multer';

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/'); //location of the image where will be store
  },
  filename: (req, file, cb) => {
    const name =
      Date.now() + '-' + file.originalname; // file(image) name will save with date
    cb(null, name);
  },
});

export const uploadFile = multer({
  storage: storageConfig,
});
