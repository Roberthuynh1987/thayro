# Thấy Rõ · Hướng dẫn deploy lên GitHub Pages

## Cấu trúc thư mục

```
thayro/
├── index.html          ← Trang chính (toàn bộ blog)
├── assets/
│   ├── css/
│   │   └── main.css    ← Toàn bộ style
│   └── js/
│       ├── main.js     ← Core: routing, language, animations
│       ├── home.js     ← Trang chủ
│       ├── post.js     ← Trang bài viết + nội dung đầy đủ
│       └── about.js    ← Trang giới thiệu
└── README.md
```

---

## Deploy lên GitHub Pages (5 bước)

### Bước 1 — Tạo repository trên GitHub
1. Vào [github.com](https://github.com) → đăng nhập
2. Nhấn **New repository** (nút xanh góc phải)
3. Đặt tên: `thayro` (hoặc `thayro.github.io` nếu muốn domain đẹp)
4. Chọn **Public** → nhấn **Create repository**

### Bước 2 — Upload files
Cách đơn giản nhất (không cần biết Git):
1. Trong repository vừa tạo, nhấn **uploading an existing file**
2. Kéo thả toàn bộ thư mục `thayro/` vào
3. Nhấn **Commit changes**

Hoặc dùng Git CLI:
```bash
cd thayro
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/USERNAME/thayro.git
git push -u origin main
```

### Bước 3 — Bật GitHub Pages
1. Vào repository → tab **Settings**
2. Kéo xuống mục **Pages** (menu bên trái)
3. Source: chọn **Deploy from a branch**
4. Branch: chọn **main** / **(root)**
5. Nhấn **Save**

### Bước 4 — Chờ ~2 phút
GitHub sẽ tự động build. Khi xong sẽ hiện:

> **Your site is live at** `https://username.github.io/thayro/`

### Bước 5 — Trỏ domain riêng (tuỳ chọn)
Nếu có domain `thayro.vn`:
1. Mua domain tại [tên.vn](https://tên.vn) hoặc Namecheap
2. Tạo file `CNAME` trong thư mục gốc với nội dung: `thayro.vn`
3. Trỏ DNS: thêm CNAME record `www` → `username.github.io`
4. Trong GitHub Pages settings, điền custom domain

---

## Thêm bài viết mới

Mở file `assets/js/post.js`, thêm vào object `POST_CONTENT`:

```javascript
'ten-slug-bai-viet': {
  body_vn: [
    { type: 'p', html: 'Đoạn mở đầu tiếng Việt...' },
    { type: 'pull', html: 'Câu trích dẫn nổi bật...' },
    { type: 'h2', html: 'Tiêu đề section' },
    { type: 'p', html: 'Nội dung tiếp theo...' },
    { type: 'practice', label: 'Thực hành hôm nay', lines: [
      'Bước 1...',
      'Bước 2...',
    ]},
    { type: 'closing', html: 'Câu kết italic...' }
  ],
  body_en: [
    // Bản tiếng Anh tương tự
  ]
}
```

Và thêm metadata vào mảng `POSTS` trong `assets/js/main.js`:

```javascript
{
  slug: 'ten-slug-bai-viet',
  num: '05',
  tag_vn: 'Quan sát nhỏ',
  tag_en: 'Small observation',
  title_vn: 'Tiêu đề <em>tiếng Việt</em>',
  title_en: 'English <em>title</em>',
  sub_vn: 'Mô tả ngắn tiếng Việt',
  sub_en: 'Short English description',
  time_vn: '6 phút đọc',
  time_en: '6 min read',
  excerpt_vn: 'Trích đoạn hiển thị trên trang chủ.',
  excerpt_en: 'Excerpt shown on homepage.',
  featured: false,
  glyph: '◻'
}
```

---

## Các kiểu block trong bài viết

| type | Mô tả |
|------|-------|
| `p` | Đoạn văn thường |
| `h2` | Tiêu đề section (chữ nhỏ, uppercase) |
| `pull` | Câu trích nổi bật (in nghiêng, đường kẻ trái) |
| `practice` | Hộp thực hành (nền xám, có nhãn) |
| `closing` | Câu kết giữa trang (in nghiêng, căn giữa) |

---

## Tuỳ chỉnh màu sắc

Mở `assets/css/main.css`, tìm phần `:root` ở đầu file:

```css
:root {
  --ink:       #1a1916;   /* Màu chữ chính */
  --paper:     #f7f5f0;   /* Màu nền */
  --accent:    #7a6a52;   /* Màu nhấn (nâu ấm) */
  --accent-lt: #c9b99a;   /* Màu nhấn nhạt */
}
```

Thay `--accent` thành màu khác để đổi toàn bộ tone của blog.

---

*Thấy Rõ · See clearly, live lighter.*
