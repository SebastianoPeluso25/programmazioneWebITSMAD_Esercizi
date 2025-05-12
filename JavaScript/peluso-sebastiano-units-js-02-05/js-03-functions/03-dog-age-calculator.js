

function calculateDogAge(humanYears, conversionRate = 7) {

    const dogYears = humanYears * conversionRate;
    console.log(`Your dog is ${dogYears} years old in dog years!`);
    
}

calculateDogAge(1); 
calculateDogAge(3); 
calculateDogAge(5, 6); 
