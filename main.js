const buttons = document.querySelectorAll(".bttn");
const submit = document.querySelector(".submit");
const errorMsg = document.querySelector(".error-message");
const card = document.querySelector(".card");
const thanksCard = document.querySelector(".thanks-card");
const ratings = document.querySelector(".rating-number");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      buttons.forEach((currentButton) => {
        currentButton.classList.remove("active");
      });
      button.classList.add("active");
    }
    errorMsg.classList.remove("error");
  });
});

submit.addEventListener("click", function () {
  const activeButton = Array.from(buttons).find((button) =>
    button.classList.contains("active")
  );

  if (activeButton) {
    ratings.innerHTML = activeButton.value;

    card.style.display = "none";
    thanksCard.style.display = "flex";
  } else {
    errorMsg.classList.add("error");
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {});
});
