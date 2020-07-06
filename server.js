// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// var cors = require('cors');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
const reservations = [
  {
    name: "Yoda",
    phoneNumber: "888-8888",
    email: "yo@duh.com",
    uniqueId: 8,
  },
  {
    name: "Darth Paul",
    phoneNumber: "222-2222",
    email: "dp@darkside.com",
    uniqueId: 2,
  },
];
const waitlist = [
  {
    name: "Robert Paulson",
    phoneNumber: "777-7777",
    email: "rip@notdeadyet.com",
    uniqueId: 7,
  },
  {
    name: "Penny Lane",
    phoneNumber: "555-5555",
    email: "penny@inmymind.com",
    uniqueId: 5,
  },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//API calls for getting information

app.get("/api/tables", function (req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

//for making reservations
app.get("/api/reserve", function (req, res) {
  return res.json(reserve);
});

// // Create New Characters - takes in JSON input
app.post("/api/reserve", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  reserve.push(newReservation);

  res.json(reserve);
});

// // Create New Characters - takes in JSON input
//  app.post("/api/characters", function (req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name
//     .replace(/\s+/g, "")
//     .toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
