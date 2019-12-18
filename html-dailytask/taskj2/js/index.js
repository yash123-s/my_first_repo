var john=70;
var bunty=60;
var sam=30;
var retire=65;
function myFunction(){
	if(john>=retire){
		return("john is retired"+"</br>")
	}
	else{
		a = 65-john;
		return("john is not retired ,"+" years left "+a+"</br>")
	}
}
document.write( myFunction());
function mybunty(){
	if(bunty>=retire){
		return("bunty is retired"+"</br>")
	}
	else{
		a = 65-bunty;
		return("bunty is not retired ,"+" years left "+a+"</br>")
	}
}
document.write( mybunty());
function mysam(){
	if(sam>=retire){
		return("sam is retired"+"</br>")
	}
	else{
		a = 65-sam;
		return("sam is not retired ,"+" years left "+a+"</br>")
	}
}
document.write( mysam());