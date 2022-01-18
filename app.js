document.querySelectorAll('.question-answer').forEach(ques => ques.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    e.target.parentNode.parentNode.children[1].classList.toggle('hidden');
}))