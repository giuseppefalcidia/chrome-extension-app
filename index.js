//*Build a Chrome Extension 

//*chrome://extensions/


//Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// function buttonClicked(){
// console.log("Button clicked from onclick attribute")
// } 

// document.addEventListener('DOMContentLoaded', function() {}

// Grab the box from the DOM and store it in a variable
// Add a click event listener to the box
// Log out: "I want to open the box!" when it's clicked


// let box = document.getElementById("box");
// box.addEventListener("click", function(){
// console.log("I want to open the box!")
// });


//function openBox() {
//    console.log('I want to open the box!')
//};


// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// Everything inside localStorage has to be a string: so convert the empty array into a string
// let myLeads = [];
let myLeads = `[www.awesomelead.com]`;
myLeads = JSON.parse(myLeads);
myLeads.push("www.awesomelead.com")
console.log(myLeads);
// or use this other method:
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);



const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// Grab the unordered list and store in a const var called ulEl
const ulEL = document.getElementById("ul-el");

//console.log(localStorage.getItem("myLeads", "www.exampleLead.com"));
console.log( localStorage.getItem("myLeads")); //"www.exampleLead.com"

// localStorage.setItem("myName", "Giuseppe Falcidia")
// let name = localStorage.getItem("myName")
// console.log(name);

// localStorage.clear() - clearing out -> NULL


/* 
inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
}); */

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

// Get the leads from the localStorage -
// Store it in a variable - leadsFromLocalStorage
// Log out the var
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);


inputBtn.addEventListener("click", function(){
    // Push the vale from inputEl to the myLeads array
   // myLeads.push("www.awesomelead.com");
   // console.log(myLeads)
   myLeads.push(inputEl.value);
   // Clear out the input field
   inputEl.value = "";

   // Save the myLeads array to localSotrage
   // use JSON.stringify()
   localStorage.setItem("myLeads", JSON.stringify(myLeads));


   renderLeads();

   // To verify that it works:
   console.log(localStorage.getItem("myLeads"));
});


// Log out the the items in the myLeads array using a for loop 
// Render the leads in the unordered list using ulEl.textContent
// for (let i = 0; i < myLeads.length; i++){
    // Take the previous value and then concatenate it with the current lead
    // in order to change something in the html:
    // First one to add it: (with innerHTML)
    // ulEL.innerHTML += "<li>" + myLeads[i] +  "</li>";
    // Second method 
     // const li = document.createElement("li");
    //  li.textContent = myLeads[i];
    // ulEL.append("li")
// }

// Create a var, listItems, to hold all the HTML for the list Items
// Assign it to an empty string to begin with
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // wrap the lead in an anchor tag (<a></a>) inside <li></li>
        // make the link open in a new tab
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        // SIMPLIFY THE PREVIOUS EXPRESSION WITH TEMPLATE STRINGS AND BREAK IT IN MULTIPLE LINES
        listItems += 
        ` 
        <li>
        <a target='_blank' 
        href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li> 
        `
    }
    // Render the listItems inside the unordered list using ulEl.innerHTML
    ulEL.innerHTML = listItems;
}




// Use .innerHTML to render a Buy! button inside the div container
// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy!</button>";
// When clicked, render a paragraph under the button(in the container)
// that says "Thank you for buying!"
// function buy(){
 //   container.innerHTML += "<p>Thank you for buying!</p>" 
// }






