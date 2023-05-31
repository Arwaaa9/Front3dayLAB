const firstName = " Arwa"; // my name <3   ////  quistion 1
const LastName = " Alharbi"; // my last name <3
let Email = "arwa.nalharbi@gmail.com";
let age = 20;
/*
this is 
lab day 3 
*/
console.log(firstName + " " + LastName + " " + " " + Email + "   " + age); //  quistion 2
document.write(
  "my name  " +
    firstName +
    " " +
    LastName +
    " " +
    "my email " +
    Email +
    " my age is" +
    age +
    "   <3 "
);
console.log(typeof firstName, typeof LastName, typeof Email, typeof age); // string string string number

//**************************************************** //  quistion 3

function mergeStrings(Arwa, nuwayhi, Alharbi) {
  return "    " + Arwa + "  " + nuwayhi + "  " + Alharbi;
}
let mergedString = mergeStrings("Arwa", "nuwayhi", "Alharbi");
//document.write(mergedString); // quistion 4 will be print arwa alharbi

//**************************************************** //  quistion 4
 

for (let i = 1; i <= 20; i += 2) {
  console.log(i); // quistion 5 print numbers 2 4 6 8 10 12 14 16 18 20 just
}

//**************************************************** //  quistion 5


function addNumbers(num1, num2) {
  let sum = num1 + num2;
  if (sum > 100) {
    console.log(sum);
    return true;
  } else {
    console.log(sum);
    return false;
  }
}

let result = addNumbers(60, 50);
console.log(result);


// سيتم طباعة "true" إذا كان الناتج أكبر من 100 

//****************************************************// quistion 6

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
console.log(multiply(2, 3));
console.log(divide(6, 3));
console.log(add(2, 3));
console.log(subtract(5, 3)); 

//****************************************************//// quistion 7

function calculateAverage(num1, num2) {
  return (num1 + num2) / 2;
}
let result1 = calculateAverage(20, 20);
console.log(result1); // the result is 20 

//*************************************************** //  quistion 8
let Vat = (price) => {
  const vat = 0.15;
  const vatAmount = price * vat;
  const totalAmount = price + vatAmount;
  return totalAmount;
};

console.log(Vat(40)); 

//***************************************************// quistion 9

function isEven(num) {
  switch (true) {
    case num % 2 === 0:
      return true;
    default:
      return false;
  }
}

console.log(isEven(19));

//*************************************************** quistion 10

function Grade(score) {
  if (score >= 95) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 85) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 75) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}

console.log(Grade(100));

//*************************************************** quistion 11

let squared = () => {
  for (i = 0; i <= 10; i++) {
    console.log(i * i);
  }
};

squared(10);
//*************************************************** quistion 12

let oddNumber = () => {
  for (let i = 0; i <= 20; i += 1) {
    console.log(i);
  }
};

oddNumber(4);

//*************************************************** quistion 13


function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2002));
//*************************************************** quistion 14
let stairs = () => {
  for (let i = 1; i <= 8; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
      num += j ;
    }
    console.log(num);
  }
};

stairs();