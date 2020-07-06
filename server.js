// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
var tables = [
  {
    routeName: "reservation",
    name: "Yoda",
    groupSize: 6,
  },
  {
    routeName: "reservation",
    name: "Darth Maul",
    groupSize: 3,
  },
];
var reserve = [
  {
    routeName: "waitlist",
    name: "steve",
    groupSize: 5,
  },
  {
    routeName: "waitlist",
    name: "tim",
    groupSize: 10,
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

//API calls for reserve and table objects
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});
app.get("/api/reserve", function (req, res) {
  return res.json(reserve);
});

app.post("/api/reserve", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name
      .replace(/\s+/g, "")
      .toLowerCase();
    console.log(newReservation);
    characters.push(newReservation);
    res.json(newReservation);
  });

// // Create New Reservations - takes in JSON input
// app.post("/api/reserve", function (req, res) {
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
