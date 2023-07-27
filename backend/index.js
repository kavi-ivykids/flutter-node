const http              = require("http");
const app               = require("./app");
const server            = http.createServer(app);
const AppStrings        = require("./constants/app_strings");


const { API_PORT }      = process.env;
const port              = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`${AppStrings.server_port} ${port}`);
});
