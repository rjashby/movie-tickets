// Business logic
function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
}

Ticket.prototype.cost = function() {
  let ticketTotal = 0;
  // let ageIncrement = 0;
  // let timeIncrement = 0;
  // let movieIncrement = 0;

  if(this.age === "adult") {
    ticketTotal += 13;
  } else if(this.age === "senior") {
    ticketTotal += 8;
  } else if(this.age === "minor") {
    ticketTotal += 10;
  }
  
  if(this.time === "matinee") {
    ticketTotal -= 4;
  } else if(this.age === "evening") {
    ticketTotal += 2;
  }

  if(this.movie === "dune") {
    ticketTotal += 4;
  } else if(this.movie === "eternals") {
    ticketTotal += 4;
  } else if(this.movie === "bond") {
    ticketTotal += 2;
  }

  // ticketTotal = ageIncrement + timeIncrement + movieIncrement;
  return ticketTotal;
}

// UI logic

$(document).ready(function() {
  $("form#movie-choice").submit(function(event) {
    event.preventDefault();
    const age = $("select#age option:selected").val();
    const time = $("select#time option:selected").val();
    const movie = $("select#movie option:selected").val();
    let ticket = new Ticket(age, time, movie);
    console.log(ticket);
    $("#ticket-total").html("$" + ticket.cost())
    $("#show-results").show();
  });
});