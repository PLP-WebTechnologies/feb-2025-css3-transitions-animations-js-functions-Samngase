// Function to change background color based on user choice and store it in localStorage
function changeBackgroundColor(color) {
    // Change the background color of the body
    document.body.style.backgroundColor = color;
    
    // Store the selected color in localStorage
    localStorage.setItem('bgColor', color);
  }
  
  // Check if the user has a stored preference for background color
  window.onload = function() {
    const storedColor = localStorage.getItem('bgColor');
    if (storedColor) {
      document.body.style.backgroundColor = storedColor;
    }
  };
  
  // Attach an event listener to the button to change the background color
  const colorButton = document.getElementById('colorButton');
  colorButton.addEventListener('click', function() {
    changeBackgroundColor('#f39c12'); // Change to a custom color when clicked
  });  