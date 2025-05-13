

function squareNumber(num) {
  const result = num * num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
}

function halfNumber(num) {
  const result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;
}

function percentOf(part, whole) {
  const result = (part / whole) * 100;
  const roundedResult = result.toFixed(2);
  console.log(`${part} is ${roundedResult}% of ${whole}.`);
  return parseFloat(roundedResult);
}


function areaOfCircle(radius) {
  const area = Math.PI * radius * radius;
  const roundedArea = area.toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
  return parseFloat(roundedArea);
}


percentOf(2, 4);       // Logs: "2 is 50.00% of 4."
areaOfCircle(2);       // Logs: "The area for a circle with radius 2 is 12.57."



squareNumber(3);  // Logs: The result of squaring the number 3 is 9.
halfNumber(5);    // Logs: Half of 5 is 2.5.
