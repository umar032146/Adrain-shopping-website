document.querySelectorAll('.categories-btn').forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      
      // Close any open dropdowns
      document.querySelectorAll('.categories-content').forEach(dropdown => {
        if (dropdown !== content) {
          dropdown.style.display = 'none';
        }
      });
  
      // Toggle the clicked dropdown
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Close dropdowns when clicking outside
  window.addEventListener('click', function(e) {
    if (!e.target.matches('.categories-btn')) {
      document.querySelectorAll('.categories-content').forEach(dropdown => {
        dropdown.style.display = 'none';
      });
    }
  });

  
  const priceRange = document.getElementById('price-range');
const minPriceDisplay = document.getElementById('min-price');
const maxPriceDisplay = document.getElementById('max-price');

priceRange.addEventListener('input', function() {
  const minPrice = this.min;
  const maxPrice = this.value;

  minPriceDisplay.textContent = minPrice;
  maxPriceDisplay.textContent = maxPrice;
});

document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  