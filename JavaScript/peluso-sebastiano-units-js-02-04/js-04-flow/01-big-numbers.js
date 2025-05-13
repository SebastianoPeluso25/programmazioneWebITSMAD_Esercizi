/**Big numbers
● Write a function named greaterNum that:
○ takes 2 parameters, both numbers.
○ returns whichever number is the greater (higher) number.
● Call that function 2 times with different number pairs, and log the output to
make sure it works (e.g. "The greater number of 5 and 10 is 10."). */

let numero1 = 5;
let numero2 = 10;

function numeromaggiore(numero1, numero2) {

    let NumMaggiore = 0;
    
    if (numero1 > numero2) {

        NumMaggiore = numero1;
        
    }
    else{
        NumMaggiore = numero2;
    }

    return (NumMaggiore)
}

let NumMaggiore = numeromaggiore(numero1, numero2)

console.log("The greater number of %d and %d is %d", numero1, numero2, NumMaggiore)