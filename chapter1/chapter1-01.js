// **************************** //
// Exercise Chapter 01 Exercise 01 
// **************************** //

// 1. Given an array of words, write a function that will sort the array in ascending order. 
//    It should also take an optional argument that can customize the sorting order. Custom sorting orders:
//    a. descending
//    b. sort by length ascending
//    c. sort by length descending
//    d. sort by number of consonants ascending
//    e. sort by number of consonants descending.
//    Estimated Time: 1 hour.

function order(arr, types='a'){
         var ord= arr.sort()
         let a=types;
         function isNotV(x) {
          return (/[bcdfghjklmnñpqrstvwxyz]/i).test(x); 
         }
         function countCons(strChar, strchar2) {
          var count1 = strChar.split('').filter(isNotV).length;
          var count2 = strchar2.split('').filter(isNotV).length;
          if (count1 === count2) return strChar.localeCompare(strchar2);
          return count1 - count2
        }
         if (a=='a'){
              ord = ord.reverse();
              return ord;       
         }
          if (a=='b'){
              const asce = ord.sort((a,b) => a.length - b.length);
              return asce;       
          }
          if (a=='c'){
              const desc = ord.sort((a,b) => b.length - a.length);
              return desc;       
          }
          if (a=='d'){
              arr.sort(countCons);
              return arr;    
          }
          if (a=='e'){        
              arr.sort(countCons);
              arr=arr.reverse();
              return arr;    
          }
         return ord
}

var arr = ['uias', 'manzanasjh', 'banas', 'badnas', 'bajknas'];
console.log(order(arr, types='e'))

