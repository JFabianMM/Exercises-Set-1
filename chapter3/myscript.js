// **************************** //
// Exercise Chapter 3
// **************************** //

// 3. Create a function that will set the color, font-size, and background color of a DOM element.
//    a. If there are fewer arguments, it should place a default value.
//    b. Use the this parameter to access the values of the DOM element. (e.g. this.color
//       or this.style.color)

// Estimated Time: 2 hrs


function setNewParameters(a='rgb(131, 17, 0)',b='rgb(0, 97, 255)',c='60px') {    // The function has defined default values
  document.getElementById("container").style.backgroundColor=`${a}`;
  document.getElementById("container").style.color=`${b}`;
  document.getElementById('container').style.fontSize = c; 
  }
  

function myFunction() {
  let ba= document.getElementById("back").value;
  let te= document.getElementById("text").value; 
  let si= document.getElementById("size").value;
  si = si.toString();
  si = si + "px";
  setNewParameters(ba, te, si)      // If the function lacks of parameters, it has default values
}

function getValues(e){      /// This is the function that access the values with this.style.backgroundColor, etc.
  let ba=this.style.backgroundColor;
  let te=this.style.color;
  let si=this.style.fontSize; 

  si = si.toString();
  
  document.getElementById("p1").innerHTML =`Background color: ${ba}`;
  document.getElementById("p2").innerHTML =`Text color: ${te}`;
  document.getElementById("p3").innerHTML =`Text size: ${si}`;
}

var element = document.getElementById("container");

// Add a click listener to show the element value
element.addEventListener('click', getValues, false);


