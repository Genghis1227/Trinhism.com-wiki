document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  function updateButton(isDark) {
    if (isDark) {
      toggleBtn.innerHTML = '<i class="fa fa-moon-o"></i> <span>Dark</span>';
    } else {
      toggleBtn.innerHTML = '<i class="fa fa-sun-o"></i> <span>Light</span>';
    }
  }

  // Set initial button state based on current html class
  var isDark = document.documentElement.classList.contains('dark');
  updateButton(isDark);

  toggleBtn.addEventListener('click', function() {
    var doc = document.documentElement;
    var currentTheme = doc.classList.contains('dark') ? 'dark' : 'light';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
      doc.classList.add('dark');
      updateButton(true);
    } else {
      doc.classList.remove('dark');
      updateButton(false);
    }
    localStorage.setItem('theme', newTheme);
  });
});
