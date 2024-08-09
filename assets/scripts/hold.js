


const isRainFalling = true;
function bringUmbrella(isRaining, isLightening){
  if(isRaining === true && isLightening === true){
    return "stay home";
  }else if(isRaining === true && isLightening !== true){
 return "bring your umreella"
  }
  else if(isRaining !== true && isLightening === true){
        return "its best you stay at home because it could rain later";
  }
  else{
    return "don't bring umbrella";
  }
}

console.log(bringUmbrella(false, true));



function checkNumber(value){
    if(typeof value !== "number"){
        return "not a number";
    }
    switch(value % 2){
        case 0:
            return "value is an even number";

            case 1:
                return "value is an odd number";

                default:
                    return "value is an unknown number";
    }
}

console.log(checkNumber(true));



function gradeChecker(value){
    if(value <= 0 || value >= 100 ){
        return "out of range";

    }else if(value >= 80 ){
        return "You scored an A+";
    }
    else if(value >= 70 && value <= 80 ){
        return "You scored an A";
    }
    else if(value >= 60 && value <= 70 ){
        return "You scored a B";
    }
    else if(value >= 50 && value <= 60 ){
        return "You scored a C";
    }
    else if(value >= 40 && value <= 50 ){
        return "You scored an D";
    }
    else if(value >= 30 && value <= 40){
        return "You scored E";
    }else if(value >= 20 && value <= 30){
        return "you failed"
    }
}

console.log(gradeChecker(42));



function checkColor(code){
    switch(code){
      case 1:
        return "the color is pink";
  
        case 2:
        return "the color is blue";
  
      default:
        return "color is not defined";
    }
  }
  console.log(checkColor(1));



//   FOR LOOP IN JAVA SCRIPT

// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;
// var i = 0;
// for(let i=0; i<numbers.length; i++){
//     sum += numbers[i]
    
// }
// console.log(sum);

// WHILE LOOP
// const arr = [
//     "Ada", "Obi", "Chika", "Eke"
// ]

// console.log(arr.length);
// console.log(arr[3]);


// WHILE LOOP

// var numbers  = [20, 50, 7, 4, 3, 8, 90, 58, 23, 70];
// var sum = 0;
// var i = 0;

// while(i < numbers.length){
//     sum += numbers[i]
//     i += 1;
// }

// console.log(i);




// DO LOOP

var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;
var i = 0;

do{
    sum += numbers[i];
    i += 1;

}while(i < numbers.length)

    console.log(sum);