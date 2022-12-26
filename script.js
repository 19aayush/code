document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var searchInput = document.getElementById('search-input').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
  });
  
  document.getElementById('lucky-button').addEventListener('click', function(event) {
    event.preventDefault();
    var searchInput = document.getElementById('search-input').value;
    window.location.href = 'https://www.google.com/search?btn
  