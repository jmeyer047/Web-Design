var age = prompt("How old are you?");
console.log("Converting from years to days...");
var agedays = age*365;
var agesquared = Math.sqrt(age);
console.log(agedays);
if(age<0){
	alert("Can't have a negative age");
}
if(age == 21){
	alert("Happy 21st Birthday!!!");
}
if(age%2 == 1){
	alert("Your age is odd");
}
if(age % agesquared == 0){
	alert("Perfect Square!!!");
}