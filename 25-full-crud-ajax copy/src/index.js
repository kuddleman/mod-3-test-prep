document.addEventListener("DOMContentLoaded", () => {
  // Once the DOM is loaded we fetch our pokemon and set up additional event listeners
  console.log("The DOM is LOADED")
 
  fetchPokemon();
  deletePokemon();
  createPokemon();
});

function createPokemon() {
  // grab the place we'll put the new pokemon:
  const createPokemonForm = document.querySelector("#pokemon-post-form")

  // put event listener on the pokemon form (NOT the submit button):
  const pokemonPostForm = document.querySelector('#pokemon-post-form')
  pokemonPostForm.addEventListener('submit', function(event) {
     event.preventDefault();
    // grab info that the user has entered in the form
    const name = document.getElementById('name-input').value
    const front = document.getElementById('sprite-input-front').value
    const back = document.getElementById('sprite-input-back').value
     
    //construct data in the from it is in the database
    const data = {
      name: name,
      sprites: {
        front: front,
        back: back
      }
    };

    //send entered info to backend.
    fetch("http://localhost:3000/pokemon", { 
      method: "POST", 
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(resp => resp.json())
      .then(newPokemon => {
        const pokemonContainer = document.querySelector('#pokemon-container')
        const newPokemonDiv = renderSinglePokemon(newPokemon);
        pokemonContainer.innerHTML += newPokemonDiv;
      });


    // NO Optimistic render because we need the id automatically assigned
      // to the new pokemon that only comes from the backend
    

  });
}

function deletePokemon() {
  const pokemonContainer = document.querySelector('#pokemon-container');
  pokemonContainer.addEventListener('click', handleDeleteClick);
}

function handleDeleteClick(event) {
  
  if (event.target.className === "pokemon-button") {
    const pokemonId = event.target.dataset.id

    // // *****BEGIN OPTIMISTIC REMOVAL

    // //Optimistic Removal:
    // //1. update backend by sending fetch DELETE rqst

    // fetch(`http://localhost:3000/pokemon/${pokemonId}`, {
    //   method: "DELETE"
    // })

    // //2. update frontend by remove pokemon from DOM
    // //optimistic removal:
    // document.getElementById(pokemonId).remove();

    // // ****** END OPTIMISTIC REMOVAL

    // ****** BEGIN PESSIMISTIC REMOVAL

    fetch(`http://localhost:3000/pokemon/${pokemonId}`, {
      method: "DELETE"
    }).then(response => {
      if (response.status === 200) {
        event.target.parentElement.parentElement.remove()
      }
    })
   // ******* END PESSIMISTIC REMOVAL

  }
}














// ****** BEGIN Amelie's NEW code ***********

// function createPokemon() {
//   const createPokemonForm = document.querySelector("#pokemon-post-form");

//   createPokemonForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Grab info that the user types in from our form
//     const name = document.getElementById("name-input").value;
//     const front = document.getElementById("sprite-input-front").value;
//     const back = document.getElementById("sprite-input-back").value;

//     const data = {
//       name: name,
//       sprites: {
//         front: front,
//         back: back
//       }
//     };

//     // Send this stuff to our backend
//     fetch("http://localhost:3000/pokemon", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" }
//     })
//       .then(resp => resp.json())
//       .then(newPokemon => {
//         const pokemonContainer = document.querySelector("#pokemon-container");
//         const newPokemonDiv = renderSinglePokemon(newPokemon);

//         pokemonContainer.innerHTML += newPokemonDiv;
//       });

//     // NO Optimistic render because we need the id for the new pokemon (from the backend)
//   });
// }

// function deletePokemon() {
//   const pokemonContainer = document.querySelector("#pokemon-container");

//   pokemonContainer.addEventListener("click", handleDeleteClick);
// }

// function handleDeleteClick(event) {
//   if (event.target.tagName === "BUTTON") {
//     const pokemonId = event.target.dataset.id;

//     // 1. Update backend (by sending fetch DELETE request)
//     // setTimeout(() => {
//     fetch(`http://localhost:3000/pokemon/${pokemonId}`, {
//       method: "DELETE"
//     }).then(response => {
//       if (response.status === 200) {
//         // 2. Update frontend (by removing item from the DOM)
//         // Pessimistic render
//         // event.target.parentElement.parentElement.remove();
//       }
//     });
//     // }, 5000);

//     // 2. Update frontend (by removing item from the DOM)
//     // Optimistic render
//     document.getElementById(pokemonId).remove();
//   }
// }






// ***** END of Amelie's NEW CODE ********

function fetchPokemon() {
  // Once a user loads the page we fetch all of our pokemon from our json-server backend
  fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(allPokemonJson => {
      const pokemonContainer = document.querySelector("#pokemon-container");

      // We change the innerHTML of our parent container by mapping over
      // all of our pokemon (that we got from the database)
      // and formatting each one with the renderSinglePokemon function
      pokemonContainer.innerHTML = allPokemonJson
        .map(pokemon => renderSinglePokemon(pokemon))
        .join("");
    });
}

function renderSinglePokemon(pokemon) {
  // Create a pokemon card with divs/buttons etc, the id is how we figure out which pokemon has been clicked
  return `
        <div class="pokemon-card" id="${pokemon.id}">
          <div class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div class="pokemon-image">
              <img data-id="${pokemon.id}" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
            <button data-id="${pokemon.id}" class="pokemon-button">Delete</button>
          </div>
        </div>`;
}
