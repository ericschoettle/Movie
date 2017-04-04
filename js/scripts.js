// back end
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

// our invention
function militaryToCivTime (time) {
  if(time > 1200){
    if (time > 1300) {
      time -= 1200;
    }
    time = time.toString() + " PM";
  } else {
    time = parseInt(time);
    if (time < 100) {
      time += 1200;
    }
    time = time.toString() + " AM";
  }

  var timeSplit = time.split("");
  var timeSplice = timeSplit.splice(timeSplit.length-5,0,":");
  var civJoin = timeSplit.join("");
  return civJoin
}

// damned people on the internet are smarter
getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'pm' : 'am';
    var minutes = fourDigitTime.substring(2);

    return hours + ':' + minutes + amPm;
};


$(document).ready(function() {
  $('#getTicket').submit(function(event){
    var movie = $('#movieChoice').val();
    var time = $('#startTime').val();
    var age = $('#age').val();
    var newTicket = new Ticket(movie, time, age);
    console.log(newTicket,$('#startTime'));
    //debugger
    var price = 10;
    if(/old/gi.test(newTicket.movie)===true){
      price -= 2.5
    }
    if(newTicket.age > 65 || newTicket.age < 15){
      price -= 2.5
    }
    if(newTicket.time < 1600){
      price -= 2.5
    }

    var time = militaryToCivTime(newTicket.time);
    console.log(time)
    //civTime = civTime.toString().split();
    //.splice(1,0,':').join("");

    $('#priceShow').text('Price: $' + price.toFixed(2));
    $('#timeShow').text('Showtime: ' + time);
    $('#movieShow').text(newTicket.movie);

    event.preventDefault();
  });
});
