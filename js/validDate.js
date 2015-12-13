function validDate() {
  // Declare variable
  var promptDate = document.getElementById("datePrompt").value;
  
  // If entry is a date, then check if it has passed
  if (isDate(promptDate)) {
    var date = new Date(promptDate);
    var now = new Date();   
    callFunction(date, now);
  } else {
    
    // Display error message and hide appropriate elements
    document.getElementById("input").innerHTML = "<p>Invalid entry. Please " 
                                               + "enter a date in MM/DD/YYYY " 
                                               + "format.</p>";
    document.getElementById("datePrompt").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("headings").style.display = "none";
    document.getElementById("reload").style.display = "block";
    document.getElementById("finish").style.display = "none";
  }
}
