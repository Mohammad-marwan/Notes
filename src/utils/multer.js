import multer  from 'multer';


function fileUpload(){

    const storage = multer.diskStorage({
    
      });

      function fileFilter (req, file, cb) {
if (file.mimetype == 'image/jpg' || file.mimetype=='image/png'){
    cb(null,true);
}else{
    cb("invalid format",false)
}
      
      }
      
      const upload = multer({ fileFilter, storage })
      return upload

}
export default fileUpload;