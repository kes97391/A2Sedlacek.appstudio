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