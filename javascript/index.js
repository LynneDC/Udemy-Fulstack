
// function isLeap(year) {
//     if(year % 4 === 0 || year % 400 === 0){
//         console.log("Leap year.");
//     }
//     else{
//         console.log("Not leap year.");
//     }
// }
// if ((year % 4) === 0) {
//     if ((year % 100) === 0) {
//         if ((year % 400) === 0) {
//             console.log("Leap year.");
//         } else {
//             console.log("Not leap year.");
//         }
//     } else {
//         console.log("Leap year.");
//     }
// } else {
//     console.log("Not leap year.");
// }

// isLeap(2400);
// function isleap(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 alert("Leap year");
//             } else {
//                 alert("Not a leap year");
//             }
//         } else {
//             alert("Leap year");
//         }
//     } else {
//         alert("Not a leap year");
//     }
// }

// isleap(2100);

// function bmiCalculator(weight, height) {
//     var heightx = height * height;
//     var mybmi = weight / heightx;
//     //var mybmi = Math.round(bmi);
  
//       if (mybmi < 18.5) {
//           console.log("Your BMI is " + mybmi + ", so you are underweight.");
//       }
//       if (mybmi === 18.5 && mybmi <= 24.9) {
//           console.log("Your BMI is " + mybmi + ", so you have a normal weight.");
//       }
//       if (mybmi > 24.9) {
//           console.log("Your BMI is " + mybmi + ", so you are overweight.");
//       }
//   }
  
//   console.log(bmiCalculator(65, 1.8));
function bmiCalculator(weight, height) {
    var heightx = height * height;
    var mybmi = weight / heightx;
    mybmi = mybmi.toFixed(2); // Format to 2 decimal places
  
    if (mybmi < 18.5) {
      console.log("Your BMI is " + mybmi + ", so you are underweight.");
    }
    if (mybmi >= 18.5 && mybmi <= 24.9) {
      console.log("Your BMI is " + mybmi + ", so you have a normal weight.");
    }
    if (mybmi > 24.9) {
      console.log("Your BMI is " + mybmi + ", so you are overweight.");
    }
  }
  
  // Call the function without console.log
  bmiCalculator(65, 1.8);
  