// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;

//   function aandeye(age, eye){
//   	this.age=age;
//   	this.eye=eye;
//   }
//   aandeye(this.age,this.eye)
// }
// var myFather = new Person("John", "Doe", 50, "blue");
// document.getElementById("demo").innerHTML ="My father is " +myFather.age + "."; 

// function checkFun(a, b, c){
//     console.log(this);
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     function number(a,b){
//     	console.log(this);
//     console.log(a);
//     console.log(b);
//     }
// }
// checkFun.apply(1,[2,3,4]);

// var array = [1,2,3,4];  
// var newarray=[5,6,7,8]  
// array.push.apply( newarray);  
// document.writeln(newarray); 
var person = {
	firstName:"name",
  	lastName: "secondname",
  }
var person1 = {
  firstName:"fname",
  lastName: "lname"
}
var person2={
	p: function(){
		return this.firstName+ "</br>" +this.lastName;
	}
}
var x = person2.p.apply(person1); 
document.getElementById("demo").innerHTML = x; 