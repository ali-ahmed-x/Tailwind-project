const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  
  // Optional: Toggle a menu (uncomment if needed)
  // const menu = document.getElementById('menu');
  // menu.classList.toggle('hidden');
});