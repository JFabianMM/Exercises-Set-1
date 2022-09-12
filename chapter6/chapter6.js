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

function value(tree){
    let arr=tree;
    var val;
    var str=[];
    for (let i=0; i<arr.length; i++ ){
        if (typeof(arr[i])=='string'){
            val=arr[i];
            str.push(val);
        }else{
            str=str.concat(value(arr[i]));
        }
    } 
    return str
}

//const tree = ['A', ['B',['C','F','G'],'D',['E','H','I']]];     // Example 1
//const tree=['A',['B','D','E'],'C'];                            // Example 2
const tree=['A', ['B','C','D']];                                 // Example 3

console.log(value(tree))

