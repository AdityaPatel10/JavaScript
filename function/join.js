// let arr = ['A', 'D', 'I']
// let bag = "";
// for (let i = 0; i < arr.length; i++){
//     bag += arr[i];
// }
// console.log(bag);
// console.log(typeof(bag));

// // using function

// let arr1 = ['A', 'D', 'I']
// console.log(arr1.join());
function customJoin(arr, char) 
{ 
if(char == undefined) 
{ 
char = ","; 
} 
var bag=""; 
for(var i=0; i<arr.length; i++) 
{ 
if(i != arr.length-1) 
{ 
bag = bag + arr[i] + char; 
} 
else 
{ 
bag = bag + arr[i]; 
} 
} 
return bag; 
} 
var arr = ["M","A","N"]; 
console.log(customJoin(arr));