const dotenv = require('dotenv');
const config = require('./server/config/config.js');
const app = require('./server/express.js');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Connect to MongoDB database
mongoose.connect(config.mongoUri)
  .then(() => {
    console.log("Connected to the database!");
    // Start the Express server after successful database connection
    app.listen(config.port, () => {
      console.info('Server started on port %s.', config.port);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1); // Exit the application if unable to connect to the database
  });



// Handle MongoDB connection errors
mongoose.connection.on('error', (err) => {
  console.error("MongoDB connection error:", err);
});