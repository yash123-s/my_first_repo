var a=124
var b=48
var c=268
var bill=[124,48,268];
function myFunction(){
	if (bill[0]<50) {
		document.write(" if bill is less than 50 - "+20/100+"</br>");
	}
	else if (50<bill[0]< 200){
		document.write(" if bill is less than 50 - "+15/100+"</br>");
	}
	else{
		document.write(" if bill is less than 50 - "+10/100+"</br>");
	}
	if (bill[1]<50) {
		document.write(" if bill is b/w 50 and 200 - "+20/100+"</br>");
	}
	else if (50<bill[1]< 200){
		document.write(" if bill is b/w 50 and 200 - "+15/100+"</br>");
	}
	else{
		document.write(" if bill is b/w 50 and 200 - "+10/100+"</br>");
	}
	if (bill[2]<50) {
		document.write(" if bill is more than 200 - "+20/100+"</br>");
	}
	else if (50<bill[2]< 200){
		document.write(" if bill is more than 200 - "+15/100+"</br>");
	}
	else{
		document.write(" if bill is more than 200 - "+10/100+"</br>");
	}
}
myFunction();
document.write(0.15+124+"</br>");
document.write(0.15+68+"</br>");
document.write(0.15+268+"</br>");