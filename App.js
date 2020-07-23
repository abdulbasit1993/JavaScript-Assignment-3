// // Chapters # 38 - 42
// // Task # 1
// function calcPower() {
//     var b = document.getElementById("pow").value;
//     var e = document.getElementById("exp").value;
//     var res;
//     res = PowerOfNumber(b, e);
//     document.getElementById("res").innerHTML = res;
// }

// function PowerOfNumber(b, e) {
//     var i, pow = 1;

//     for (i = 0; i < e; i++) {
//         pow = pow * b;
//     }
//     return pow;
// }

// // Task # 2
// function isLeapYear() {
//     var year = document.getElementById("year").value;

//     document.getElementById("GFG").innerHTML = (year % 100 === 0) ? (year % 400 === 0) :
//         (year % 4 === 0);
// }

// // Task # 3
// function triangleArea(a, b, c) {
//     let sp = (a + b + c) / 2;
//     let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
//     console.log(area);
// }
// triangleArea(2, 4, 3.5);

// // Task # 4
// var sub1marks = +prompt("Enter marks obtained in First Subject: ");
// var sub2marks = +prompt("Enter marks obtained in Second Subject: ");
// var sub3marks = +prompt("Enter marks obtained in Third Subject: ");
// var grandtotalMarks = 350;

// function averageMarks(x, y, z) {
//     var avg = (x + y + z) / 3;
//     return avg;
// }

// function percentofMarks(m1, m2, m3) {
//     var perc = (m1 + m2 + m3) / grandtotalMarks * 100;
//     return perc;
// }

// function mainFunc() {
//     var averMarks = averageMarks(sub1marks, sub2marks, sub3marks);
//     alert(averMarks);

//     var percMarks = percentofMarks(sub1marks, sub2marks, sub3marks);
//     alert(percMarks);
// }

// // Task # 6
// function removeVowels(str){
//     var vowels = "aieuo";
//     var strArr = str.toLowerCase().split("");
//     var newArr = strArr.filter(function(letter){
//         if(vowels.indexOf(letter)  == -1){
//             return letter;
//         }
//     });
//     var string = "";
//     newArr.forEach(function(letter){
//         string += letter;
//     });
//     return string;
// }

// print(removeVowels('ABDUL BASIT'));


// // Task # 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());

//   // Task # 8
//   var distance = +prompt("Enter the distance between two cities (in km.):");

//   function kmToMeters(km) {
//       var meterdist = km * 1000;
//       alert(km + " kilometers is equal to " + meterdist + " meters");
//   }
//   kmToMeters(distance);

//   function kmToFeet(km) {
//     var feetdist = km * 3280.84;
//     alert(km + " kilometers is equal to " + feetdist + " feet");
// }
// kmToFeet(distance);

// function kmToInches(km) {
//     var inchdist = km * 39370.1;
//     alert(km + " kilometers is equal to " + inchdist + " inches");
// }
// kmToInches(distance);

// function kmTocenti(km) {
//     var centidist = km * 100000;
//     alert(km + " kilometers is equal to " + centidist + " centimeters");
// }
// kmToInches(distance);

// // Task # 9
// function get_salary() {
//     var hours = prompt("Please enter the number of hours you worked this week");
//     var rate = prompt("Please enter how much money you earn per hour");
//     if (hours>= 40)
    
//     {
//     regpay = (rate * 40)
//     overtimepay = ((rate * 1.5) * (hours - 40))
//     pay = (regpay + overtimepay)
    
//     alert ("You earned overtime this week! Your total pay is " + pay);
//     }
    
//     else 
//     {
//     regpay = (rate * hours)
//     overtimepay = 0.00
//     alert ("Your total pay is " + regpay);
//     }
//     }

// // Task # 10
// var withdrawAmount = +prompt("Please input amount for withdraw : ");
// function noteDenominations(amount) {
//     var notes_100 = amount / 100;
//     var notes_50 = (amount % 100) / 50;
//     var notes_10 = (((amount % 100) % 50) / 10);
//     alert("Required notes of Rs. 100 are: " + notes_100);
//     alert("Required notes of Rs. 50 are: " + notes_50);
//     alert("Required notes of Rs. 10 are: " + notes_10);
// }
// noteDenominations(withdrawAmount);

// // Chapters # 43 - 48
// // Task # 1
// function displayAlert() {
//     alert("You clicked the link!");
// }

// // Task # 2
// function thanksAlert() {
//     alert("Thanks for purchasing a phone from us");
// }