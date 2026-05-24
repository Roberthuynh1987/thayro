/* ── Thấy Rõ · main.js ── */
(function () {
  'use strict';

  var LANG_KEY = 'thayro_lang';

  function getLang() {
    return localStorage.getItem(LANG_KEY) || 'vn';
  }

  function applyLang(l) {
    document.body.classList.remove('lang-vn', 'lang-en');
    document.body.classList.add('lang-' + l);
    document.querySelectorAll('.header-lang button').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === l);
    });
    // Fix inline spans — they get display:block from the generic rule
    document.querySelectorAll('span[data-lang], em[data-lang], a[data-lang]').forEach(function(el) {
      el.style.display = (el.dataset.lang === l) ? 'inline' : 'none';
    });
    // Block-level elements
    document.querySelectorAll('p[data-lang], h1[data-lang], h2[data-lang], h3[data-lang], div[data-lang], section[data-lang], li[data-lang]').forEach(function(el) {
      el.style.display = (el.dataset.lang === l) ? 'block' : 'none';
    });
  }

  function setLang(l) {
    localStorage.setItem(LANG_KEY, l);
    applyLang(l);
  }

  function initLang() {
    var l = getLang();
    document.querySelectorAll('.header-lang button').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
    });
    applyLang(l);
  }

  /* ── Scroll reveal ── */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!window.IntersectionObserver) {
      els.forEach(function(el){ el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ── Page routing ── */
  var pages = {};

  function registerPage(id, initFn) { pages[id] = initFn; }

  function showPage(id, data) {
    document.querySelectorAll('.page').forEach(function (p) { p.style.display = 'none'; });
    var page = document.getElementById('page-' + id);
    if (!page) return;
    page.style.display = 'block';
    window.scrollTo(0, 0);
    if (pages[id]) pages[id](data);
    history.pushState({ page: id, data: data }, '', id === 'home' ? '/' : '#' + id);
    setTimeout(function(){ initReveal(); applyLang(getLang()); }, 50);
  }

  /* ── Nav clicks ── */
  function initNav() {
    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-page]');
      if (!el) return;
      e.preventDefault();
      var pageId = el.dataset.page;
      var postSlug = el.dataset.slug;
      if (pageId === 'post' && postSlug) showPage('post', postSlug);
      else if (pageId) showPage(pageId);
    });
    window.addEventListener('popstate', function (e) {
      if (e.state && e.state.page) showPage(e.state.page, e.state.data);
    });
  }

  /* ── Posts data ── */
  var POSTS = [
    {
      slug: '01-check-dien-thoai',
      num: '01',
      tag_vn: 'Quan sát nhỏ', tag_en: 'Small observation',
      title_vn: '3 giây sau khi vừa check,\nbạn lại check <em>thêm một lần nữa.</em>',
      title_en: '3 seconds after you just checked,\nyou check <em>again.</em>',
      sub_vn: 'Không phải vì có thông báo mới. Không phải vì bạn quên gì. Vậy tại sao?',
      sub_en: 'Not because there\'s a new notification. Not because you forgot something. So why?',
      time_vn: '7 phút đọc', time_en: '7 min read',
      excerpt_vn: 'Tâm không chạy tới điện thoại vì điện thoại thú vị. Tâm chạy đi vì hiện tại quá yên — và yên thì lạ.',
      excerpt_en: 'The mind doesn\'t run to the phone because it\'s interesting. It runs because the present is too quiet — and quiet feels strange.',
      featured: true, glyph: '◯', img: '01-check-dien-thoai'
    },
    {
      slug: '02-ai-dang-buc',
      num: '02',
      tag_vn: 'Hỏi thật', tag_en: 'Honest question',
      title_vn: 'Khi bạn nói "tôi bực" —\n<em>ai đang bực?</em>',
      title_en: 'When you say "I\'m angry" —\n<em>who\'s angry?</em>',
      sub_vn: 'Và ai đang biết mình bực?',
      sub_en: 'And who is aware of the anger?',
      time_vn: '6 phút đọc', time_en: '6 min read',
      excerpt_vn: 'Câu hỏi không có câu trả lời đúng duy nhất. Nhưng hỏi đúng cách, nó có thể thay đổi mọi thứ.',
      excerpt_en: 'There\'s no single right answer. But asking it properly can change everything.',
      featured: false, glyph: '—', img: '02-ai-dang-buc'
    },
    {
      slug: '03-vo-thuong',
      num: '03',
      tag_vn: 'Giải mã', tag_en: 'Decoded',
      title_vn: 'Vô thường không phải\nmọi thứ <em>đều qua đi.</em>',
      title_en: 'Impermanence isn\'t that\nthings <em>pass away.</em>',
      sub_vn: 'Mà là mọi thứ đang thay đổi ngay lúc này.',
      sub_en: 'It\'s that things are changing right now.',
      time_vn: '8 phút đọc', time_en: '8 min read',
      excerpt_vn: 'Khi hiểu đúng vô thường, nó không còn là nỗi buồn — mà là sự giải phóng.',
      excerpt_en: 'When understood correctly, impermanence isn\'t sad — it\'s liberating.',
      featured: false, glyph: '∞', img: '03-vo-thuong'
    },
    {
      slug: '04-lang-im-trong-hop',
      num: '04',
      tag_vn: 'Thực hành 5 phút', tag_en: '5-min practice',
      title_vn: 'Thử <em>không chuẩn bị</em>\ncâu trả lời trong một buổi họp.',
      title_en: 'Try <em>not preparing</em>\nyour reply in one meeting.',
      sub_vn: 'Chỉ nghe thôi. Xem điều gì xảy ra.',
      sub_en: 'Just listen. See what happens.',
      time_vn: '5 phút đọc', time_en: '5 min read',
      excerpt_vn: 'Hầu hết chúng ta không thực sự nghe — chúng ta đang chờ đến lượt mình nói.',
      excerpt_en: 'Most of us don\'t actually listen — we\'re waiting for our turn to speak.',
      featured: false, glyph: '◻', img: '04-lang-im-trong-hop'
    }
  ];

  window.POSTS = POSTS;
  window.showPage = showPage;
  window.registerPage = registerPage;
  window.applyLang = applyLang;
  window.getLang = getLang;

  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initNav();
    showPage('home');
  });

})();
