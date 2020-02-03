document.addEventListener('DOMContentLoaded', function() {
  // listenToAlertMeButtonClick()
  listenToFormSubmit()
  listenToButtonClicks()
  console.log("The DOM is Loaded")
})
// END OF DOM CONTENT LOADED FILE

//When something is typed in the form, I want to attach it to the page
// IT's been to attach event listener to the whole form

function listenToFormSubmit() {
  const form = document.querySelector('#comment-form');
  form.addEventListener('submit', handleFormSubmit )
}

function handleFormSubmit(event) {
  // prevent default behavior for submit and link events
  event.preventDefault()

  //get the submitted input value..I need to get at it via the EVENT.TARGET,
  //then chain on the input tag(here with ID new-comment) and lastly the value
  const inputField = event.target.querySelector('#new-comment');
  
  //now attach const inputValue to the DOM
  const commentsContainer = document.querySelector('#comments-container');

  //MUST USE BACKTICKS  WITH STRING INTERPOLATION!
  commentsContainer.innerHTML += `<p>${inputField.value}</p>`

  //MUST USE QUOTES WITH REGULAR STRING CONCATENATION:
  //commentsContainer.innerHTML += "<p>" + inputValue +"</p>"
  
  inputField.value = "";
}


// function listenToAlertMeButtonClick() {
//   const alertBtn = document.getElementsByClassName('btn')[1]
//   alertBtn.addEventListener('click', function(){
//     alert("I love the bunnies!");
//   });
// }


//In this section, we'll work on the 3 buttons: alert me, 
  //console log something, console error

  // We'll use event delegation.  Add the event listener once to 
    // the parent of the button

  function listenToButtonClicks() {
    const helicopterParent = document.querySelector('#helicopter-parent');
    helicopterParent.addEventListener('click', handleButtonClicks)
  } 

  function handleButtonClicks(event) {
     //console.log(event.target.dataset.name)

     const clickedButton = event.target.dataset.name

     if (clickedButton === "alert") {
       alert("I love the BUNNIES!")
     } else if (clickedButton === "log") {
       console.log("This is my special console log")
     } else if (clickedButton === "error") {
       console.error("Oopsie!")
     }
  }














// ----------- AMELIE's CODE IS BELOW ------------------


// document.addEventListener("DOMContentLoaded", function() {
//   listenToAlertMeButtonClick();
//   listenToFormSubmit();
//   listenToButtonClicks();
// });

// function listenToButtonClicks() {
//   const helicopterParent = document.getElementById("helicopter-parent");
//   helicopterParent.addEventListener("click", handleButtonClicks);
// }

// function handleButtonClicks(event) {
//   const buttonThatWasClicked = event.target.dataset.name;

//   if (buttonThatWasClicked === "alert") {
//     alert("hello there");
//   } else if (buttonThatWasClicked === "log") {
//     console.log("Im logging something");
//   } else if (buttonThatWasClicked === "error") {
//     console.error("I'm an error");
//   }
// }

// function listenToFormSubmit() {
//   const form = document.getElementById("comment-form");

//   form.addEventListener("submit", handleFormSubmit);
// }

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const inputField = event.target.querySelector("#new-comment");
//   const commentsContainer = document.getElementById("comments-container");

//   const commentPTag = document.createElement("p");
//   commentPTag.textContent = inputField.value;

//   commentsContainer.appendChild(commentPTag);
//   // commentsContainer.innerHTML += `<h2>hello there</h2>`;

//   inputField.value = "";
// }

// function listenToAlertMeButtonClick() {
//   const myButton = document.getElementsByTagName("button")[0];
//   // const myButton = document.querySelectorAll(".btn")[1];
//   // const myButton = document.getElementById('helicopter-parent').children[0].children[1].children[1].children[1].children[0]

//   myButton.addEventListener("click", function() {
//     console.log("button was clicked!");
//   });
// }
document.addEventListener('DOMContentLoaded', function() {
  // listenToAlertMeButtonClick()
  listenToFormSubmit()
  listenToButtonClicks()
  console.log("The DOM is Loaded")
})
// END OF DOM CONTENT LOADED FILE

//When something is typed in the form, I want to attach it to the page
// IT's been to attach event listener to the whole form

function listenToFormSubmit() {
  const form = document.querySelector('#comment-form');
  form.addEventListener('submit', handleFormSubmit )
}

function handleFormSubmit(event) {
  // prevent default behavior for submit and link events
  event.preventDefault()

  //get the submitted input value..I need to get at it via the EVENT.TARGET,
  //then chain on the input tag(here with ID new-comment) and lastly the value
  const inputField = event.target.querySelector('#new-comment');
  
  //now attach const inputValue to the DOM
  const commentsContainer = document.querySelector('#comments-container');

  //MUST USE BACKTICKS  WITH STRING INTERPOLATION!
  commentsContainer.innerHTML += `<p>${inputField.value}</p>`

  //MUST USE QUOTES WITH REGULAR STRING CONCATENATION:
  //commentsContainer.innerHTML += "<p>" + inputValue +"</p>"
  
  inputField.value = "";
}


// function listenToAlertMeButtonClick() {
//   const alertBtn = document.getElementsByClassName('btn')[1]
//   alertBtn.addEventListener('click', function(){
//     alert("I love the bunnies!");
//   });
// }


//In this section, we'll work on the 3 buttons: alert me, 
  //console log something, console error

  // We'll use event delegation.  Add the event listener once to 
    // the parent of the button

  function listenToButtonClicks() {
    const helicopterParent = document.querySelector('#helicopter-parent');
    helicopterParent.addEventListener('click', handleButtonClicks)
  } 

  function handleButtonClicks(event) {
     //console.log(event.target.dataset.name)

     const clickedButton = event.target.dataset.name

     if (clickedButton === "alert") {
       alert("I love the BUNNIES!")
     } else if (clickedButton === "log") {
       console.log("This is my special console log")
     } else if (clickedButton === "error") {
       console.error("Oopsie!")
     }
  }














// ----------- AMELIE's CODE IS BELOW ------------------


// document.addEventListener("DOMContentLoaded", function() {
//   listenToAlertMeButtonClick();
//   listenToFormSubmit();
//   listenToButtonClicks();
// });

// function listenToButtonClicks() {
//   const helicopterParent = document.getElementById("helicopter-parent");
//   helicopterParent.addEventListener("click", handleButtonClicks);
// }

// function handleButtonClicks(event) {
//   const buttonThatWasClicked = event.target.dataset.name;

//   if (buttonThatWasClicked === "alert") {
//     alert("hello there");
//   } else if (buttonThatWasClicked === "log") {
//     console.log("Im logging something");
//   } else if (buttonThatWasClicked === "error") {
//     console.error("I'm an error");
//   }
// }

// function listenToFormSubmit() {
//   const form = document.getElementById("comment-form");

//   form.addEventListener("submit", handleFormSubmit);
// }

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const inputField = event.target.querySelector("#new-comment");
//   const commentsContainer = document.getElementById("comments-container");

//   const commentPTag = document.createElement("p");
//   commentPTag.textContent = inputField.value;

//   commentsContainer.appendChild(commentPTag);
//   // commentsContainer.innerHTML += `<h2>hello there</h2>`;

//   inputField.value = "";
// }

// function listenToAlertMeButtonClick() {
//   const myButton = document.getElementsByTagName("button")[0];
//   // const myButton = document.querySelectorAll(".btn")[1];
//   // const myButton = document.getElementById('helicopter-parent').children[0].children[1].children[1].children[1].children[0]

//   myButton.addEventListener("click", function() {
//     console.log("button was clicked!");
//   });
// }
