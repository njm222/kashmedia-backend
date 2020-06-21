module.exports = ({ env }) => ({
  email: {
    provider: 'amazon-ses',
    providerOptions: {
      key: process.env.S3AccessKeyID,
      secret: process.env.S3SecretAccessKey,
      amazon: 'https://email.us-west-2.amazonaws.com',
    },
    settings: {
      defaultFrom: 'vibewitme415@gmail.com',
      defaultReplyTo: 'vibewitme415@gmail.com',
    },
  },
});
