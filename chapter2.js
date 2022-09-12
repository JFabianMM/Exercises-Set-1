
// **************************** //
// Exercise Chapter 2  (Y)
// **************************** //

// 2. Create a function that can limit the execution of other functions to a determined amount of times.
//    a. Example:
//       function limitFunc (fn, num) { ... } 
//       var limited = limitFunc (fn, 2); 
//       limited (); // executes fine
//       limited (); // executes fine
//       limited (); // does not execute 
// Estimated Time: 6 hour.

function limitFunc(fn, times) {
       var t=times;
       var counter1=0;
       function next() {
         counter1 =counter1 + 1;      
         if (counter1<=t){
              fn()  
         }
       }
       return next;
}
     
fn=function(){
    console.log('Hola')
}

var limited = limitFunc(fn,3);
limited();
limited(); 
limited(); 
limited(); 
limited(); 
     

