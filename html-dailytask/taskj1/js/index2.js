var john=70;
var spy=60;
var rob=80;
var smith=90; 
document.write(" john = "+john+"</br>");
document.write(" spy ="+spy+"</br>");
document.write(" rob ="+rob+"</br>");
document.write(" smith ="+smith+"</br>");
var total=john+spy+rob+smith;
document.write(" total is "+total+"</br>");
var average=total/4;
document.write(" average is "+average+"</br>");
var grade=john<average?"C":"D";
document.write(" john = "+grade+"</br>");
var grade1=spy<average?"C":"D";
document.write(" spy ="+grade1+"</br>");
var grade2=rob>average?"B":"C";
document.write(" rob ="+grade2+"</br>");
var grade3=smith>=average?"A":"B";
document.write(" smith ="+grade3+"</br>");