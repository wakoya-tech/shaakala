const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
      question.addEventListener('click', () => {
        question.parentElement.classList.toggle('active');
      });
    });