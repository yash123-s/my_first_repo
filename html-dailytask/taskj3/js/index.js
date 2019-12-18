var color=["red","black","blue"]
document.write(color[0].length+"</br>")
document.write(color[1].length+"</br>")
document.write(color[2].length+"</br>")
if(color[0].length>color[1].length){
	document.write(color[0]+" has the highest length");
}
else if(color[1].length>color[2].length){
	document.write(color[1]+" has the highest length");
}
else{
	document.write(color[2]+" has the highest length");
}

