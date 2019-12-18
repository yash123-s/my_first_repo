function isLeapYear() { 
var year= document.getElementById("year").value;   
if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
  {
    document.write(year+" is a leap year" + "<br>");  
    document.write("It as a 28 days");  
  }
  else
    {
      document.write(year+" is not a leap year" + "<br>"); 
      document.write("It as a 29 days"); 
    }
  }