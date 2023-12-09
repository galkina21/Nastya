document.addEventListener("DOMContentLoaded", function() {
 
    let startTimeInSeconds = 85; 
   
    function formatTime(timeInSeconds) {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function updateTimerDisplay(timeInSeconds) {
      document.getElementById('timer').innerText = formatTime(timeInSeconds);
    }

    function startTimer() {
      let currentTimeInSeconds = startTimeInSeconds;
  
      const timerInterval = setInterval(function() {
        updateTimerDisplay(currentTimeInSeconds);
  
        if (currentTimeInSeconds > 0) {
          currentTimeInSeconds--;
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
    }
  
    startTimer();
  });