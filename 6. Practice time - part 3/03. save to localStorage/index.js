// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// Saving array to localstorage
// let myNames = [
//   "igudy",
//   "goodness",
//   "igunma",
//   "star",
//   "the code slinger",
//   "osakpamwan",
//   "squarez",
//   "IG",
//   "IG Innovations",
// ];

// localStorage.setItem("key", JSON.stringify(myNames));

let getStorage = JSON.parse(localStorage.getItem("key"));

console.log(getStorage[0]);
