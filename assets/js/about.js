/* ── about.js ── */
(function () {
  function initAbout() {
    var l = document.body.classList.contains('lang-en') ? 'en' : 'vn';
    document.body.classList.remove('lang-vn','lang-en');
    document.body.classList.add('lang-'+l);
    document.querySelectorAll('.reveal').forEach(function(el){
      el.classList.remove('visible');
    });
    setTimeout(function(){
      document.querySelectorAll('#page-about .reveal').forEach(function(el,i){
        setTimeout(function(){ el.classList.add('visible'); }, i*120);
      });
    }, 50);
  }
  window.registerPage('about', initAbout);
})();
