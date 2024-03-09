const buttons = document.querySelectorAll(".open-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("on")) {
      button.classList.remove("on");
    } else {
      button.classList.add("on");
    }

    const targetClass = this.getAttribute("data-target");
    const answer = document.querySelector(`.answer.${targetClass}`);

    if (answer) {
      if (answer.classList.contains("open")) {
        answer.classList.remove("open");
      } else {
        answer.classList.add("open");
      }
    }
  });
});
