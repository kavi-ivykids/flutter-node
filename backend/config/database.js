// imports
const mongoose          = require("mongoose");
const { MONGO_URI }     = process.env;
const StringManager     = require("../constants/string_manager");


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
        console.log(StringManager.database_connection_success);
      })
      .catch((error) => {
        console.log(StringManager.database_connection_failure);
        console.error(error);
        process.exit(1);
      });
  };