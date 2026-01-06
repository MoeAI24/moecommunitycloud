// MBCC minimal JS (no trackers, no ad code here)
(() => {
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
