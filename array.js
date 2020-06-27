// tw0 types of array 1(array literal) 2(new keyword)
// var arr = new Array();

// var foods=["pizza" , "burger" , "shawarma"];
// var a = foods[0];
// var b = foods[1];
// alert(a);
// console.log(foods[2]);


// we use multiple data types in one varible.

// var arr1 = [22,34,56,78,12];
// var arr2 = [true,false,56,"ahsan"];
// var arr3 = [{name: "hafiz ahmad"},{name: "ahmad irshad"}];
// document.write(arr2[1]);
// document.write("<br>");
// document.write(arr3[1]);

// accessing full array

// var abc = [22,34,56,78,12];
// console.log(abc);


// adding elements in an array

// var sports = [];
// console.log(sports);
//  sports[0] = "Cricket";
// sports[1] = "Football";
// sports[2] = "Badminton";
// sports[6] = "Hockey";
// console.log(sports.length);

// update elements in an array

// var ab =["hafiz","ahmad","sammam"];
// ab[1] = "Sk";
// console.log(ab);

// for finding length

// var ab =["hafiz","ahmad","sammam"];
// ab.push("ahsan","zubair");
// console.log(ab.length);
// console.log(ab);


// string ki b length hoti ha

// var a = "today i am going to take part in preparing lecture";
// console.log(a.length);

// Escape characteristics

// var a = "My name is \"ahsan"
// var b = "hello \n world";
// var c = "Hello \t hafiz";
// console.log(a);
// console.log(b);
// console.log(c);

// string function

// toLowerCase and toUpperCase

// var hafiz = "PETROL PUMP";
// var input = prompt("enter things you want");
// if(hafiz===input)
// var a = hafiz.toLowerCase;
// var b = input.toLowerCase;

// if(a===b)
// {
//     console.log("Matched");
// }
// else{
//     console.log("Not Match");
// }

// slice function for string

// var a = "Hello world";
// var b = a.slice(3);
// console.log(b);

// var c=a.slice(-5,-3);
// console.log(c);

// Indexof & lastindexof function

// var z = "to be or not to be";
// var y = z.indexOf("be",4);
// console.log(y);

// var z = "to be or not to be";
// var y = z.lastIndexOf("be",15);
// console.log(y);

// charAt & replace

// var a = "to be or not to be";
// var b = a.charAt(2);
// console.log(b);

// var a = "To be or not to be to";
// console.log(a);
    // var b = a.replace("be","hey");
// var b = a.replace(/be/g,"hey");
// var b = a.replace("To","tata");
// var b = a.replace(/to/i,"SK");
// var b = a.replace(/to/gi,"Pump");
// console.log(b);

// split function

// var a = "to be or not to be";
// var b = a.split(" ");
// var b = a.split("");
// console.log(b);

// var a = "to be, or|not,to be";
// var b = a.split(",");
// var c = a.split("|");
// var d = a.split(" ");
// console.log(b);
// console.log(c);
// console.log(d);

// Math class (round,ceil,floor)

// var percentage = 22/7;
// console.log(percentage);
// console.log(Math.round(percentage));

// var a = Math.round(6.4);
// console.log(a);

// var a = Math.ceil(4.7);
// var b = Math.ceil(4.1);
// console.log(a);
// console.log(b);

// var a = Math.floor(4.7);
// var b = Math.floor(3.3);
// console.log(a);
// console.log(b);


// Random num

// var num = Math.random();
// console.log("num =" +num);

// var num2 = num * 6;
// console.log("num2 =" +num2);

// var num3 = num2 + 1;
// console.log("num3 =" +num3);
// var num4 = Math.floor(num3);
// console.log("num4 =" +num4);

// to fixed function

// var division = 500/3;
// console.log(division);
// var divi = division.toFixed(2);
// console.log(divi);

// Date object

// var date = new Date();
// console.log(date);
// var date1 = new Date(2020,1,10,10,20,40,50);
// // console.log(date1);
// var date2 = new Date("2019/12/12 3:20:10");
// console.log(date2); 


// unix time & epox time

// var date = new Date();
// date.getTime();
// console.log(date.getTime());

// var date = new Date(5);
// console.log(date);

// retreiving date components

// var date = new Date();
// console.log(date);
// var a = date.getFullYear();
// var b = date.getMonth();
// var c = date.getDate();
// var d= date.getDay();
// var e = date.getHours();
// var f = date.getMinutes();
// var g = date.getSeconds();

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// Modifying date

// var date = new Date();
// console.log(date);
// date.setFullYear(1992);
// date.setMonth(11);
// date.setDate(25);
// console.log(date);


// converting days of week into text

var date = new Date();
console.log(date);
var ab = date.getDay();
var dayslist =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
console.log(dayslist[ab]);