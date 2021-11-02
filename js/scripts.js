// Business logic
function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
}

Ticket.prototype.cost = function() {
  // ticketTotal = 0;
  baseAdultPrice = 13;
  baseSeniorPrice = 8;
  baseMinorPrice = 10;

  if(this.age === "adult" && this.time === "matinee") {
    baseAdultPrice -= 5;
  } else if(this.age === "senior" && this.time === "matinee") {
    baseSeniorPrice = 8;
  } else if(this.age === "minor" && this.time === "matinee") {
    baseMinorPrice -= 5;
  }
}

// UI logic

$(document).ready(function() {
  $("form#movie-choice").submit(function(event) {
    event.preventDefault();
  });
});