/* #1 mindGame
      A function that performs basic math operations (+, -, *, /) on a number. 
*/
function mindGame(number){
    if(typeof number !== 'number'){
        return 'call the function with a number';
    }
    return (((number*3)+10)/2)-5;
}
const result1 = mindGame(10);
console.log(result1);
//==========================================================================

/* #2 evenOdd
      The function receives single string parameter and returns 'even' if the length of string is even else returns 'odd' 
*/ 
function evenOdd(str){
    if(typeof str !== 'string'){
        return 'call the function with a string';
    }

    if(str.length % 2){
        return 'odd';
    }else{
        return 'even';
    }
}

const result2 = evenOdd('sajid abdullah safwan');
console.log(result2);
//==========================================================================

/* #3 isLGSeven 
      The function receives number as parameter and subtracts 7 from it. if the number is less than 7 then it returns the number else returns it by multiplying with 2 
*/ 
function isLGSeven(number){
    if(typeof number !== 'number'){
        return 'call the function with a number';
    }

    number -= 7;
    if(number < 7){
        return number;
    }else{
        return number * 2;
    }
}

const result3 = isLGSeven(10);
console.log(result3);
//==========================================================================

/* #4 findingBadData 
      The function receives positive and negative numbers of an array and counts the negative numbers from the array to return.
*/ 
function findingBadData(numberArray){
    if(!Array.isArray(numberArray)){
        return 'call the function with an array';
    }

    let count = 0;
    for(let i=0; i<numberArray.length; i++){
        if(numberArray[i] < 0){
            count++;
        }
    }
    return count;
}
const numberArray = [12, 42, -34, 6, -4, 23, 65, -233, 4, -12, -5, 0];
const result4 = findingBadData(numberArray);
console.log(result4);
//==========================================================================

/* #5 gemsToDiamond 
      The function calculates gems of 3 friends and returns the sum.
      if the sum is >= 2*1000 then return sum-2000
      else return only the sum
*/ 
function gemsToDiamond(friend1Gems, friend2Gems, friend3Gems){
    if(typeof friend1Gems !== 'number' || typeof friend2Gems !== 'number' || typeof friend3Gems !== 'number'){
        return 'call the function with a number';
    }

    let sum = friend1Gems*21 + friend2Gems*32 + friend3Gems*43;
    if(sum >= 2000){
        return sum - 2000;
    }else{
        return sum;
    }
}

const result5 = gemsToDiamond(2, 5, 1);
console.log(result5);