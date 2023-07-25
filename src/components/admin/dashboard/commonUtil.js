import moment from 'moment';

var AWS = require('aws-sdk');


const uploadFile = async (file) => {
    const fileName = `geothermal-${file.name}`
   
   return new Promise((resolve, reject)=>{
    var params = {
        Key: fileName,
        Body: file,
        ACL:'public-read'
      };
    // AWS.config.update({accessKeyId:"AKIAQVP5WD5ZZJCYSTKR",secretAccessKey: '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'});
    AWS.config.update({accessKeyId:"AKIA4KPJCZNKIKA3TGO7",secretAccessKey: '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'});
    var s3bucket = new AWS.S3({params: {Bucket: 'market-place-service'}});
    s3bucket.upload(params, function (err, res) {               
        if(err)
            console.log("Error in uploading file on s3 due to "+ err)
        else    
            resolve(res.Location)
    });

   })
  }

  const formatDate = ()=>{
    return moment().format('DD MMM YY, h:mm a');

  }
  


  export {uploadFile, formatDate}