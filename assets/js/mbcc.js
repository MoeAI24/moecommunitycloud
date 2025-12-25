(function(){
  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    const normalized = href.replace(/\/index\.html$/, '/');
    if(normalized === path) a.classList.add('active');
  });
})();