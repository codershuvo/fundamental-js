// array
var friendsAge = [15, 17, 14, 16]; 

var sonaliAge = friendsAge[2]; // check no. of position
friendsAge[1] = 22; // set position
var position = friendsAge.indexOf(14); // check position

friendsAge.push(26);  // add last position of value
console.log(friendsAge.length) // koto gula element 
friendsAge.pop(); //remove element for last position
friendsAge.shift(); // remove element for first
friendsAge.unshift(12); // add element for first 

var teaLine = ['somir', 'ahad', 'kalam', 'jamal', 'balam', 'palam', 'talam']; 
var part = teaLine.slice(2, 5); // 2 index theke 5 er age porjonto dhora
console.log(part); 
console.log(teaLine);