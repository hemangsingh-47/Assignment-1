
var sub1 = 85;
var sub2 = 90;
var sub3 = 78;
var sub4 = 88;
var sub5 = 92;

var total = sub1 + sub2 + sub3 + sub4 + sub5;
var percentage = (total / 500) * 100;

  console.log("Total Marks = " + total);
  console.log("Percentage = " + percentage + "%");

if (percentage >= 90) {
    console.log("Grade: A");
}
 else if (percentage >= 80) {
    console.log("Grade: B");
}
 else if (percentage >= 70) {
    console.log("Grade: C");
} 
else if (percentage >= 60) {
    console.log("Grade: D");
}
 else {
    console.log("Grade: Fail");
}

