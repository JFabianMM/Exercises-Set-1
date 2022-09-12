// **************************** //
// Exercise Chapter 6   
// **************************** //

// 6. Create a tree structure and a function that will display all of the elements in that tree. 
//    The function should not require any change in case the structure changes.
//    a. Example of tree structure, not of expected output:

//            A 
//         /  |  \ 
//        a   b   c
//        |  / |  | \ 
//       aa ba bb ca cb
//                   | 
//                   cba
// 
//    Estimated Time: 8 hour.

// The Schema is as follows: The tree is formed with an Array, the first element is 
// the parent name,  and the following elements will be its children. In the case 
// of the following example, 'A' is the parent and  'B', 'C' and 'D' its children nodes. 
// Any node with a string information means have not childrens (are the leaves). 
// If any of the children is formed by and object, this means is one more branch, 
// where the first element is the parent and the remain elements its childrens.
 
// Example:  
// tree=['A', ['B','C','D']]; 


// 6) Printing a tree
// Try to stick to a standard tree node structure. Using an array structure 
// like the one you are using is not standard. A standard structurer would look something like:

// const root = {
// 	  value: ‘A’,
// 	  children: [
// 		  { value: ‘a’, children: […]},
// 		  { value: ‘b’, children: […]},
// 		  { value: ‘c’: children: […]},
// 		   …
//	  ]
//  };

class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
}

function value(arr){
    let val;
    let val1;
    for (let i=0; i<arr.length; i++ ){
        if (i==0){
            val=new Node(arr[i]);
        }else{
            if (typeof(arr[i])=='string'){
                val1=new Node(arr[i]);
                val.children.push(val1);
            }else{
                val.children.push(value(arr[i]));
            }
        }
    } 
    return val;
}

//let tree = ['A',['B',['C','F','G'],'D',['E','H','I']]];      // Example 1
//let tree=['A',['B','D','E'],'C'];                            // Example 2
//let tree=['A',['B','C','D']];                                // Example 3

let tree = ['A', 'B',['C','F'],'G'];  
console.log(value(tree));