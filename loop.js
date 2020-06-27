// for (initialization; condition; experession )
// all three statments are optional


// for (var a=0; a<5; a++)
// { 
//     console.log(a);
// }


// for (i=5 ; i>0 ; i--)
// {
//     document.write(i);
// }


// if all three statments missing then loop called infinite

// for ( ; ;)
//  {
//     console.log("Hey");
// }

// table

// var num=5;
// for (i=1; i<=10; i++)
// {
//     console.log(num +"x"+i+"="+(num*i));
// }

// for user input

// var num=parseInt(window.prompt("enter any number"));
// for (i=1; i<=10; i++)
// {
//     console.log(num +"x"+i+"="+(num*i));
// }

// Break and continue

// for (var i=1; i<=10; i++)
// { if(i==4)
//   {  continue;
// }
//     console.log("i = " +i);
// }


// show when number is not prime

// var num = parseInt(prompt("Please enter any number"));
// for (i = 2; i < num; i++) {
//   var result = num % i;
//   if (result == 0) {
//     console.log("number is not prime =" + num + " i=" + i);
//     break;
//   }
  // else {
  //   console.log("number is prime=" + num + " i=" + i);
  // }
// }


// show when number is prime or not
 
// var num = parseInt(prompt("Please enter any number"));
// var isprime=true;
// for (i = 2; i < num; i++) {
//   var result = num % i;
//   if (result == 0) {
//     console.log("number is not prime =" + num + " i=" + i);
//     isprime=false;
//     break;
//   }
// }
// if(isprime)
// {
//   console.log("number is prime " +num);
// }


// make triangle


// for(i=0; i<=7; i++)
// {
// document.write("</br>");
// for(j=0; j<8-i;j++)
// {
//   document.write("&nbsp");
// }
// for(j=7-i;j<=7;j++)
// {
//   document.write("*");
// }
// }

