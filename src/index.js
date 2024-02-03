function displayRiddle(response) {
  new Typewriter("#riddle", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRiddle(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4cfe24t3503o158b86cbac58e0e08cf3";
  let prompt = `generate a short riddle that is ${instructionsInput.value} in its difficulty to solve and include a <br/> and then an answer.`;
  let context =
    "you are a clever riddle expert and love to write short riddles. your mission is to generate a riddle in basic HTML, the riddle should never be about HTML. display the riddle and answer only. make sure to follow the user instructions the riddle should be easy, medium or hard in difficulty depending on what option the user selects.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let riddleElement = document.querySelector("#riddle");
  riddleElement.classList.remove("hidden");
  riddleElement.innerHTML = "Generating Riddle...";

  axios.get(apiUrl).then(displayRiddle);
}

let riddleFormElement = document.querySelector("#riddle-generator-form");
riddleFormElement.addEventListener(`submit`, generateRiddle);
