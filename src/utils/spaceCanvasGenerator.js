// Procedural Cinematic Space Flight Generator Engine
// Ultra-smooth 900-frame journey with layered depth, nebula clouds, and dynamic spaceship

class SpaceCanvasGenerator {
  constructor() {
    this.totalFrames = 900;
    this.stars = [];
    this.farStars = [];
    this.dataNodes = [];
    this.nebulae = [];
    this.initialized = false;
  }

  init(width, height) {
    if (this.initialized && this.width === width && this.height === height) return;
    this.width = width;
    this.height = height;

    // Far background stars (slow parallax layer)
    this.farStars = [];
    for (let i = 0; i < 200; i++) {
      this.farStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 2 + 1
      });
    }

    // Mid-layer 3D starfield (perspective projection)
    this.stars = [];
    for (let i = 0; i < 350; i++) {
      this.stars.push({
        x: (Math.random() - 0.5) * 2400,
        y: (Math.random() - 0.5) * 1600,
        z: Math.random() * 2000 + 1,
        size: Math.random() * 1.8 + 0.5,
        hue: Math.random() > 0.7 ? 190 + Math.random() * 30 : Math.random() > 0.5 ? 270 + Math.random() * 20 : 0,
        sat: Math.random() > 0.5 ? 70 : 0
      });
    }

    // Floating geometric nodes (cube/diamond shapes in deep space)
    this.dataNodes = [];
    for (let i = 0; i < 14; i++) {
      this.dataNodes.push({
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 1000,
        z: Math.random() * 1200 + 300,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 14 + 8,
        type: Math.random() > 0.5 ? "diamond" : "cube",
        hue: Math.random() > 0.5 ? 190 : 270
      });
    }

    // Large ambient nebula clouds
    this.nebulae = [
      { cx: 0.15, cy: 0.25, r: 0.35, h: 240, s: 60, l: 15 },
      { cx: 0.80, cy: 0.65, r: 0.30, h: 190, s: 70, l: 12 },
      { cx: 0.50, cy: 0.80, r: 0.40, h: 280, s: 50, l: 10 },
      { cx: 0.35, cy: 0.55, r: 0.25, h: 200, s: 80, l: 14 }
    ];

    this.initialized = true;
  }

  // Render nebula glow clouds
  drawNebulae(ctx, width, height, progress) {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    this.nebulae.forEach((n, i) => {
      const drift = Math.sin(progress * Math.PI * 2 + i * 1.5) * 0.03;
      const cx = (n.cx + drift) * width;
      const cy = (n.cy + drift * 0.6) * height;
      const r = n.r * Math.max(width, height);
      const pulse = 0.06 + Math.sin(progress * Math.PI * 3 + i) * 0.025;

      const grad = ctx.createRadialGradient(cx, cy, r * 0.05, cx, cy, r);
      grad.addColorStop(0, `hsla(${n.h}, ${n.s}%, ${n.l + 8}%, ${pulse * 1.5})`);
      grad.addColorStop(0.4, `hsla(${n.h}, ${n.s}%, ${n.l}%, ${pulse * 0.8})`);
      grad.addColorStop(1, "hsla(0,0%,0%,0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  }

  // Draw far background stars with twinkling
  drawFarStars(ctx, width, height, progress) {
    ctx.save();
    this.farStars.forEach(s => {
      const twinkle = 0.3 + Math.sin(progress * Math.PI * s.twinkleSpeed * 4) * 0.3;
      ctx.fillStyle = `rgba(200, 220, 255, ${s.alpha * twinkle})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  }

  // 3D perspective starfield with warp streaks
  drawStarfield(ctx, width, height, progress) {
    const cx = width / 2;
    const cy = height / 2;
    const warpFactor = 1 + Math.sin(progress * Math.PI) * 12;
    
    ctx.save();
    this.stars.forEach(star => {
      let z = (star.z - progress * 3000 * (warpFactor * 0.06)) % 2000;
      if (z <= 0) z += 2000;

      const k = 500 / z;
      const px = star.x * k + cx;
      const py = star.y * k + cy;

      if (px < -20 || px > width + 20 || py < -20 || py > height + 20) return;

      const depth = 1 - z / 2000;
      const size = Math.max(0.4, depth * star.size * 2);
      const alpha = Math.min(1, depth * 1.5);

      const color = star.sat > 0
        ? `hsla(${star.hue}, ${star.sat}%, 75%, ${alpha})`
        : `rgba(255, 255, 255, ${alpha})`;

      if (warpFactor > 5) {
        // Warp speed streaks
        const streakLen = warpFactor * k * 0.4;
        const dx = (px - cx) * 0.015 * streakLen;
        const dy = (py - cy) * 0.015 * streakLen;

        ctx.strokeStyle = color;
        ctx.lineWidth = size * 0.7;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + dx, py + dy);
        ctx.stroke();
      } else {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.restore();
  }

  // Floating 3D geometric data nodes
  drawDataNodes(ctx, width, height, progress, frameIndex) {
    const cx = width / 2;
    const cy = height / 2;

    ctx.save();
    this.dataNodes.forEach(node => {
      let nz = (node.z - progress * 1500) % 1200;
      if (nz <= 0) nz += 1200;

      const nk = 400 / nz;
      const nx = node.x * nk + cx;
      const ny = node.y * nk + cy;
      const nSize = node.size * nk;

      if (nx < -50 || nx > width + 50 || ny < -50 || ny > height + 50 || nz < 60) return;

      const depth = 1 - nz / 1200;
      ctx.save();
      ctx.translate(nx, ny);
      ctx.rotate(frameIndex * node.rotSpeed);
      ctx.globalAlpha = Math.min(0.6, depth * 0.9);

      const hue = node.hue;
      ctx.strokeStyle = `hsla(${hue}, 80%, 65%, 0.7)`;
      ctx.lineWidth = 1;

      if (node.type === "diamond") {
        ctx.beginPath();
        ctx.moveTo(0, -nSize);
        ctx.lineTo(nSize * 0.7, 0);
        ctx.lineTo(0, nSize);
        ctx.lineTo(-nSize * 0.7, 0);
        ctx.closePath();
        ctx.stroke();
      } else {
        ctx.strokeRect(-nSize / 2, -nSize / 2, nSize, nSize);
      }

      // Inner glow dot
      ctx.fillStyle = `hsla(${hue}, 90%, 80%, 0.8)`;
      ctx.beginPath();
      ctx.arc(0, 0, Math.max(1, nSize * 0.15), 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });
    ctx.restore();
  }

  // Draw 3D spaceship at bottom-center
  draw3DSpaceship(ctx, cx, cy, progress) {
    ctx.save();

    // Gentle flight oscillation
    const bobY = Math.sin(progress * Math.PI * 6) * 8;
    const tiltZ = Math.sin(progress * Math.PI * 4) * 0.08;
    const scale = 0.85 + Math.sin(progress * Math.PI) * 0.1;

    ctx.translate(cx, cy + bobY);
    ctx.scale(scale, scale);
    ctx.rotate(tiltZ);

    // Thruster glow (behind ship)
    const thrustLen = 55 + Math.sin(progress * 40) * 18;
    const tGrad = ctx.createLinearGradient(0, 28, 0, 28 + thrustLen);
    tGrad.addColorStop(0, "rgba(0, 229, 255, 0.95)");
    tGrad.addColorStop(0.3, "rgba(99, 102, 241, 0.5)");
    tGrad.addColorStop(0.7, "rgba(168, 85, 247, 0.2)");
    tGrad.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = tGrad;
    ctx.beginPath();
    ctx.moveTo(-14, 26);
    ctx.quadraticCurveTo(0, 28 + thrustLen * 1.1, 0, 28 + thrustLen);
    ctx.quadraticCurveTo(0, 28 + thrustLen * 1.1, 14, 26);
    ctx.closePath();
    ctx.fill();

    // Thruster core glow dots
    ctx.fillStyle = "rgba(0, 229, 255, 0.9)";
    ctx.beginPath();
    ctx.arc(-10, 27, 4, 0, Math.PI * 2);
    ctx.arc(10, 27, 4, 0, Math.PI * 2);
    ctx.fill();

    // Left wing
    const lwGrad = ctx.createLinearGradient(-65, 20, 0, -30);
    lwGrad.addColorStop(0, "#0c1424");
    lwGrad.addColorStop(1, "#1a2744");
    ctx.fillStyle = lwGrad;
    ctx.strokeStyle = "rgba(0, 229, 255, 0.35)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -40);
    ctx.lineTo(-65, 22);
    ctx.lineTo(-16, 24);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Right wing
    const rwGrad = ctx.createLinearGradient(65, 20, 0, -30);
    rwGrad.addColorStop(0, "#0c1424");
    rwGrad.addColorStop(1, "#253554");
    ctx.fillStyle = rwGrad;
    ctx.strokeStyle = "rgba(0, 229, 255, 0.35)";
    ctx.beginPath();
    ctx.moveTo(0, -40);
    ctx.lineTo(65, 22);
    ctx.lineTo(16, 24);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Center fuselage
    const fGrad = ctx.createLinearGradient(0, -50, 0, 26);
    fGrad.addColorStop(0, "#38bdf8");
    fGrad.addColorStop(0.35, "#1e3a5f");
    fGrad.addColorStop(0.7, "#0f172a");
    fGrad.addColorStop(1, "#060a14");
    ctx.fillStyle = fGrad;
    ctx.strokeStyle = "rgba(0, 229, 255, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -52);
    ctx.lineTo(-15, 22);
    ctx.lineTo(0, 28);
    ctx.lineTo(15, 22);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cockpit canopy
    const cGrad = ctx.createRadialGradient(0, -16, 1, 0, -16, 10);
    cGrad.addColorStop(0, "#ffffff");
    cGrad.addColorStop(0.4, "#00e5ff");
    cGrad.addColorStop(1, "#0369a1");
    ctx.fillStyle = cGrad;
    ctx.beginPath();
    ctx.ellipse(0, -15, 6, 13, 0, 0, Math.PI * 2);
    ctx.fill();

    // Orbital energy ring
    ctx.save();
    ctx.rotate(progress * Math.PI * 2.5);
    ctx.scale(1, 0.28);
    ctx.strokeStyle = "rgba(0, 229, 255, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // Wing tip lights
    const blink = Math.sin(progress * 60) > 0 ? 0.9 : 0.2;
    ctx.fillStyle = `rgba(255, 80, 80, ${blink})`;
    ctx.beginPath();
    ctx.arc(-62, 21, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(80, 255, 120, ${blink})`;
    ctx.beginPath();
    ctx.arc(62, 21, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // Main render function
  renderFrame(ctx, width, height, frameIndex) {
    this.init(width, height);
    const progress = Math.min(Math.max(frameIndex / (this.totalFrames - 1), 0), 1);
    const cx = width / 2;
    const cy = height / 2;

    // Dynamic background gradient (shifts hue slightly with progress)
    const bgHue1 = 225 + progress * 15;
    const bgHue2 = 235 + progress * 10;
    const bgGrad = ctx.createRadialGradient(cx, cy * 0.8, 50, cx, cy, Math.max(width, height) * 0.7);
    bgGrad.addColorStop(0, `hsl(${bgHue1}, 45%, 7%)`);
    bgGrad.addColorStop(0.5, `hsl(${bgHue2}, 55%, 4%)`);
    bgGrad.addColorStop(1, `hsl(240, 60%, 2%)`);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Layer 1: Nebula clouds
    this.drawNebulae(ctx, width, height, progress);

    // Layer 2: Far twinkling stars
    this.drawFarStars(ctx, width, height, progress);

    // Layer 3: 3D perspective starfield
    this.drawStarfield(ctx, width, height, progress);

    // Layer 4: Floating geometric nodes
    this.drawDataNodes(ctx, width, height, progress, frameIndex);

    // Layer 5: Spaceship (positioned lower to not block content panels)
    const shipY = height > 700 ? height * 0.74 : height * 0.80;
    this.draw3DSpaceship(ctx, cx, shipY, progress);

    // Subtle vignette
    const vGrad = ctx.createRadialGradient(cx, cy, height * 0.3, cx, cy, Math.max(width, height) * 0.75);
    vGrad.addColorStop(0, "rgba(0,0,0,0)");
    vGrad.addColorStop(1, "rgba(0,0,0,0.35)");
    ctx.fillStyle = vGrad;
    ctx.fillRect(0, 0, width, height);
  }
}

export const spaceCanvasEngine = new SpaceCanvasGenerator();
