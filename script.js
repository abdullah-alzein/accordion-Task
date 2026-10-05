document.querySelectorAll(".question").forEach((button) => {
  const answer = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", function () {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".question").forEach((question) => {
      question.setAttribute("aria-expanded", "false");
      document.getElementById(question.getAttribute("aria-controls")).hidden = true;
    });

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      answer.hidden = false;
    }
  });
});
