// Simple port of the Python guessing game into browser JS
(function(){
  const MAX_ATTEMPTS = 7;
  const MIN = 1;
  const MAX = 100;

  let secretNumber = null;
  let attempts = 0;
  let finished = false;

  const guessInput = document.getElementById('guessInput');
  const guessBtn = document.getElementById('guessBtn');
  const restartBtn = document.getElementById('restartBtn');
  const feedback = document.getElementById('feedback');
  const attemptsEl = document.getElementById('attempts');

  function newGame(){
    // The original python file intended range 1..100; we'll use 1..100
    secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    attempts = 0;
    finished = false;
    feedback.textContent = 'Make a guess to start.';
    attemptsEl.textContent = `Attempts: ${attempts} / ${MAX_ATTEMPTS}`;
    guessInput.disabled = false;
    guessInput.value = '';
    guessInput.focus();
  }

  function setFeedback(text, color){
    feedback.textContent = text;
    feedback.style.color = color || '';
  }

  function makeGuess(){
    if(finished) return;
    const raw = guessInput.value.trim();
    if(raw === ''){
      setFeedback('Please enter a number between 1 and 100.', 'crimson');
      return;
    }
    const n = Number(raw);
    if(!Number.isInteger(n) || n < MIN || n > MAX){
      setFeedback('Please enter an integer between 1 and 100.', 'crimson');
      return;
    }

    attempts += 1;
    attemptsEl.textContent = `Attempts: ${attempts} / ${MAX_ATTEMPTS}`;

    if(n > secretNumber){
      setFeedback('Your guess is too high.', '#b45309');
    } else if(n < secretNumber){
      setFeedback('Your guess is too low.', '#1e3a8a');
    } else {
      setFeedback(`Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempt(s)!`, 'green');
      finished = true;
      guessInput.disabled = true;
      return;
    }

    if(attempts >= MAX_ATTEMPTS){
      if(!finished){
        setFeedback(`Sorry! You've used all your attempts. The number was ${secretNumber}.`, 'crimson');
        finished = true;
        guessInput.disabled = true;
      }
    } else {
      guessInput.select();
    }
  }

  guessBtn.addEventListener('click', makeGuess);
  restartBtn.addEventListener('click', newGame);
  guessInput.addEventListener('keyup', function(e){
    if(e.key === 'Enter') makeGuess();
  });

  // start first game
  newGame();
})();
