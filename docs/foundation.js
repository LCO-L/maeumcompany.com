/* MAEUM Stewardship — minimal i18n + nav + reveal
   Bilingual EN/KR via data-en / data-kr attributes. */
(function () {
  var KEY = 'maeum-lang';

  function pick() {
    var saved = localStorage.getItem(KEY);
    if (saved === 'en' || saved === 'kr') return saved;
    var b = (navigator.language || 'en').toLowerCase();
    return b.indexOf('ko') === 0 ? 'kr' : 'en';
  }

  function apply(lang) {
    document.documentElement.lang = (lang === 'kr') ? 'ko' : 'en';
    document.body.classList.remove('lang-en', 'lang-kr');
    document.body.classList.add('lang-' + lang);

    document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
      var v = el.getAttribute('data-' + lang);
      if (v == null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', v);
      } else {
        el.innerHTML = v;
      }
    });

    var t = document.querySelector('title[data-' + lang + ']');
    if (t) document.title = t.getAttribute('data-' + lang);

    document.querySelectorAll('.lang button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-setlang') === lang);
    });
  }

  function setLang(lang) { localStorage.setItem(KEY, lang); apply(lang); }

  function init() {
    apply(pick());

    document.querySelectorAll('.lang button').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-setlang')); });
    });

    var mb = document.querySelector('.menu-btn');
    var mn = document.querySelector('.mobile-nav');
    if (mb && mn) {
      mb.addEventListener('click', function () { mn.classList.toggle('open'); });
      mn.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { mn.classList.remove('open'); });
      });
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
