// ===========================================================
// Our Little Story ♡ — site script
// ===========================================================
(function () {
  'use strict';

  /* -------------------- data -------------------- */

  var SECTIONS = [
    { id: 'hero', label: 'Our Little Story' },
    { id: 'dates', label: 'Two Special Dates' },
    { id: 'summer', label: 'My Favorite Girls' },
    { id: 'first-date', label: 'Our First Date' },
    { id: 'fears', label: 'What I Was Feeling' },
    { id: 'wedding', label: '2 Months Married' },
    { id: 'capybara', label: 'We Need To Talk' },
    { id: 'dating', label: '1 Month Dating' },
    { id: 'timeline', label: 'Our Story Growing' },
    { id: 'love', label: 'Things I Love' },
    { id: 'todo', label: 'Things To Do' },
    { id: 'promise', label: 'One Little Promise' },
    { id: 'letter', label: 'A Letter For You' },
    { id: 'future', label: 'Future Memories' },
    { id: 'counters', label: 'Our Love In Time' },
    { id: 'goodbye', label: 'My Person' },
  ];

  var TIMELINE_ITEMS = [
    { icon: 'gem', date: 'July 18, 2026 — 9:36 PM', title: 'We Got Married', note: 'Where forever officially started.', accent: 'linear-gradient(to bottom right, var(--pink), var(--grape))' },
    { icon: 'heart', date: 'July 25, 2026 — 12:12 AM', title: 'I Court You', note: 'Making it official, my way.', accent: 'linear-gradient(to bottom right, var(--grape), var(--lilac))' },
    { icon: 'heart', date: 'August 18, 2026 — 7:22 PM', title: 'We Officially Started Dating', note: 'Choosing each other, out loud.', accent: 'linear-gradient(to bottom right, var(--rose), var(--pink))' },
    { icon: 'camera', date: 'September 13, 2026 — 8:12 AM', title: 'Our First Date', note: "A memory I'll always treasure.", accent: 'linear-gradient(to bottom right, var(--lilac), var(--grape))' },
    { icon: 'heart', title: 'Our First Month', note: 'More memories, laughs, conversations, and moments together.', accent: 'linear-gradient(to bottom right, var(--pink), var(--lilac))' },
    { icon: 'heart', title: 'Our Second Month', note: 'Still learning, growing, and loving each other.', accent: 'linear-gradient(to bottom right, var(--rose), var(--grape))' },
    { icon: 'sparkles', title: 'Our Future', note: "So many memories we haven't made yet.", accent: 'linear-gradient(to bottom right, var(--lilac), var(--pink))' },
  ];

  var THINGS_I_LOVE = [
    'Your smile', 'Your laugh', 'Your little reactions', 'The way you make me happy',
    'Our conversations', 'Our jokes', 'Our dates', 'The memories we make',
    'The way you care', 'Being able to be myself around you', 'Simply having you in my life',
  ];
  var LOVE_GRADIENTS = [
    'linear-gradient(to bottom right, oklch(0.82 0.11 350 / 0.25), #fff)',
    'linear-gradient(to bottom right, oklch(0.83 0.09 305 / 0.25), #fff)',
    'linear-gradient(to bottom right, oklch(0.86 0.06 295 / 0.3), #fff)',
    'linear-gradient(to bottom right, oklch(0.74 0.14 5 / 0.2), #fff)',
  ];

  var THINGS_TO_DO = [
    'More dates', 'More pictures together', 'More adventures', 'More random moments',
    'More inside jokes', 'More food trips', 'More memories', 'More monthsaries',
    'More years together', 'More "remember when…" stories',
  ];

  var FUTURE_FRAMES = [
    { label: 'Our next date', rotate: -3 },
    { label: 'Another adventure', rotate: 2 },
    { label: 'Another ridiculous picture', rotate: -2 },
    { label: 'Another inside joke', rotate: 3 },
    { label: 'Another anniversary', rotate: -2.5 },
    { label: 'Another chapter of us', rotate: 2.5 },
  ];

  var MARRIED_AT = new Date(2026, 6, 18, 21, 36, 0);
  var DATING_AT = new Date(2026, 7, 18, 19, 22, 0);


  var ICON_SVGS = {
    heart: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21s-7.5-4.6-10-9.3C.2 8.1 2 4.5 5.5 4c2-.3 3.7.8 4.5 2.2C10.8 4.8 12.5 3.7 14.5 4c3.5.5 5.3 4.1 3.5 7.7C19.5 16.4 12 21 12 21z"/></svg>',
    gem: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>',
    camera: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/></svg>',
    sparkles: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
    sparkle: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z"/></svg>',
    star: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15 9 22 9.3 16.5 14 18.2 21 12 17.2 5.8 21 7.5 14 2 9.3 9 9 12 2"/></svg>',
    flower: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><circle cx="12" cy="12" r="2.5"/></svg>',
    check: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    plus: '<svg class="icon" width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  };

  function iconHtml(name, size) {
    var tpl = ICON_SVGS[name] || ICON_SVGS.heart;
    return tpl.replace(/\{s\}/g, String(size || 20));
  }


  function seededItems(count, seed) {
    var items = [];
    var s = seed;
    function rand() {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    }
    for (var i = 0; i < count; i++) {
      items.push({
        left: rand() * 100,
        size: 10 + rand() * 22,
        duration: 12 + rand() * 16,
        delay: rand() * -20,
        opacity: 0.35 + rand() * 0.45,
        rotate: 20 + rand() * 60,
        kind: Math.floor(rand() * 4),
      });
    }
    return items;
  }

  var FLOAT_ICONS = ['heart', 'sparkle', 'star', 'flower'];

  function buildFloatingHearts(el, count, seed, colorClass) {
    var items = seededItems(count, seed);
    var html = '';
    items.forEach(function (it) {
      html += '<span class="float-item" style="left:' + it.left + '%; ' +
        '--o:' + it.opacity + '; --r:' + it.rotate + 'deg; ' +
        'color:' + colorClass + '; animation: float-up ' + it.duration + 's linear ' + it.delay + 's infinite;">' +
        iconHtml(FLOAT_ICONS[it.kind], it.size) + '</span>';
    });
    el.innerHTML = html;
  }

  function buildSparkleField(el, seed, count) {
    var items = seededItems(count, seed);
    var html = '';
    items.forEach(function (it, i) {
      var name = i % 2 === 0 ? 'sparkle' : 'star';
      html += '<span class="sparkle-item animate-twinkle" style="left:' + it.left + '%; top:' +
        (it.delay + 20) * -4 + '%; animation-delay:' + it.delay + 's; opacity:' + it.opacity + ';">' +
        iconHtml(name, it.size) + '</span>';
    });
    el.innerHTML = html;
  }

  function initDecorLayers() {
    document.querySelectorAll('.decor-layer[data-hearts]').forEach(function (el) {
      var parts = el.getAttribute('data-hearts').split(',');
      var count = parseInt(parts[0], 10);
      var seed = parseInt(parts[1], 10);
      var colorMap = { 'text-lilac': 'oklch(0.83 0.09 305 / 0.7)', 'text-rose-dim': 'oklch(0.74 0.14 5 / 0.4)' };
      var color = colorMap[parts[2]] || 'oklch(0.74 0.14 5 / 0.7)';
      buildFloatingHearts(el, count, seed, color);
    });
    document.querySelectorAll('.sparkle-layer[data-sparkle]').forEach(function (el) {
      var parts = el.getAttribute('data-sparkle').split(',');
      var seed = parseInt(parts[0], 10);
      var count = parseInt(parts[1], 10);
      buildSparkleField(el, seed, count);
    });
    var heroHearts = document.getElementById('heroHearts');
    if (heroHearts) buildFloatingHearts(heroHearts, 16, 11, 'oklch(0.74 0.14 5 / 0.7)');
    var heroSparkles = document.getElementById('heroSparkles');
    if (heroSparkles) buildSparkleField(heroSparkles, 5, 10);
  }


  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }


  function initSectionNav() {
    var navList = document.getElementById('navList');
    var toggle = document.getElementById('navToggle');
    var panel = document.getElementById('navPanel');
    var openIcon = document.getElementById('menuIconOpen');
    var closeIcon = document.getElementById('menuIconClose');
    var open = false;

    var buttons = {};
    SECTIONS.forEach(function (s) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.innerHTML = iconHtml('heart', 14) + '<span class="label">' + s.label + '</span>';
      btn.addEventListener('click', function () {
        setOpen(false);
        var target = document.getElementById(s.id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      li.appendChild(btn);
      navList.appendChild(li);
      buttons[s.id] = btn;
    });

    function setActive(id) {
      Object.keys(buttons).forEach(function (key) {
        buttons[key].classList.toggle('active', key === id);
      });
    }
    setActive('hero');

    function setOpen(v) {
      open = v;
      panel.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      openIcon.classList.toggle('hidden', open);
      closeIcon.classList.toggle('hidden', !open);
    }

    toggle.addEventListener('click', function () { setOpen(!open); });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      }, { rootMargin: '-45% 0px -45% 0px' });
      SECTIONS.forEach(function (s) {
        var el = document.getElementById(s.id);
        if (el) observer.observe(el);
      });
    }
  }


  function initMusicButton() {
    var btn = document.getElementById('musicBtn');
    var playIcon = document.getElementById('musicIconPlay');
    var pauseIcon = document.getElementById('musicIconPause');
    var label = document.getElementById('musicLabel');
    var hint = document.getElementById('musicHint');
    var audio = new Audio('audio/our-song.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    var playing = false;

    btn.addEventListener('click', function () {
      if (playing) {
        audio.pause();
        playing = false;
        updateUI();
        return;
      }
      audio.play().then(function () {
        playing = true;
        hint.classList.add('hidden');
        updateUI();
      }).catch(function () {
        hint.classList.remove('hidden');
      });
    });

    function updateUI() {
      btn.setAttribute('aria-pressed', String(playing));
      playIcon.classList.toggle('hidden', playing);
      pauseIcon.classList.toggle('hidden', !playing);
      label.textContent = playing ? 'Pause' : '♫ Our Song';
    }
  }


  function initCapybara() {
    var btn = document.getElementById('capyBtn');
    var answer = document.getElementById('capyAnswer');
    if (!btn) return;
    btn.addEventListener('click', function () {
      btn.classList.add('hidden');
      answer.classList.remove('hidden');
    });
  }

  /* -------------------- timeline -------------------- */

  function initTimeline() {
    var list = document.getElementById('timelineList');
    if (!list) return;
    TIMELINE_ITEMS.forEach(function (item, i) {
      var li = document.createElement('li');
      li.innerHTML =
        '<div class="reveal" style="transition-delay:' + i * 80 + 'ms">' +
        '  <div class="timeline-item">' +
        '    <div class="timeline-icon" style="background:' + item.accent + '">' + iconHtml(item.icon, 22) + '</div>' +
        '    <div class="timeline-content">' +
        (item.date ? '<p class="t-date">' + item.date + '</p>' : '') +
        '      <p class="t-title">' + item.title + '</p>' +
        '      <p class="t-note">' + item.note + '</p>' +
        '    </div>' +
        '  </div>' +
        '</div>';
      list.appendChild(li);
    });
  }

  /* -------------------- things I love -------------------- */

  function initLoveGrid() {
    var grid = document.getElementById('loveGrid');
    if (!grid) return;
    THINGS_I_LOVE.forEach(function (thing, i) {
      var wrap = document.createElement('div');
      wrap.className = 'reveal';
      wrap.style.transitionDelay = (i % 3) * 90 + 'ms';
      wrap.innerHTML =
        '<div class="love-item" style="background:' + LOVE_GRADIENTS[i % LOVE_GRADIENTS.length] + '">' +
        '  <span class="love-icon">' + iconHtml('heart', 16) + '</span>' +
        '  <span class="label">' + thing + '</span>' +
        '</div>';
      grid.appendChild(wrap);
    });
  }

  /* -------------------- things to do -------------------- */

  function initTodoList() {
    var list = document.getElementById('todoList');
    if (!list) return;
    THINGS_TO_DO.forEach(function (item, i) {
      var wrap = document.createElement('div');
      wrap.className = 'reveal';
      wrap.style.transitionDelay = (i % 4) * 60 + 'ms';

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'todo-item';
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = '<span class="todo-check">' + iconHtml('check', 15) + '</span><span class="label">' + item + '</span>';
      btn.addEventListener('click', function () {
        var checked = btn.classList.toggle('checked');
        btn.setAttribute('aria-pressed', String(checked));
      });

      wrap.appendChild(btn);
      list.appendChild(wrap);
    });
  }

  /* -------------------- future frames -------------------- */

  function initFutureGrid() {
    var grid = document.getElementById('futureGrid');
    if (!grid) return;
    FUTURE_FRAMES.forEach(function (frame, i) {
      var wrap = document.createElement('div');
      wrap.className = 'reveal future-frame-wrap';
      wrap.style.transitionDelay = (i % 3) * 90 + 'ms';
      wrap.innerHTML =
        '<figure class="polaroid future-frame" style="transform:rotate(' + frame.rotate + 'deg)">' +
        '  <div class="placeholder-box">' + iconHtml('plus', 38) + '</div>' +
        '  <figcaption>' + frame.label + '</figcaption>' +
        '</figure>';
      grid.appendChild(wrap);
    });
  }

  /* -------------------- live counters -------------------- */

  function elapsedSince(start, now) {
    var diff = now - start.getTime();
    if (diff < 0) diff = 0;
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff / 3600000) % 24,
      minutes: Math.floor(diff / 60000) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  }

  function pad2(n) { return String(n).padStart(2, '0'); }

  function initCounters() {
    var marriedCells = document.getElementById('marriedCells');
    var datingCells = document.getElementById('datingCells');
    if (!marriedCells || !datingCells) return;

    function update() {
      var now = Date.now();
      var m = elapsedSince(MARRIED_AT, now);
      var d = elapsedSince(DATING_AT, now);
      marriedCells.querySelector('[data-u="d"]').textContent = pad2(m.days);
      marriedCells.querySelector('[data-u="h"]').textContent = pad2(m.hours);
      marriedCells.querySelector('[data-u="m"]').textContent = pad2(m.minutes);
      marriedCells.querySelector('[data-u="s"]').textContent = pad2(m.seconds);
      datingCells.querySelector('[data-u="d"]').textContent = pad2(d.days);
      datingCells.querySelector('[data-u="h"]').textContent = pad2(d.hours);
      datingCells.querySelector('[data-u="m"]').textContent = pad2(d.minutes);
      datingCells.querySelector('[data-u="s"]').textContent = pad2(d.seconds);
    }
    update();
    setInterval(update, 1000);
  }

  /* -------------------- init -------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    initTimeline();
    initLoveGrid();
    initTodoList();
    initFutureGrid();
    initDecorLayers();
    initReveal();
    initSectionNav();
    initMusicButton();
    initCapybara();
    initCounters();
  });
})();