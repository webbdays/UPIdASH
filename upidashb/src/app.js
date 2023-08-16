const express = require("exoress");
// create express app instance
const app = express();
const port = 3003;

// auth middleware
const authenticate = (req, res, next) => {};

// define routes
app.get("/getTransactions", authenticate, (req, res) => {});

// telling the express app to start listening on a port on the deployed server
app.listen(port, () => {
  console.log(`App started listening on {$port}`);
});
