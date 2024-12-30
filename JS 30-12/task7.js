


var arrayy = [0,5,7,9];



arrayy.splice(3,1);             //splice here to remove from any part decide the location and how many parts
document.write(arrayy);

arrayy.shift();               //shift remove the first one in array
document.write(arrayy[0]);
document.write("<br>");
document.write(arrayy);
document.write("<br>");


arrayy.pop();                 //pop remove the latest one in array
document.write(arrayy);
document.write("<br>");

arrayy.push(2);              //push added in the last of array
document.write(arrayy);


arrayy.unshift(1);          //unshift to added in the start of array
document.write("<br>");
document.write(arrayy);


arrayy.splice(1,0,6);      //splice to added in any place in array
document.write("<br>");
document.write(arrayy);

arrayy.splice(0,0,10);      //splice to added in any place in array
document.write("<br>");
document.write(arrayy);
