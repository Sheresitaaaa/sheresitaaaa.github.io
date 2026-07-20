// bouncing balls (contact)
(function () {
  const field = document.getElementById("bounce-field");
  if (!field) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const COLORS = ["c-green", "c-lime", "c-ochre", "c-deep"];
  const SPEED = 48; // px/s

  let W = 0;
  let H = 0;
  let balls = [];
  let running = false;
  let lastTime = 0;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function velocity(base) {
    const v = rand(base * 0.7, base * 1.3);
    return Math.random() < 0.5 ? -v : v;
  }

  function place(b) {
    b.el.style.transform = "translate(" + (b.x - b.r) + "px, " + (b.y - b.r) + "px)";
  }

  function build() {
    W = window.innerWidth;
    H = window.innerHeight;
    const vmin = Math.min(W, H);

    // 3–9 balls, afhankelijk van scherm
    const count = Math.max(3, Math.min(9, Math.round((W * H) / 150000)));
    const rMin = Math.max(14, vmin * 0.045);
    const rMax = Math.max(24, vmin * 0.075);

    field.innerHTML = "";
    balls = [];

    for (let i = 0; i < count; i++) {
      const r = rand(rMin, rMax);
      const el = document.createElement("span");
      el.className = "bounce-ball " + COLORS[i % COLORS.length];
      el.style.width = r * 2 + "px";
      el.style.height = r * 2 + "px";
      field.appendChild(el);
      balls.push({
        el: el,
        r: r,
        x: rand(r, W - r),
        y: rand(r, H - r),
        vx: velocity(SPEED),
        vy: velocity(SPEED),
      });
    }
    balls.forEach(place);
  }

  function collideWalls(b) {
    if (b.x - b.r <= 0) {
      b.x = b.r;
      b.vx = Math.abs(b.vx);
    } else if (b.x + b.r >= W) {
      b.x = W - b.r;
      b.vx = -Math.abs(b.vx);
    }
    if (b.y - b.r <= 0) {
      b.y = b.r;
      b.vy = Math.abs(b.vy);
    } else if (b.y + b.r >= H) {
      b.y = H - b.r;
      b.vy = -Math.abs(b.vy);
    }
  }

  function collidePair(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.hypot(dx, dy);
    const minDist = a.r + b.r;
    if (dist === 0 || dist >= minDist) return;

    const nx = dx / dist;
    const ny = dy / dist;

    // overlap fix
    const overlap = (minDist - dist) / 2;
    a.x -= nx * overlap;
    a.y -= ny * overlap;
    b.x += nx * overlap;
    b.y += ny * overlap;

    // simpele botsing
    const va = a.vx * nx + a.vy * ny;
    const vb = b.vx * nx + b.vy * ny;
    const diff = vb - va;
    a.vx += diff * nx;
    a.vy += diff * ny;
    b.vx -= diff * nx;
    b.vy -= diff * ny;
  }

  function tick(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    for (let i = 0; i < balls.length; i++) {
      const b = balls[i];
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      collideWalls(b);
    }
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        collidePair(balls[i], balls[j]);
      }
    }
    balls.forEach(place);
    requestAnimationFrame(tick);
  }

  // rebuild bij resize
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 200);
  });

  build();
  if (!prefersReduced && !running) {
    running = true;
    lastTime = performance.now();
    requestAnimationFrame(tick);
  }
})();
