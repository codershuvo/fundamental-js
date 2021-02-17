var student = {id:121, name:'Abir', phone:174265}; 
var student2 = {id:131, name:'mahi', phone:1756}; 

var phoneNo1 = student2.phone;  // 1st 
var phone = student2['phone'];  // 2nd
var phonePropName = "phone"; 
var phoneNo = student2[phonePropName];   // 3rd

student.phone = 56789; // set new value

student2.cinema = "ogni22"; // set new property

console.log(student); 
console.log(student2); 