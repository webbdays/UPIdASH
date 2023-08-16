const express = require("express");
// create express app instance
const app = express();
const port = 3003;

// auth middleware
const authenticate = (req, res, next) => {};

// define routes
app.get("/getTransactions", (req, res) => {
  const rows = [
    {
      id: 4567328754326575,
      from: "x1",
      to: "y1",
      ampunt: 35,
      status: "success",
      remarks: "shopping",
    },
    {
      id: 45673274867253676,
      from: "x1",
      to: "y2",
      ampunt: 35,
      status: "Failed",
      remarks: "food",
    },
    {
      id: 45673287543876176,
      from: "x1",
      to: "y2",
      ampunt: 35,
      status: "success",
      remarks: "food",
    },
    {
      id: 72336538761386438,
      from: "x2",
      to: "y3",
      ampunt: 500,
      status: "success",
      remarks: "electricity bill",
    },
    {
      id: 43647663827638763,
      from: "Snow",
      to: "Jon",
      ampunt: 10000,
      status: "success",
      remarks: "rent",
    },
    {
      id: 873563489478543673,
      from: "Snow",
      to: "Jon",
      ampunt: 70,
      status: "success",
      remarks: "food",
    },
    {
      id: 84765485612348731,
      from: "Snow",
      to: "Jon",
      ampunt: 35,
      status: "success",
      remarks: "shopping",
    },
    {
      id: 783673673563387,
      from: "Snow",
      to: "Jon",
      ampunt: 35,
      status: "success",
      remarks: "shopping",
    },
    {
      id: 87635456373489137376,
      from: "Snow",
      to: "Jon",
      ampunt: 35,
      status: "success",
      remarks: "shopping",
    },
  ];

  res.json(rows);
});

app.get("/", (req, res) => {
  res.send("Hello, I am a server");
});
// telling the express app to start listening on a port on the deployed server
app.listen(port, () => {
  console.log(`App started listening on {$port}`);
});
