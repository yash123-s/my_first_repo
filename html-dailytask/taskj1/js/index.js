var mmass=10;
var jmass=20;
var mheight=6;
var jheight=4;
var BMI1=mmass/(mheight*jheight);
var BMI2=jmass/(mheight*jheight);
document.write(" BMI of mark = "+BMI1+"</br>")
document.write(" BMI of john = "+BMI2+"</br>");
var compare=(BMI1<BMI2);
document.write("Is Mark's BMI higher than john's? " +compare);
console.log("Is Mark's BMI higher than john's? " + compare)