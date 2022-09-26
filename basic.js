for(var i=10; i>0; i--){
    //console.log(i);
}

// 1. Find which  is vowel?

/*var input = 'b'
var letter = input.toLowerCase()
if (letter=="a" ||letter=="u" ||letter=="e" || letter=="i" ||letter=="o"  ){
    console.log(letter,"is vowel");
}
else{
    console.log(letter,"is not vowel");
}*/


// print the even numbers between from 1 to 100

for (let i = 0; i <=100; i++) {
    if(i%2==0){
        //console.log(i);
    }  
}

// print the 6 ghorer namta

var number= 6;
for (let i = 1; i <=10; i++) {
   //console.log(i * 6);
    
}
//print the 4 ghorer namta in table

var number = 4;

for (let i = 1; i <=10; i++) {
    var result = i * 4;
    var multiple= number + " * " + i + " = "  +  result
    //console.log(multiple);
 }

            // Function Chapter-------------------------

function addNumber(number1,number2) {
    var total=number1+number2
    return total;

}

total=addNumber(34,56)
//console.log('The total is ', total)

        // object----------------------------

var computer={
    id:'poi',
    processor:'AMD CELERON',
    price:45000,
    HDD:'89gb'
}

// console.log(computer);

// get object property value
var computerHdd= computer.HDD
// console.log(computerHdd);

// set object property value
computer.price = 40000
// console.log(computer);

// break- concept

/*for (let i = 0; i < 10; i++) {
    console.log(i);
    if(i==6){
        break;
    }
}*/
   


    // continue -- concept
    var array=[45,67,88,100,46,78,100,56,34]
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element>70) {
            continue;
        }
        //console.log(element);
        
    }

    //  conversion inch to feet

    function inchToFeet(inches){
        var feet = inches/12;
        return feet;
    }
    var myInches = 132
    var feet = inchToFeet(myInches);
    //console.log('inch to feet',feet);
    
    // conversion mile to km

    function mileToKm(miles){
        var km = miles * 1.61
        return km
    }

    var myMiles = 5;
    var km = mileToKm(myMiles)
    //console.log('matathon mile is :' , km);

    // check even number ?

    /*function isEven(number){
        if(number % 2 ==0){
            return true
        }
        return false
    }

    const myNumber = 1234;
    console.log(isEven(myNumber));*/

    // check odd number

    function isOdd(number){
        if(number % 2 !=0){
            return true
        }
        return false
    }
    const myNumber = 1239;
    //console.log(isOdd(myNumber));

    // Check the leap year------------------------

    function isLeapYear(year){
        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            return true
        }
        return false
    }

    const myYear= 2022
    //console.log(isLeapYear(myYear));

        // factorial------------------------

        function getFactorial(num){
            let factorial = 1
            for (let i = 1; i <=num; i++) {
               factorial = factorial * i
                
            }
            return factorial
        }
        const myFirstFactorial=6
       // console.log(getFactorial( myFirstFactorial));

        // Write a function for a food delivery service that sells 'pizza' only. Each pizza costs 10$. This function takes the food name & quantity as parameter and then return a custom message with order info. This function should be smart enough to handle wrong parameter inputs.

        function pizzaPanda(foodName,quantity){
            if(foodName.toLowerCase() !='piza'){
                return "You only can order piza"
            }else if(quantity < 0){
                return 'use positive number'
            } else if(quantity > 10){
                return 'only 10 pizas left'
            }
            var price = 10 * quantity;
            var message = "order successfull , order info : " + foodName + " price " + price + "$"

            return message
        }

        //console.log(pizzaPanda('piza',10));

        // Switch Case=========================

// var age = 767

// switch (age) {
//   case 40:
//     console.log('too old')
//     break
//   case 25:
//     console.log('young')
//     break
//   case 10:
//     console.log('child')
//     break
//   default:
//     console.log('I dont know')
// }
//console.log('I am outside switch')


// Loop inside a function

function printer(numberLimit) {
    for (var i = 1; i < numberLimit + 1; i++) {
      //console.log(i)
    }
  }
  
  //printer(10)

  // find last index number of an array
   var myArray =[45,78,90,44,34]

  lastIndex=myArray[myArray.length-1];
  //console.log(lastIndex);

  //Find the even numbers in array
  var arrayNumber=[45,78,6,66,89,100]
  function evenArray(arrayNumber){
    var evenNum=[]
    for (let i = 0; i < arrayNumber.length; i++) {
        const element = arrayNumber[i];
        if(element % 2 ==0){
            evenNum.push(element)
        }
    }
    return evenNum;

  }

  var result=evenArray(arrayNumber)
  //console.log(result);

  // Find the large number in an array

  /*var largeNumber = [33,44,76,99,23,70]

  function bigNumber(largeNumber){
    largeNumber.sort(function(a,b){return b-a})
    return largeNumber[0]
  }

  var result = bigNumber(largeNumber)*/
  //console.log(result);

       // Math problem solving===========

    /*const absnumber = -5
    const output =Math.abs(absnumber)*/
    //console.log(output);

    /*const ceilNumber = 21.008
    const output = Math.ceil(ceilNumber)
    console.log(output);*/

    /*const floorNumber = 22.777
    const output = Math.floor(floorNumber)
    console.log(output);*/

   /* const output = Math.random()
    console.log(output);*/

    /*const output = Math.random() *10
    console.log(output)*/

    /*const output = Math.round(Math.random() *10)
    console.log(output)*/

    // Swap variable
    var first =5
    var second =7
    //console.log(first,second);

    var temp = first;
    first = second;
    second = temp;
    //console.log(first,second);



  // Find the summation in array?

   // const numbers=[23,44,56,67,89,2]
   /* let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum=sum+element
        
    }*/

    //console.log('Total summation is ',sum);

    // another way by function

   /* function totalSum(numbers){
        let sum =0;
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            sum=sum+element     
        }
        return sum

    }*/

    //const totalResult=totalSum(numbers)
    //console.log(totalResult);


            // find the largest element of an array
            
  const numbers = [23,44,56,67,89,2]
    function largeNumber(numbers){
      let  largest =numbers[0]
        for (let i = 0; i<numbers.length; i++) {
            const element = numbers[i];
            if (element > largest) {
                largest = element;
            }
            
        }
        return largest
    }

    const largestResult=largeNumber(numbers)
    console.log(largestResult);


