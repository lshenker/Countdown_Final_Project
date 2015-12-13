// The countdown function runs every second and outputs the display
function countdown(date) {
  
  // Display appropriate elements and hide others
  document.getElementById("headings").style.display = "block";
  document.getElementById("datePrompt").style.display = "none";
  document.getElementById("input").style.display = "none";
  document.getElementById("button").style.display = "none";
  document.getElementById("reload").style.display = "block";
  
  // Declare variables
  var now = new Date();
  var timeDiff = date.getTime() - now.getTime();
  
  // If the countdown date has arrived then stop the timer, display complete 
  // message, change numbers to red, and play complete sound
  if (timeDiff <= 0) {
    clearTimeout(timer);
    document.getElementById("finish").innerHTML = "COUNTDOWN COMPLETE";
    document.getElementById("days").style.color = "red";
    document.getElementById("hours").style.color = "red";
    document.getElementById("minutes").style.color = "red";
    document.getElementById("seconds").style.color = "red";
    var complete = new Audio("sounds/complete.mp3");
    complete.play();
    return;
  }
  
  // Define seconds, minutes, hours, and days variables
  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  
  // Show the largest units with the remainders left over
  hours %= 24;
  minutes %= 60;
  seconds %= 60;
  
  // Add a "0" placeholder infront of the units if they are less than 10
  if (days < 10) {
    days = "0" + days;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  // Output the units to appropriate elements
  document.getElementById("days").innerHTML = days + ":";
  document.getElementById("hours").innerHTML = hours + ":";
  document.getElementById("minutes").innerHTML = minutes + ":";
  document.getElementById("seconds").innerHTML = seconds;
  
  // Run function every second
  var timer = setTimeout(function(){countdown(date);}, 1000);
  
  // Play ticking sound every second
  var audio = new Audio("sounds/tick2.mp3");
  audio.play();
}