/* I am defining an array which includes all of the possible resulting messages from the program as items*/
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

/*I am defining two prompts: one of which asks for the user's state 
while the other one asks for the user's current temperature in said state*/
let state = prompt("What state are you from (in two letters)?")
let currentTemp = prompt("What is the current temperature (Write only the number in degrees fahrenheit)?")

/*I constructed an ifelse statement that takes the inputs from the user 
and produces a specific array item displayed as a message in an alert popup*/
if (state == 'NE' && currentTemp <= 32)
  alert(`${messages[0]}`)
else if (state == 'NE' && currentTemp >= 32 && currentTemp <=50)
  alert(`${messages[1]}`)
else if (state == 'FL' && currentTemp >= 32 && currentTemp <=50)
  alert(`${messages[2]}`)
else if (state == 'FL' && currentTemp >= 50 && currentTemp <=70)
  alert(`${messages[3]}`)

  