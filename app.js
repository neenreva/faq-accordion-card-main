document
  .querySelectorAll(".question-answer")
  .forEach((el) => el.addEventListener("click", statusChange));

function statusChange() {
  this.children[1].classList.toggle("hidden");
}
