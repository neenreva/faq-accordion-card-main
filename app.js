document.querySelectorAll(".quest-arrow")
  .forEach((el) => el.addEventListener("click", statusChange));

function statusChange() {
  this.children[0].classList.toggle("strong");
  this.parentNode.children[1].classList.toggle('hidden');
}
