function halfNumber(num) {
    return num / 2;
}

function squareNumber(num) {
    return num * num;
}

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function percentOf(part, whole) {
    return (part / whole) * 100;
}

function calculator(number) {
    const half = halfNumber(number);
    console.log(`Half of ${number} is ${half}`);

    const squared = squareNumber(half);
    console.log(`Squared result is ${squared}`);

    const area = areaOfCircle(squared);
    console.log(`Area of a circle with radius ${squared} is ${area}`);

    const percentage = percentOf(area, squared);
    console.log(`The area is ${percentage}% of the squared result`);

    return {
        half,
        squared,
        area,
        percentage
    };
}

// Example usage:
calculator(10);
