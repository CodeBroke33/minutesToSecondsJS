document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convertBtn').addEventListener('click', convertMinutesToSeconds);
  });
  
  function convertMinutesToSeconds() {
    // Get input value
    const minutes = parseInt(document.getElementById('minutesInput').value);
  
    // Validate input
    if (isNaN(minutes) || minutes < 0) {
      alert('Please enter a valid positive number for minutes.');
      return;
    }
  
    // Perform conversion
    const seconds = minutes * 60;
  
    // Display result
    document.getElementById('result').textContent = `${minutes} minutes is equal to ${seconds} seconds.`;
  }