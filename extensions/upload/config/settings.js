module.exports = {
  provider: 'aws-s3',
  providerOptions: {
    accessKeyId: process.env.S3AccessKeyID,
    secretAccessKey: process.env.S3SecretAccessKey,
    region: process.env.S3Region,
    params: {
      Bucket: process.env.S3BucketName
    }
  },
};
