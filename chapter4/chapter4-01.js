// **************************** //
// Exercise Chapter 04 Exercise 01
// **************************** //

// 4. Create a function that can copy either all or specific properties of an object into another. 
//    The functionality should depend on the arguments received.
//    properties of objB are copied onto objA

//    Example 1: 
//    copyProp(objA, objB);

//    Example 2:
//    only properties p1 and p2 from objB are copied over to objA
//    copyProp(objA, objB, [“p1”, “p2”]); 

// Estimated Time: 2 hour.


var objA = {            // It is defined Object A
  key1 : 'value1',
  key2 : 'value2',
  key3 : 'value1',
  key4 : 'value1',
  key5 : 'value1'
  
};

var objB = {            // It is defined Object B
  key1 : 'val1',
  key2 : 'val2',
  key3 : 'val3',
  key4 : 'val4',
  key5 : 'val5',
  key6 : 'val6',
  key7 : 'val7',
  key8 : 'val8',
  key9 : 'val9',
};

function copyProp(objA, objB, ...args){    // The first 2 arguments are the object A an B. The remain arguments are the properties to be copied.
  if (args.length==0){                            // If there are only two arguments all the properties of B are copied to A. 
      for (var prop in objB) {
           if (objB.hasOwnProperty(prop)) {objA[prop] = objB[prop];}
      }
  }
  if (args.length>0){                             // If there are more than two arguments, only the defined properties are copied.
     for (let i=0;i<=args[0].length-1;i++){
         if (objB.hasOwnProperty(args[0][i])) {objA[args[0][i]] = objB[args[0][i]];}
     }
   }
}

copyProp(objA, objB,['key4','key5','key7'])
//copyProp(objA, objB)

//To show the result I print object A properties
 for (const property in objA) {        // The properties of object A are printed.
      console.log(`${property}: ${objA[property]}`);
 }