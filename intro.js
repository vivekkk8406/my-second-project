const themeButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeButton.querySelector('span').textContent = isDark ? '☀' : '☾';
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
}
setTheme(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
themeButton.addEventListener('click', () => { const isDark = !document.body.classList.contains('dark-mode'); setTheme(isDark); localStorage.setItem('theme', isDark ? 'dark' : 'light'); });
document.getElementById('year').textContent = new Date().getFullYear();