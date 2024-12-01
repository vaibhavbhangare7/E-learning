
const Cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) =>{
    try{
        const options = {folder};
        options.resource_type = "auto";

        if(height){
            options.height = height;
        }

        if(quality){
            options.quality = quality
        }
        return await Cloudinary.uploader.upload(file.tempFilePath,options);
    }
    catch(error){ 
      console.log(error);
        console.log("error in file upload"); 
    }
}


