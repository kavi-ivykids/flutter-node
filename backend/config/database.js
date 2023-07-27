const mongoose          = require("mongoose");
const { MONGO_URI }     = process.env;
const AppStrings        = require("../constants/app_strings");


// Connecting to the database
exports.connect = () => {
    mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log(AppStrings.database_connection_success);
      })
      .catch((error) => {
        console.log(AppStrings.database_connection_failure);
        console.error(error);
        process.exit(1);
      });
  };