    var d="day1";
	switch (d) 
	{
		case "day2":
	    document.write("Monday");
	    break;
	  case "day1":
	   document.write("Sunday"+"</br>");
	    break; 
   }
function myFunction(p1=3,p2=4) {
  return p1 * p2;
}
document.write(myFunction()+"</br>");
document.write(myFunction());