/* Here is a switch that references the array and two prompts from the previous form. 
It sifts through the message options and uploads a result to the console based on the 
user's input. I have commented out variables to prevent an error from them already being 
defined on the previous form */

/* I am defining an array which includes all of the possible resulting messages from the program as items*/
/*let messages = [
      "wear a warm coat, hat, scarf and gloves.", 
      "wear a warm coat but you won't need a hat, scarf or gloves.", 
      "wear your warmest coat, a warm hat, a scarf, and warm gloves.", 
      "wear a warm coat, hat and gloves. Maybe a scarf too.", 
      "Invalid Input!"]*/

/*I am defining two prompts: one of which asks for the user's state 
while the other one asks for the user's current temperature in said state*/
/*let state = 
      prompt("What state are you from (in two letters)?")*/
/*let currentTemp = 
      prompt("What is the current temperature (Write only the number in degrees fahrenheit)?")*/

/* I created a switch that, upon receiving an input from the user in the form
of a prompt, sifts through the array items and produces a response by utilizing a template literal. Instead of
using if/else logic, it runs on a case-by-case basis with breaks or a default
response once a match is made (or never made for that matter)*/
switch(true) {
case state == 'NE' && currentTemp <= 32:
  console.log(`${messages[0]}`)
  break;
case state == 'NE' && currentTemp >= 32 && currentTemp <=50:
  console.log(`${messages[1]}`)
  break;
case state == 'FL' && currentTemp >= 32 && currentTemp <=50:
  console.log(`${messages[2]}`)
  break;
case state == 'FL' && currentTemp >= 50 && currentTemp <=70:
  console.log(`${messages[3]}`)
  break;
default: 
  console.log(`${messages[4]}`)
}