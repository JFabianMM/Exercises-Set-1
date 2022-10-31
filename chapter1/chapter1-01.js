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
         let order=arr.sort(), count1, count2;
         function isNotV(x) {
            return (/[bcdfghjklmnñpqrstvwxyz]/i).test(x); 
         }
         function countCons(strChar, strchar2) {
            count1 = strChar.split('').filter(isNotV).length;
            count2 = strchar2.split('').filter(isNotV).length;
            if (count1 === count2) return strChar.localeCompare(strchar2);
            return count1 - count2
        }
          if (types=='b'){ 
              order = order.sort((a,b) => a.length - b.length);
          }
          if (types=='c'){   
              order = order.sort((a,b) => b.length - a.length);
          }
          if (types=='d' || types=='e' ){ 
              order= arr.sort(countCons);
          }
          if (types=='a' || types=='e' ){  
              order=order.reverse(); 
          }
         return order
}

let arr = ['uias', 'manzanasjh', 'banas', 'badnas', 'bajknas'];
console.log(order(arr, types='e'))

