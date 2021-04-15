const cred = require('./credentials.js');

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-west-1'});

// Create S3 service object
s3 = new AWS.S3({ accessKeyId: cred.aws_access_key_id, secretAccessKey: cred.aws_secret_access_key });

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'berkeley-basketball',
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    let urls = data.Contents.map(elem => `https://berkeley-basketball.s3-us-west-1.amazonaws.com/${elem.Key}`)
    console.log(urls);
  }
});