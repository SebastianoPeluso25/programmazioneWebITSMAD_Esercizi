function calculateSupply(age, amountPerDay) {
    const maxAge = 100; 
    const yearsRemaining = maxAge - age; 
    const totalCups = amountPerDay * 365 * yearsRemaining; 

    const roundedTotalCups = Math.round(totalCups);

    console.log(`You will need ${roundedTotalCups} cups of coffee to last you until the age of ${maxAge}`);
}

calculateSupply(25, 2); 
calculateSupply(40, 1.5); 
calculateSupply(60, 0.3); 

function calculateSupplyInLiters(age, amountPerDay) {
    const maxAge = 100;
    const yearsRemaining = maxAge - age;
    const totalLiters = (amountPerDay * 0.24) * 365 * yearsRemaining; 

    const roundedTotalLiters = Math.round(totalLiters);

    console.log(`You will need ${roundedTotalLiters} liters of coffee to last you until the age of ${maxAge}`);
}

calculateSupplyInLiters(25, 2); 
calculateSupplyInLiters(40, 1.5); 
calculateSupplyInLiters(60, 0.3); 
