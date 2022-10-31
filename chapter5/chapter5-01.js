
// **************************** //
// Exercise Chapter 05 Exercise 01
// **************************** //

// 5. Create a function that will:
//    a. return the number of vowels in a string
//    b. return the number of digits in a whole number using logarithm operations.
// Must be the same function.
// Estimated Time: 5 hour.


let numStr= function(numstr){
    if (typeof(numstr)=='string'){
        let count = 0;
        for (let j = 0; j < numstr.length; j++){
                if ((/[aeiou]/i).test(numstr[j])){
                count++;
             }
         }
         return count;
    }
    if (typeof(numstr)=='number'){
        let numdig=Math.floor(Math.log10(numstr))+1;
        return numdig;
    }   
}

//let num=999999;
let num = 'uiahgjuyiheas';
console.log(numStr(num))

