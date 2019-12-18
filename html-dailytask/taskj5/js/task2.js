var abc = { name:"kavya Gowda" };
var def = function(x,y)
{
    return this.name   + x + " " +y;
};
var bound = def.bind(abc); 
document.write(bound(" I ","choose you! " +"</br>"));
document.write(bound(" loves  Icecream and ", "Listening Music"));