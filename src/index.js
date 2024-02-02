function generateRiddle(event) {
  event.preventDefault();

  new Typewriter("#riddle", {
    strings: "I speak without a mouth and hear without ears.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let riddleFormElement = document.querySelector("#riddle-generator-form");
riddleFormElement.addEventListener(`submit`, generateRiddle);
