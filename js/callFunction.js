// Hide "Select a different date" button at startup
document.getElementById("reload").style.display = "none";

// callFunction will start the countdown if the date is valid and has not passed
function callFunction(checkDate, checkNow) {
  
  // If date has passed, display error message
  if (checkDate.getTime() <= checkNow.getTime()) {
    document.getElementById("input").innerHTML = "<p>Date has already passed, " + 
                                                 "please try again.</p>";
    document.getElementById("datePrompt").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("headings").style.display = "none";
    document.getElementById("reload").style.display = "block";
    document.getElementById("finish").style.display = "none";
  } else {
    
    // Start countdown
    countdown(checkDate);
  }
}