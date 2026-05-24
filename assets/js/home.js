/* ── home.js ── */
(function () {

  function renderHome() {
    var featured = window.POSTS.find(function (p) { return p.featured; });
    var rest = window.POSTS.filter(function (p) { return !p.featured; });

    /* featured */
    var fEl = document.getElementById('featured-post');
    if (fEl && featured) {
      fEl.innerHTML =
        '<div>' +
          '<div class="featured-meta">' +
            '<span class="post-tag"><span data-lang="vn">' + featured.tag_vn + '</span><span data-lang="en">' + featured.tag_en + '</span></span>' +
            '<span class="post-num">' + featured.num + '</span>' +
          '</div>' +
          '<h2 class="featured-title"><span data-lang="vn">' + featured.title_vn.replace(/\n/g,'<br>') + '</span><span data-lang="en">' + featured.title_en.replace(/\n/g,'<br>') + '</span></h2>' +
          '<p class="featured-excerpt"><span data-lang="vn">' + featured.excerpt_vn + '</span><span data-lang="en">' + featured.excerpt_en + '</span></p>' +
          '<span class="read-link"><span data-lang="vn">Đọc bài →</span><span data-lang="en">Read →</span></span>' +
        '</div>' +
        '<div class="featured-glyph">' + featured.glyph + '</div>';
      fEl.dataset.page = 'post';
      fEl.dataset.slug = featured.slug;
    }

    /* grid */
    var grid = document.getElementById('posts-grid');
    if (grid) {
      grid.innerHTML = rest.map(function (p) {
        return '<div class="post-card reveal" data-page="post" data-slug="' + p.slug + '">' +
          '<div class="post-card-num">' + p.num + '</div>' +
          '<h3 class="post-card-title"><span data-lang="vn">' + p.title_vn.replace(/\n/g,' ') + '</span><span data-lang="en">' + p.title_en.replace(/\n/g,' ') + '</span></h3>' +
          '<p class="post-card-excerpt"><span data-lang="vn">' + p.excerpt_vn + '</span><span data-lang="en">' + p.excerpt_en + '</span></p>' +
          '<div class="post-card-meta">' +
            '<span class="post-card-tag"><span data-lang="vn">' + p.tag_vn + '</span><span data-lang="en">' + p.tag_en + '</span></span>' +
            '<span class="post-time"><span data-lang="vn">' + p.time_vn + '</span><span data-lang="en">' + p.time_en + '</span></span>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    /* re-apply lang classes to newly rendered nodes */
    var l = document.body.classList.contains('lang-en') ? 'en' : 'vn';
    document.body.classList.remove('lang-vn','lang-en');
    document.body.classList.add('lang-'+l);
  }

  window.registerPage('home', renderHome);

})();
