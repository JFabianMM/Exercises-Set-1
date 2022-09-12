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

// The way to display all of the elements is as follows:
// In order to show the parent-child-siblings relationship, each block displays 
// all the siblings of that particular branch. And each element consists of 
// the parent with each child. So on throughout the sweep through the entire tree. 
// For the example is ['AB'] and ['BC','BD']. 


function value(tree){
    let arr=tree;
    let arr2;
    var val;
    var str=[];
    for (let i=0; i<arr.length; i++ ){
        if (i>0){
            if (typeof(arr[i])=='string'){
                val=arr[0]+arr[i];
               str.push(val)
           }else{
               arr2=arr[i];
               val=arr[0]+arr2[0];
               str.push(val)
               value(arr[i])
           }
        }
    } 
    console.log(str)
}

//const tree = ['A', ['B',['C','F','G'],'D',['E','H','I']]];
//const tree=['A',['B','D','E'],'C'];
const tree=['A', ['B','C','D']];
value(tree)

