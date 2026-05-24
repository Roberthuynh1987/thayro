/* ── post.js ── */
(function () {

  /* Full post content */
  var POST_CONTENT = {
    '01-check-dien-thoai': {
      body_vn: [
        { type: 'p', html: 'Thử quan sát lại lần tới. Bạn vừa đặt điện thoại xuống. Màn hình tắt. Không có gì xảy ra cả. Và rồi — ba giây trôi qua — tay bạn tự động với lên, nhấn nút, ngó vào. Không có thông báo. Bạn đặt xuống. Rồi lại với lên.' },
        { type: 'p', html: 'Nếu ai đó quay phim bạn lúc đó, trông sẽ rất buồn cười. Nhưng chúng ta đều làm vậy, kể cả người đang viết bài này.' },
        { type: 'pull', html: 'Câu hỏi thật sự không phải "tại sao tôi nghiện điện thoại?" mà là: "tâm đang chạy trốn khỏi cái gì?"' },
        { type: 'p', html: 'Hầu hết mọi người nghĩ đây là vấn đề về thói quen, hay do app thiết kế quá hấp dẫn. Đúng, nhưng chỉ là một phần. Thứ bị bỏ qua là: điện thoại không hút chúng ta — chúng ta chủ động đẩy mình vào nó.' },
        { type: 'p', html: 'Vì sao? Vì hiện tại đang có một khoảnh khắc trống. Và tâm chúng ta — vốn được lập trình để luôn "làm gì đó" — không chịu nổi khoảng trống đó. Ngồi chờ thang máy? Trống. Ăn trưa một mình? Trống. Xong một việc, chưa bắt đầu việc tiếp theo? Trống. Và ngay khi trống xuất hiện, tay chúng ta đã rút điện thoại ra rồi.' },
        { type: 'h2', html: 'Khoảng trống không phải vấn đề' },
        { type: 'p', html: 'Điều thú vị là: khoảng trống không hề nguy hiểm. Nó chỉ là... trống. Không có gì đe dọa bạn cả. Nhưng tâm diễn giải nó như thể đây là trạng thái cần được "sửa chữa" ngay lập tức.' },
        { type: 'p', html: 'Hãy thử ngồi yên trong thang máy một lần, không nhìn điện thoại. Bạn sẽ nhận ra một cảm giác rất kỳ lạ — không phải khó chịu, mà là... một sự bứt rứt nhỏ. Gần giống như ngứa. Tâm ngứa vì không có gì để bám vào.' },
        { type: 'p', html: 'Và điện thoại là thứ gãi ngứa nhanh nhất, dễ nhất, lúc nào cũng có trong túi.' },
        { type: 'pull', html: 'Tâm không chạy tới điện thoại vì điện thoại thú vị. Tâm chạy đi vì hiện tại quá yên — và yên thì lạ.' },
        { type: 'p', html: 'Đây không phải lỗi của bạn. Não người được tạo ra để xử lý mối nguy, giải quyết vấn đề, lên kế hoạch. Một trạng thái "không có gì xảy ra" là trạng thái mà não không biết làm gì — nên nó tự tìm việc. Và chiếc điện thoại luôn sẵn sàng cung cấp "việc".' },
        { type: 'p', html: 'Vấn đề là: mỗi lần chúng ta gãi ngứa đó, tâm học được rằng khoảng trống là thứ cần tránh. Và lần sau, ngưỡng chịu đựng trống thấp hơn một chút. Rồi thấp hơn nữa.' },
        { type: 'practice', label: 'Thử ngay hôm nay — thực hành 2 phút', lines: [
          'Lần tới khi bạn sắp với tay lấy điện thoại mà không có lý do rõ ràng — dừng lại 5 giây trước khi làm.',
          'Không cần không lấy. Chỉ cần dừng lại 5 giây và hỏi: "Tôi đang cảm thấy gì ngay lúc này? Có khoảng trống nào không?" Quan sát xem tâm đang muốn thoát khỏi cái gì.',
          'Rồi lấy điện thoại nếu vẫn muốn. Nhưng lần này bạn biết tại sao.'
        ]},
        { type: 'p', html: 'Biết tại sao không làm cho cái ngứa biến mất ngay. Nhưng nó thay đổi mối quan hệ của bạn với nó. Thay vì tự động phản ứng, bạn bắt đầu quan sát. Và quan sát là điểm khởi đầu của mọi thứ.' },
        { type: 'p', html: 'Khoảng trống không cần được lấp đầy. Nó chỉ cần được nhìn thấy.' },
        { type: 'closing', html: 'Lần tới khi bạn check điện thoại mà không biết tại sao —<br>đó là khoảnh khắc thú vị nhất trong ngày.' }
      ],
      body_en: [
        { type: 'p', html: 'Try noticing it next time. You just put your phone down. The screen goes dark. Nothing happened. And then — three seconds later — your hand reaches up on its own, taps the button, glances in. No notifications. You put it down. Then reach up again.' },
        { type: 'p', html: 'If someone filmed you in that moment, it would look a little sad. But we all do it — including the person writing this.' },
        { type: 'pull', html: 'The real question isn\'t "why am I addicted to my phone?" It\'s: "what is the mind trying to escape from?"' },
        { type: 'p', html: 'Most people think this is a habit problem, or a consequence of apps being too well-designed. True — but only partly. What gets overlooked is: the phone doesn\'t pull us in. We push ourselves into it.' },
        { type: 'p', html: 'Why? Because there\'s a gap in the present moment. And the mind — wired to always be "doing something" — can\'t tolerate that gap. Waiting for the elevator? Gap. Eating lunch alone? Gap. Finishing one task before starting the next? Gap. And the moment a gap appears, the hand is already reaching for the phone.' },
        { type: 'h2', html: 'The gap isn\'t the problem' },
        { type: 'p', html: 'Here\'s what\'s interesting: the gap isn\'t dangerous. It\'s just... empty. Nothing is threatening you. But the mind interprets it as a state that needs to be "fixed" immediately.' },
        { type: 'p', html: 'Try sitting still in an elevator once, without looking at your phone. You\'ll notice something strange — not exactly discomfort, but a small restlessness. Almost like an itch. The mind itches because there\'s nothing to hold on to.' },
        { type: 'p', html: 'And the phone is the fastest, easiest scratch — always in your pocket.' },
        { type: 'pull', html: 'The mind doesn\'t run to the phone because the phone is interesting. It runs because the present is too quiet — and quiet feels strange.' },
        { type: 'p', html: 'This isn\'t your fault. The human brain was built to process threats, solve problems, make plans. A state of "nothing happening" is a state the brain doesn\'t know what to do with — so it finds something to do. And the phone is always ready to provide it.' },
        { type: 'p', html: 'The problem is: every time we scratch that itch, the mind learns that emptiness is something to avoid. Next time, the tolerance for stillness drops a little. Then a little more.' },
        { type: 'practice', label: 'Try this today — 2-minute practice', lines: [
          'Next time you\'re about to reach for your phone without a clear reason — pause for 5 seconds before you do.',
          'You don\'t have to not reach for it. Just pause for 5 seconds and ask: "What am I feeling right now? Is there a gap here?" Notice what the mind is trying to move away from.',
          'Then pick up the phone if you still want to. But this time you\'ll know why.'
        ]},
        { type: 'p', html: 'Knowing why doesn\'t make the itch disappear immediately. But it changes your relationship with it. Instead of reacting automatically, you start observing. And observation is where everything begins.' },
        { type: 'p', html: 'The gap doesn\'t need to be filled. It just needs to be seen.' },
        { type: 'closing', html: 'The next time you check your phone without knowing why —<br>that\'s actually the most interesting moment of your day.' }
      ]
    }
  };

  function renderBlocks(blocks) {
    return blocks.map(function (b) {
      if (b.type === 'p') return '<p>' + b.html + '</p>';
      if (b.type === 'h2') return '<h2>' + b.html + '</h2>';
      if (b.type === 'pull') return '<blockquote class="post-pullquote">' + b.html + '</blockquote>';
      if (b.type === 'closing') return '<p class="post-closing">' + b.html + '</p>';
      if (b.type === 'practice') return '<div class="practice-card"><div class="practice-card-label">' + b.label + '</div>' + b.lines.map(function(l){return '<p>'+l+'</p>';}).join('') + '</div>';
      return '';
    }).join('\n');
  }

  function renderPost(slug) {
    var post = window.POSTS.find(function (p) { return p.slug === slug; });
    if (!post) return;
    var content = POST_CONTENT[slug];

    var hero = document.getElementById('post-hero-content');
    if (hero) {
      hero.innerHTML =
        '<div class="post-hero-eyebrow">' +
          '<a class="post-hero-back" href="#" data-page="home">← <span data-lang="vn">Tất cả bài viết</span><span data-lang="en">All posts</span></a>' +
          '<span class="post-tag"><span data-lang="vn">' + post.tag_vn + '</span><span data-lang="en">' + post.tag_en + '</span></span>' +
          '<span class="post-num">' + post.num + '</span>' +
        '</div>' +
        '<h1 class="post-hero-title"><span data-lang="vn">' + post.title_vn.replace(/\n/g,'<br>') + '</span><span data-lang="en">' + post.title_en.replace(/\n/g,'<br>') + '</span></h1>' +
        '<p class="post-hero-sub"><span data-lang="vn">' + post.sub_vn + '</span><span data-lang="en">' + post.sub_en + '</span></p>' +
        '<div class="post-hero-meta">' +
          '<span class="post-card-tag"><span data-lang="vn">' + post.tag_vn + '</span><span data-lang="en">' + post.tag_en + '</span></span>' +
          '<span class="dot-sep">·</span>' +
          '<span class="post-time"><span data-lang="vn">' + post.time_vn + '</span><span data-lang="en">' + post.time_en + '</span></span>' +
        '</div>';
    }

    var body = document.getElementById('post-body-content');
    if (body && content) {
      body.innerHTML =
        '<div class="post-content" data-lang="vn">' + renderBlocks(content.body_vn) + '</div>' +
        '<div class="post-content" data-lang="en">' + renderBlocks(content.body_en) + '</div>';
    }

    /* next post */
    var idx = window.POSTS.indexOf(post);
    var next = window.POSTS[idx + 1];
    var prev = window.POSTS[idx - 1];
    var nav = document.getElementById('post-nav');
    if (nav) {
      nav.innerHTML =
        (prev ? '<button class="post-nav-btn" data-page="post" data-slug="' + prev.slug + '">← <span data-lang="vn">Bài trước</span><span data-lang="en">Previous</span></button>' : '<span></span>') +
        (next ? '<button class="post-nav-btn next" data-page="post" data-slug="' + next.slug + '"><span data-lang="vn">Bài tiếp theo</span><span data-lang="en">Next post</span> →</button>' : '<span></span>');
    }

    /* re-apply lang */
    var l = document.body.classList.contains('lang-en') ? 'en' : 'vn';
    document.body.classList.remove('lang-vn','lang-en');
    document.body.classList.add('lang-'+l);
  }

  window.registerPage('post', renderPost);

})();
