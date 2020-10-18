module.exports = 
function toReadable (number) {

    let smallNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        smallNumbersZ = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
        bigNumbers = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        hugeNumbers = ['hundred', 'thousand', 'million', 'milliard'];
        hundreds = Math.floor (number / 100);
        hundredTens = Math.floor((number - hundreds * 100) / 10); ;
        hundredOnes = number - (hundreds * 100) - (hundredTens * 10);
        tens = Math.floor(number / 10);
        ones = number - tens * 10;

    if (number < 20) {
    
        for (let i = 0; i < smallNumbers.length; i++) {
            
            if (i === number) {
               console.log(smallNumbers[i]);
                return smallNumbers[i];
            }
    }
}

if ( number >= 20 && number < 100) {
    
        console.log (bigNumbers[tens]);
        console.log (smallNumbers[ones]);

        if (smallNumbers[ones] === 'zero') {
            console.log(bigNumbers[tens]);
            return (bigNumbers[tens]);

        } else {
            console.log(bigNumbers[tens] + ' ' + smallNumbers[ones]);
            return (bigNumbers[tens] + ' ' + smallNumbers[ones]);
        }
        

} 

if ( number >= 100 && number < 999) { 
        console.log(hundreds);
        console.log(hundredTens);
        console.log(hundredOnes);

   if ((number - hundreds * 100) <= 20 && (number - (hundreds * 100)) > 0) {
    console.log(smallNumbers[hundreds] + ' hundred' + ' ' + smallNumbersZ[number - hundreds * 100]);
        return (smallNumbers[hundreds] + ' hundred' + ' ' + smallNumbersZ[number - hundreds * 100]);
   } 
   else if (number % 10 === 0 && number % 100 !== 0) {
   console.log(smallNumbers[hundreds] + ' hundred' + ' ' + bigNumbers[hundredTens]);
   return (smallNumbers[hundreds] + ' hundred' + ' ' + bigNumbers[hundredTens]);
    } else if (number % 100 === 0) {
        console.log(smallNumbers[hundreds]+ ' hundred');
        return (smallNumbers[hundreds] + ' hundred');
    }
    
        console.log(smallNumbers[hundreds] + ' ' + 'hundred' + ' ' + bigNumbers[hundredTens] + ' ' + smallNumbers[hundredOnes]);
        return (smallNumbers[hundreds] + ' ' + 'hundred' + ' ' + bigNumbers[hundredTens] + ' ' + smallNumbers[hundredOnes]);
// 
} 
}

// toReadable (600)



// if (hundredOnes === 0) {
//     console.log(smallNumbers[hundreds] + ' ' + 'hundred' + ' ' + bigNumbers[hundredTens]);
//     return (smallNumbers[hundreds] + ' ' + 'hundred' + ' ' + bigNumbers[hundredTens]);
// } else if (hundredTens === 0) {
//     console.log(smallNumbers[hundreds] + ' ' + 'hundred');
//     return (smallNumbers[hundreds] + ' ' + 'hundred');
// }