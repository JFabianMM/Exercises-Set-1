// **************************** //
// Exercise Chapter 3
// **************************** //

// 3. Create a function that will set the color, font-size, and background color of a DOM element.
//    a. If there are fewer arguments, it should place a default value.
//    b. Use the this parameter to access the values of the DOM element. (e.g. this.color
//       or this.style.color)

// Estimated Time: 2 hrs

function setValues(e){      // This is the function that access the values with this.style.backgroundColor, etc.
  let ba1= document.getElementById("back").value;     // Read the values at the input (background)
  let te1= document.getElementById("text").value;     // Read the values at the input (text color)
  let si1= document.getElementById("size").value;     // Read the values at the input (text size)
  
  si1= Number(si1);       // Get the size un number type
  if (si1<=0){            // Detects if the value is acceptable
       si1=20;            // If the value is not defined or negative size the defaul size is applyed in px
    }
  si1 = si1.toString();   
  si1 = si1 + "px";
  // Utilize the format this to assign the values
  this.style.backgroundColor=`${ba1}`;   // Assigns the background color to the element
  this.style.color=`${te1}`;             // Assigns the text color to the element
  this.style.fontSize = `${si1}`;        // Assigns the text size to the element
   
  document.getElementById("p1").innerHTML =`Background color: ${ba1}`;    // Display the value on text
  document.getElementById("p2").innerHTML =`Text color: ${te1}`;          // Display the value on text
  document.getElementById("p3").innerHTML =`Text size: ${si1}`;           // Display the value on text
}

var element = document.getElementById("container");

// Add a click listener to show the element value
element.addEventListener('click', setValues, false);


