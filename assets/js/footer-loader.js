// assets/js/footer-loader.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
      // Dynamically load footer.js after inserting footer HTML
      const script = document.createElement('script');
      script.src = 'assets/js/footer.js';
      document.body.appendChild(script);
    })
    .catch(err => console.error('Failed to load footer:', err));
});
