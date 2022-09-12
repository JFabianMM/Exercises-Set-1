
// **************************** //
// Exercise Chapter 02 Exercise 01
// **************************** //

// 2. Create a function that can limit the execution of other functions to a determined amount of times.
//    a. Example:
//       function limitFunc (fn, num) { ... } 
//       var limited = limitFunc (fn, 2); 
//       limited (); // executes fine
//       limited (); // executes fine
//       limited (); // does not execute 
// Estimated Time: 6 hour.

function limitFunc(fn, num) {   
  var counter1=0;
  function next(...arg) {
    counter1 =counter1 + 1;      
    if (counter1<=num){
         let result=fn(...arg)      
         return result      
    }
  }
  return next
}

var fn=function(a,b){
   let aa=a;
   let bb=b;
   let sum = aa+bb;
return sum;
}

var limited = limitFunc(fn,3);
console.log(limited(6,3)); 
console.log(limited(7,3));   
console.log(limited(8,3)); 
console.log(limited(2,3)); 
