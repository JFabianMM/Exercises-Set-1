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


// The way I created a tree is through the arrys that give me the perfect structure 
// to easily make the relation for parents and childs

// The example shows the three of a root node (with id="container").
// The result is an array and printed in the console.log.
// I create the child tree untill the 4 order,  this is:
// myElement.children.children.children.children.tagName;
// In the index.html page I create a botton and a square showing the container. 
// The botton run the function that print the tree (array)  

function myFunction() {
   const myElement = document.getElementById('container');
   new Array(len).fill(0);
   let arr1=[];
   //console.log(myElement.children.length);
   var len= myElement.children.length;
   arr1=Array(len).fill(0);
   //console.log(arr1)
   if (myElement.children.length>0){     // First Order
      for (let i = 0; i < myElement.children.length; i++) {
           arr1[i]=myElement.children[i].tagName;     // Fill the First Order Tag Name
           // -----------------------------------------------------------------------------
           if (myElement.children[i].children.length>0){     // Second Order
               let size2=myElement.children[i].children.length;
               //console.log(size2)
               arr1[i]=Array(size2+1).fill(0);
               arr1[i][0]=myElement.children[i].tagName;       // Fill the First Order Tag Name
               for (let ii = 0; ii<size2; ii++){
                  arr1[i][ii+1]=myElement.children[i].children[ii].tagName;    // Fill the Second Order Tag Name
                  // ----------------------------------------------------------------------------------------------
                  let element3=myElement.children[i].children[ii];                               
                  if (element3.children.length>0){               // Third Order
                      let size3=element3.children.length;
                      //console.log(size3)
                      arr1[i][ii+1]=Array(size3+1).fill(0);
                      arr1[i][ii+1][0]=myElement.children[i].children[ii].tagName;   // Fill the Second Order Tag Name
                      for (let iii=0; iii<size3; iii++){
                            arr1[i][ii+1][iii+1]=myElement.children[i].children[ii].children[iii].tagName;  // Fill the Third Order Tag Name
                            // -----------------------------------------------------------------
                            let element4=myElement.children[i].children[ii].children[iii];                               
                            if (element4.children.length>0){               // Third Order
                                let size4=element4.children.length;
                                //console.log(size4)
                                arr1[i][ii+1][iii+1]=Array(size4+1).fill(0);
                                arr1[i][ii+1][iii+1][0]=myElement.children[i].children[ii].children[iii].tagName;   // Fill the Second Order Tag Name
                                for (let iiii=0; iiii<size4; iiii++){
                                      arr1[i][ii+1][iii+1][iiii+1]=myElement.children[i].children[ii].children[iii].children[iiii].tagName;  // Fill the Third Order Tag Name
                                }             
                            }
                      } 
                  } 
               }
           }
         }
         console.log(arr1)
   }
}




