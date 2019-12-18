var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
   time();
} else if (hr == 12) {
    document.write("Good Afternoon!");
} else if (hr >= 12 && hr <= 17) {
    document.write("Good Evening!");
} else {
    document.write("Good night !");
}
document.write();

function time(){
    document.write("Good Morning!");
}