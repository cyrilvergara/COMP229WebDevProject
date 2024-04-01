const connectionString = "mongodb+srv://vergaraxy:fx76jzAzN43wz58i@cluster0.wwang1a.mongodb.net/inventoryapp?retryWrites=true&w=majority&appName=Cluster0";

const config = {
  SENDGRID_EMAIL: process.env.SENDGRID_EMAIL,
  SENDGRID_TEMPLATE: process.env.SENDGRID_TEMPLATE,
  SENDGRID_BEARER: process.env.SENDGRID_BEARER,
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    connectionString ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject",
};

module.exports = config;
