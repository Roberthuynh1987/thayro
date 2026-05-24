/* ── images.js — SVG illustrations for each post ── */
window.POST_IMAGES = {

  'hero': `<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="1200" height="340" fill="#eeeae2"/>
    <circle cx="900" cy="170" r="280" fill="none" stroke="#c9b99a" stroke-width="1"/>
    <circle cx="900" cy="170" r="200" fill="none" stroke="#c9b99a" stroke-width="0.8"/>
    <circle cx="900" cy="170" r="120" fill="none" stroke="#c9b99a" stroke-width="0.6"/>
    <circle cx="900" cy="170" r="50" fill="#c9b99a" opacity="0.18"/>
    <line x1="0" y1="170" x2="1200" y2="170" stroke="#c9b99a" stroke-width="0.5" opacity="0.4"/>
    <line x1="600" y1="0" x2="600" y2="340" stroke="#c9b99a" stroke-width="0.5" opacity="0.4"/>
    <text x="120" y="140" font-family="Georgia,serif" font-size="72" font-weight="300" fill="#3d3c38" opacity="0.12">觉</text>
    <text x="200" y="220" font-family="Georgia,serif" font-size="18" fill="#7a6a52" letter-spacing="4">THẤY RÕ</text>
    <text x="200" y="248" font-family="Georgia,serif" font-size="13" fill="#a8a7a2" letter-spacing="2">SEEING CLEARLY</text>
  </svg>`,

  '01-check-dien-thoai': `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="420" fill="#f0ece4"/>
    <rect x="0" y="0" width="800" height="420" fill="#eeeae2"/>
    <!-- Phone outline -->
    <rect x="320" y="60" width="160" height="280" rx="18" fill="#fff" stroke="#c9b99a" stroke-width="2"/>
    <rect x="332" y="82" width="136" height="228" rx="4" fill="#f0ece4"/>
    <circle cx="400" cy="320" r="10" fill="none" stroke="#c9b99a" stroke-width="1.5"/>
    <rect x="370" y="68" width="60" height="5" rx="2.5" fill="#e4e1d8"/>
    <!-- Screen content lines -->
    <rect x="344" y="96" width="80" height="8" rx="2" fill="#c9b99a" opacity="0.5"/>
    <rect x="344" y="112" width="112" height="6" rx="2" fill="#c9b99a" opacity="0.3"/>
    <rect x="344" y="124" width="96" height="6" rx="2" fill="#c9b99a" opacity="0.3"/>
    <rect x="344" y="148" width="112" height="32" rx="4" fill="#c9b99a" opacity="0.2"/>
    <rect x="344" y="192" width="112" height="6" rx="2" fill="#c9b99a" opacity="0.25"/>
    <rect x="344" y="204" width="88" height="6" rx="2" fill="#c9b99a" opacity="0.25"/>
    <!-- Loop arrows suggesting repetition -->
    <path d="M 260 180 Q 210 140 210 180 Q 210 220 260 200" fill="none" stroke="#7a6a52" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
    <polygon points="255,196 265,204 265,188" fill="#7a6a52" opacity="0.6"/>
    <!-- Hand reaching -->
    <path d="M 500 280 Q 520 240 510 200 Q 505 180 495 185 Q 485 190 490 210 L 488 270 Z" fill="#d4c4a8" opacity="0.6"/>
    <path d="M 488 200 Q 485 180 476 182 Q 468 185 472 205 L 472 265" fill="#d4c4a8" opacity="0.5"/>
    <!-- Text label -->
    <text x="130" y="200" font-family="Georgia,serif" font-size="13" fill="#7a6a52" opacity="0.8" text-anchor="middle">3 giây...</text>
    <text x="130" y="220" font-family="Georgia,serif" font-size="13" fill="#7a6a52" opacity="0.8" text-anchor="middle">lại check</text>
    <!-- Dots for time passing -->
    <circle cx="88" cy="170" r="3" fill="#c9b99a" opacity="0.5"/>
    <circle cx="100" cy="170" r="3" fill="#c9b99a" opacity="0.5"/>
    <circle cx="112" cy="170" r="3" fill="#c9b99a" opacity="0.5"/>
    <!-- Empty notification badge -->
    <circle cx="440" cy="88" r="8" fill="#e4e1d8" stroke="#c9b99a" stroke-width="1"/>
    <text x="440" y="92" font-family="Georgia,serif" font-size="9" fill="#a8a7a2" text-anchor="middle">0</text>
    <!-- Background texture circles -->
    <circle cx="100" cy="380" r="120" fill="none" stroke="#c9b99a" stroke-width="0.5" opacity="0.3"/>
    <circle cx="700" cy="60" r="90" fill="none" stroke="#c9b99a" stroke-width="0.5" opacity="0.3"/>
  </svg>`,

  '02-ai-dang-buc': `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="420" fill="#eeeae2"/>
    <!-- Two overlapping circles — observer and observed -->
    <circle cx="320" cy="210" r="130" fill="#c9b99a" opacity="0.15" stroke="#c9b99a" stroke-width="1"/>
    <circle cx="480" cy="210" r="130" fill="#7a6a52" opacity="0.1" stroke="#7a6a52" stroke-width="1"/>
    <!-- Inner glow at intersection -->
    <ellipse cx="400" cy="210" rx="50" ry="80" fill="#7a6a52" opacity="0.08"/>
    <!-- Labels -->
    <text x="270" y="200" font-family="Georgia,serif" font-size="14" fill="#3d3c38" text-anchor="middle" opacity="0.7">Người</text>
    <text x="270" y="222" font-family="Georgia,serif" font-size="14" fill="#3d3c38" text-anchor="middle" opacity="0.7">đang bực</text>
    <text x="530" y="200" font-family="Georgia,serif" font-size="14" fill="#3d3c38" text-anchor="middle" opacity="0.7">Người</text>
    <text x="530" y="222" font-family="Georgia,serif" font-size="14" fill="#3d3c38" text-anchor="middle" opacity="0.7">đang biết</text>
    <text x="400" y="206" font-family="Georgia,serif" font-size="11" fill="#7a6a52" text-anchor="middle" opacity="0.9">?</text>
    <!-- Wave line representing emotion -->
    <path d="M 100 320 Q 150 290 200 320 Q 250 350 300 320 Q 350 290 400 320 Q 450 350 500 320 Q 550 290 600 320 Q 650 350 700 320" fill="none" stroke="#c9b99a" stroke-width="1.5" opacity="0.5"/>
    <!-- Decorative chars -->
    <text x="60" y="120" font-family="Georgia,serif" font-size="48" fill="#c9b99a" opacity="0.2">怒</text>
    <text x="680" y="340" font-family="Georgia,serif" font-size="48" fill="#c9b99a" opacity="0.2">知</text>
  </svg>`,

  '03-vo-thuong': `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="420" fill="#eeeae2"/>
    <!-- Flowing wave representing impermanence -->
    <path d="M 0 210 Q 100 150 200 210 Q 300 270 400 210 Q 500 150 600 210 Q 700 270 800 210" fill="none" stroke="#c9b99a" stroke-width="2" opacity="0.7"/>
    <path d="M 0 230 Q 100 170 200 230 Q 300 290 400 230 Q 500 170 600 230 Q 700 290 800 230" fill="none" stroke="#c9b99a" stroke-width="1" opacity="0.4"/>
    <path d="M 0 190 Q 100 130 200 190 Q 300 250 400 190 Q 500 130 600 190 Q 700 250 800 190" fill="none" stroke="#c9b99a" stroke-width="1" opacity="0.3"/>
    <!-- Dots on the wave -->
    <circle cx="200" cy="210" r="5" fill="#7a6a52" opacity="0.6"/>
    <circle cx="400" cy="210" r="5" fill="#7a6a52" opacity="0.6"/>
    <circle cx="600" cy="210" r="5" fill="#7a6a52" opacity="0.6"/>
    <!-- Arrow showing now -->
    <line x1="400" y1="100" x2="400" y2="170" stroke="#7a6a52" stroke-width="1.5" opacity="0.7"/>
    <polygon points="395,165 405,165 400,178" fill="#7a6a52" opacity="0.7"/>
    <text x="400" y="90" font-family="Georgia,serif" font-size="13" fill="#7a6a52" text-anchor="middle" opacity="0.8">ngay lúc này</text>
    <!-- Infinity symbol -->
    <text x="380" y="360" font-family="Georgia,serif" font-size="48" fill="#c9b99a" opacity="0.25">∞</text>
    <!-- Background circles -->
    <circle cx="120" cy="210" r="80" fill="none" stroke="#c9b99a" stroke-width="0.5" opacity="0.3"/>
    <circle cx="680" cy="210" r="80" fill="none" stroke="#c9b99a" stroke-width="0.5" opacity="0.3"/>
  </svg>`,

  '04-lang-im-trong-hop': `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="420" fill="#eeeae2"/>
    <!-- Meeting table -->
    <ellipse cx="400" cy="240" rx="260" ry="100" fill="#fff" stroke="#c9b99a" stroke-width="1.5" opacity="0.7"/>
    <!-- People around table -->
    <circle cx="400" cy="130" r="22" fill="#d4c4a8" opacity="0.6"/>
    <circle cx="220" cy="200" r="22" fill="#d4c4a8" opacity="0.6"/>
    <circle cx="580" cy="200" r="22" fill="#d4c4a8" opacity="0.6"/>
    <circle cx="260" cy="310" r="22" fill="#d4c4a8" opacity="0.6"/>
    <circle cx="540" cy="310" r="22" fill="#d4c4a8" opacity="0.6"/>
    <!-- Speaking bubble from one person (others preparing to speak) -->
    <path d="M 560 185 Q 600 165 620 175 Q 640 185 620 195 Q 600 205 560 195 Z" fill="#c9b99a" opacity="0.4"/>
    <!-- Thought bubbles (preparing to speak) -->
    <circle cx="248" cy="188" r="4" fill="#c9b99a" opacity="0.3"/>
    <circle cx="244" cy="180" r="3" fill="#c9b99a" opacity="0.3"/>
    <rect x="228" y="162" width="40" height="16" rx="3" fill="#c9b99a" opacity="0.2"/>
    <!-- One person with empty thought = just listening -->
    <circle cx="400" cy="110" r="15" fill="none" stroke="#7a6a52" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
    <text x="400" y="116" font-family="Georgia,serif" font-size="11" fill="#7a6a52" text-anchor="middle" opacity="0.7">◯</text>
    <!-- Sound waves from speaker -->
    <path d="M 580 195 Q 620 195 640 195" stroke="#c9b99a" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M 576 188 Q 626 175 650 188" stroke="#c9b99a" stroke-width="0.8" fill="none" opacity="0.35"/>
    <!-- Label -->
    <text x="400" y="390" font-family="Georgia,serif" font-size="12" fill="#7a6a52" text-anchor="middle" opacity="0.7" font-style="italic">chỉ nghe thôi</text>
    <!-- Decorative -->
    <circle cx="80" cy="80" r="100" fill="none" stroke="#c9b99a" stroke-width="0.4" opacity="0.3"/>
  </svg>`
};
