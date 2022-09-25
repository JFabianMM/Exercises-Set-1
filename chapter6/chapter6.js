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

// EXPLANATION
 
// The Schema is as follows: The tree is formed with an Array, the first element of the Array 
// is the parent,  and the following elements of the array will be its childrens.
// In the case of the following example:

// Example:  
// tree=['A', ['B','C','D']]; 

// 'A' is the parent and  'B', 'C' and 'D' its children nodes. 
// Any node with a string information means that it do not have childrens (are the leaves). 
// If any of the children is formed by and object (Array), this means there is one more branch, 
// where the first element is the parent and the remain elements its childrens.

// The resoult of the printed three of the previous example would be like this:
//[ 'A' ]                   // This is the first level (root)
//[ 'A-B', 'A-C', 'A-D' ]   // This is the second level  A-B merans A is the parent and B is one of its children
                            // Each printed array corresponds to each level of ramification

// For more levels of ramification, this is another example:
// tree=['A',['B',['D','E','J']],'H']; 

// The result would be like this:
// [ 'A' ]             // First level
// [ 'A-B', 'A-H' ]    // Second Level   A has two childrens B and H
// [ 'B-D' ]           // Third level    B is the parent and D its children 
// [ 'D-E', 'D-J' ]    // Forth level    D has two childrens E and J            
 

// 6) Printing a tree
// Try to stick to a standard tree node structure. Using an array structure 
// like the one you are using is not standard. A standard structurer would 

// const root = {
// 	  value: ‘A’,
// 	  children: [
// 		  { value: ‘a’, children: […]},
// 		  { value: ‘b’, children: […]},
// 		  { value: ‘c’: children: […]},
// 		   …
//	  ]
//  };

class Root {
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
            val=new Root(arr[i]);
        }else{
            if (typeof(arr[i])=='string'){
                val1=new Root(arr[i]);
                val.children.push(val1);
            }else{
                val.children.push(value(arr[i]));
            }
        }
    } 
    return val;
}

//let tree = ['A',['B',['C','F',['G','J']],'D',['E','H',['I','K',['L','M','N']]]]]; // Example 1
//let tree=['A',['B','D','E'],'C'];                                                 // Example 2
//let tree=['A',['B','C','D']];                                                     // Example 3
//let tree=['A','B','C','D'];                                                       // Example 4
let tree=['A',['B',['D','E','J']],'H',['C','F','G'],'I'];                         // Example 5

let root = value(tree);     // First I create the tree structure from an array

function printTheTree(root){
    function getTheTree(root, level=0, mainRoot=true){
        let result=[], result2=[], parent,  nextRoot;
        for (let [key, value] of Object.entries(root)) {
            if (key=='value'){
                parent=`${value}`; 
                if (mainRoot==true){
                    result.push(level);
                    result.push(parent);  
                    result2[0]=result;
                    result=[];
                }           
            }
            if (key=='children'){
                let len=root.children.length;
                if (len==1){
                    level++;
                    result.push(level);
                    result.push(parent +'-'+ root.children[0].value);
                    result2[result2.length]=result;
                    if (root.children[0].children.length>0){
                        nextRoot=root.children[0];
                        result2.push(getTheTree(nextRoot, level, false));
                    }
                }
                if (len>1){
                    level++;
                    result.push(level);
                    root.children.forEach(element => result.push(parent +'-'+ element.value));
                    result2[result2.length]=result;
                    root.children.forEach(element =>{                
                        if (element.children.length>0) result2.push(getTheTree(element, level, false));
                    })
                }
                result2=result2.flat(1);
            }   
        }
    return result2;
    }
    let arr=[], num=0;
    arr[0]=[];
    let result=getTheTree(root);

    result.forEach((element) => {
        if (typeof(element)=="number"){
             if (element>num){
                 num=element;
                 arr[num]=[];
             }
         }});
    result.forEach((element) => {
        if (typeof(element)=="number"){
            num=element;
        }else{
            arr[num].push(element);
        }});
    arr.forEach(element => console.log(element));
    return arr
}

printTheTree(root);
