window.GradientText = (() => { const exports={}; const require = () => window.React;
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GradientText;
const react_1 = require("react");
const VARIANTS = ['linear', 'flow', 'conic'];
const ANGLES = { horizontal: 90, vertical: 180, diagonal: 135 };
const TAU = Math.PI * 2;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
function GradientText({ children, colors = ['#5227FF', '#FF9FFC', '#B497CF'], animationSpeed = 8, variant = 'linear', angle = 90, direction, scale = 3, yoyo = true, glow = 0, showBorder = false, borderWidth = 1.5, pauseOnHover = false, followPointer = false, className = '', style }) {
    const rootRef = (0, react_1.useRef)(null);
    const settingsRef = (0, react_1.useRef)(null);
    const wakeRef = (0, react_1.useRef)(null);
    const palette = colors.length > 1 ? colors : [colors[0] ?? '#ffffff', colors[0] ?? '#ffffff'];
    settingsRef.current = {
        colors: palette,
        speed: Math.max(0.2, animationSpeed),
        variant: VARIANTS.includes(variant) ? variant : 'linear',
        angle: direction ? (ANGLES[direction] ?? angle) : angle,
        scale: clamp(scale, 1, 6),
        yoyo,
        pauseOnHover,
        followPointer
    };
    (0, react_1.useEffect)(() => {
        wakeRef.current?.();
    });
    (0, react_1.useEffect)(() => {
        const root = rootRef.current;
        if (!root)
            return undefined;
        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
        const state = { time: 0, inside: false, visible: true, x: 0.5, y: 0.5, px: 0.5, py: 0.5, vx: 0, vy: 0, pull: 0 };
        let raf = 0;
        let last = 0;
        let alive = true;
        const paint = () => {
            const s = settingsRef.current;
            const list = s.colors;
            const cycle = state.time / s.speed;
            let image;
            if (s.variant === 'flow') {
                const blobs = list.map((color, i) => {
                    const spin = cycle * TAU;
                    const rate = 0.55 + ((i * 0.618) % 1) * 0.5;
                    let x = 50 + 44 * Math.sin(spin * rate + i * 2.1);
                    let y = 50 + 40 * Math.sin(spin * (rate * 0.83 + 0.21) + i * 1.3);
                    if (i === 0) {
                        x += (state.px * 100 - x) * state.pull;
                        y += (state.py * 100 - y) * state.pull;
                    }
                    return `radial-gradient(ellipse ${(22 + 12 * s.scale).toFixed(1)}% ${(60 + 30 * s.scale).toFixed(1)}% at ${x.toFixed(2)}% ${y.toFixed(2)}%, ${color} 0%, transparent 100%)`;
                });
                image = `${blobs.join(', ')}, linear-gradient(${s.angle}deg, ${list.join(', ')})`;
            }
            else if (s.variant === 'conic') {
                const sway = s.yoyo ? Math.sin(cycle * Math.PI) * 50 : cycle * 360;
                const cx = 50 + (state.px * 100 - 50) * state.pull;
                const cy = 260 + (state.py * 100 - 260) * state.pull;
                image = `repeating-conic-gradient(from ${(sway - 30).toFixed(2)}deg at ${cx.toFixed(2)}% ${cy.toFixed(2)}%, ${[...list, list[0]].map((color, i) => `${color} ${((i / list.length) * 60 * (3 / s.scale)).toFixed(2)}deg`).join(', ')})`;
            }
            else {
                const loop = [...list, list[0]];
                const period = 100 * s.scale;
                let offset;
                if (s.yoyo) {
                    const swing = cycle % 2;
                    const t = swing < 1 ? swing : 2 - swing;
                    offset = (0.5 - Math.cos(Math.PI * t) / 2) * (period - 100);
                }
                else {
                    offset = (cycle % 1) * period;
                }
                offset += (state.px - 0.5) * period * 0.5 * state.pull;
                const stops = loop.map((color, i) => `${color} ${((i / (loop.length - 1)) * period - offset).toFixed(2)}%`);
                image = `repeating-linear-gradient(${s.angle}deg, ${stops.join(', ')})`;
            }
            root.style.setProperty('--gt-gradient', image);
        };
        const tick = now => {
            raf = 0;
            if (!alive)
                return;
            const s = settingsRef.current;
            const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
            last = now;
            const paused = reduce || (s.pauseOnHover && state.inside);
            if (!paused)
                state.time += dt;
            const target = s.followPointer && state.inside ? 1 : 0;
            state.pull += (target - state.pull) * (1 - Math.exp(-dt * 6));
            const stiffness = 160;
            state.vx += ((state.x - state.px) * stiffness - state.vx * 2 * Math.sqrt(stiffness)) * dt;
            state.vy += ((state.y - state.py) * stiffness - state.vy * 2 * Math.sqrt(stiffness)) * dt;
            state.px += state.vx * dt;
            state.py += state.vy * dt;
            paint();
            const settling = Math.abs(state.pull - target) > 0.001 || Math.abs(state.vx) + Math.abs(state.vy) > 0.001;
            if (!state.visible || (paused && !settling))
                return;
            raf = requestAnimationFrame(tick);
        };
        const wake = () => {
            if (raf || !alive)
                return;
            last = performance.now();
            raf = requestAnimationFrame(tick);
        };
        wakeRef.current = () => {
            paint();
            wake();
        };
        const locate = event => {
            const rect = root.getBoundingClientRect();
            state.x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
            state.y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
        };
        const onEnter = event => {
            locate(event);
            if (!state.inside) {
                state.px = state.x;
                state.py = state.y;
            }
            state.inside = true;
            wake();
        };
        const onMove = event => {
            locate(event);
            wake();
        };
        const onLeave = () => {
            state.inside = false;
            wake();
        };
        const observer = new IntersectionObserver(entries => {
            state.visible = entries.some(entry => entry.isIntersecting);
            if (state.visible)
                wake();
        });
        observer.observe(root);
        root.addEventListener('pointerenter', onEnter);
        root.addEventListener('pointermove', onMove);
        root.addEventListener('pointerleave', onLeave);
        paint();
        wake();
        return () => {
            alive = false;
            cancelAnimationFrame(raf);
            observer.disconnect();
            root.removeEventListener('pointerenter', onEnter);
            root.removeEventListener('pointermove', onMove);
            root.removeEventListener('pointerleave', onLeave);
            wakeRef.current = null;
        };
    }, []);
    const loop = [...palette, palette[0]];
    return (React.createElement("span", { ref: rootRef, className: `gradient-text${showBorder ? ' gradient-text--border' : ''}${className ? ` ${className}` : ''}`, style: {
            '--gt-gradient': `linear-gradient(${direction ? (ANGLES[direction] ?? angle) : angle}deg, ${loop.join(', ')})`,
            '--gt-border': `${borderWidth}px`,
            '--gt-glow': clamp(glow, 0, 1),
            ...style
        } },
        React.createElement("span", { className: "gradient-text__inner" },
            React.createElement("span", { className: "gradient-text__content" }, children),
            glow > 0 ? (React.createElement("span", { className: "gradient-text__glow", "aria-hidden": "true" }, children)) : null)));
}

return exports.default; })();
window.ClickSpark = (() => { const exports={}; const require = () => window.React;
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const EASINGS = {
    linear: t => t,
    'ease-in': t => t * t,
    'ease-out': t => 1 - Math.pow(1 - t, 3),
    'ease-in-out': t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    spring: t => 1 + 2.4 * Math.pow(t - 1, 3) + 1.4 * Math.pow(t - 1, 2)
};
const SHAPES = ['line', 'streak', 'dot', 'star'];
const MAX_BURSTS = 32;
const GRAVITY = 500;
const REDUCED_MS = 320;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const smoothstep = (a, b, x) => {
    const t = clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
};
const toColors = value => {
    const list = (Array.isArray(value) ? value : [value]).filter(Boolean);
    return list.length ? list : ['#ffffff'];
};
const starPath = (ctx, x, y, radius, rotation) => {
    const pinch = radius * 0.16;
    ctx.beginPath();
    ctx.moveTo(x + Math.cos(rotation) * radius, y + Math.sin(rotation) * radius);
    for (let i = 1; i <= 4; i++) {
        const a = rotation + (i * Math.PI) / 2;
        const mid = a - Math.PI / 4;
        ctx.quadraticCurveTo(x + Math.cos(mid) * pinch, y + Math.sin(mid) * pinch, x + Math.cos(a) * radius, y + Math.sin(a) * radius);
    }
    ctx.closePath();
};
const channels = (ctx, color) => {
    ctx.fillStyle = color;
    const normal = String(ctx.fillStyle);
    const hex = /^#([0-9a-f]{6})$/i.exec(normal);
    if (hex) {
        const value = parseInt(hex[1], 16);
        return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
    }
    const rgb = /^rgba?\(([^)]+)\)$/i.exec(normal);
    if (rgb)
        return rgb[1]
            .split(',')
            .slice(0, 3)
            .map(part => parseFloat(part));
    return [0, 0, 0];
};
const ClickSpark = (0, react_1.forwardRef)(({ sparkColor = '#fff', sparkSize = 14, sparkRadius = 30, sparkCount = 8, sparkWidth = 2, duration = 500, easing = 'ease-out', extraScale = 1, shape = 'line', randomness = 0.2, gravity = 0, spread = 360, direction = 0, glow = 0, ring = false, layer = 'front', disabled = false, className = '', style, children }, ref) => {
    const rootRef = (0, react_1.useRef)(null);
    const layerRef = (0, react_1.useRef)(null);
    const engineRef = (0, react_1.useRef)(null);
    const settings = {
        colors: toColors(sparkColor),
        size: Math.max(0, sparkSize),
        radius: Math.max(0, sparkRadius) * Math.max(0, extraScale),
        count: clamp(Math.round(sparkCount), 1, 64),
        width: Math.max(0.5, sparkWidth),
        duration: Math.max(60, duration),
        ease: EASINGS[easing] ?? EASINGS['ease-out'],
        shape: SHAPES.includes(shape) ? shape : 'line',
        randomness: clamp(randomness, 0, 1),
        gravity: Math.max(0, gravity),
        spread: clamp(spread, 0, 360),
        direction,
        glow: clamp(glow, 0, 1),
        ring,
        disabled
    };
    const settingsRef = (0, react_1.useRef)(settings);
    settingsRef.current = settings;
    (0, react_1.useEffect)(() => {
        const root = rootRef.current;
        const layer = layerRef.current;
        if (!root || !layer)
            return;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const bursts = [];
        let raf = 0;
        let lastPress = { time: -1e9, x: 0, y: 0 };
        const drop = (s, seconds) => 0.5 * s.gravity * GRAVITY * seconds * seconds;
        const position = (burst, spark, distance, seconds) => [
            burst.x + Math.cos(spark.angle) * distance,
            burst.y + Math.sin(spark.angle) * distance + drop(burst.settings, seconds)
        ];
        const drawSpark = (ctx, burst, spark, elapsed) => {
            const s = burst.settings;
            const life = reduced ? REDUCED_MS : s.duration * spark.life;
            const p = elapsed / life;
            if (p >= 1)
                return false;
            const e = reduced ? 0.55 : s.ease(clamp(p, 0, 1));
            const seconds = reduced ? 0 : elapsed / 1000;
            const distance = s.radius * spark.reach * e;
            const width = s.width * spark.scale;
            const fade = reduced ? 1 - p : 1 - smoothstep(s.shape === 'line' ? 0.55 : 0.7, 1, p);
            if (fade <= 0)
                return true;
            ctx.strokeStyle = spark.color;
            ctx.fillStyle = spark.color;
            if (s.shape === 'line') {
                const length = s.size * spark.scale * (reduced ? 0.5 : Math.pow(1 - p, 1.6));
                const [x1, y1] = position(burst, spark, distance, seconds);
                const [x2, y2] = position(burst, spark, distance + Math.max(0.01, length), seconds);
                ctx.lineCap = 'round';
                if (spark.glow > 0) {
                    ctx.globalAlpha = fade * 0.14 * spark.glow;
                    ctx.lineWidth = width * 4.5;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
                ctx.globalAlpha = fade;
                ctx.lineWidth = width;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                return true;
            }
            if (s.shape === 'streak') {
                const lag = reduced ? 0 : Math.min(elapsed, 70 + s.size * 4 * spark.scale);
                const back = reduced ? 0.4 : s.ease(clamp((elapsed - lag) / life, 0, 1));
                const [hx, hy] = position(burst, spark, distance, seconds);
                const [tx, ty] = position(burst, spark, s.radius * spark.reach * back, Math.max(0, seconds - lag / 1000));
                const dx = hx - tx;
                const dy = hy - ty;
                const length = Math.hypot(dx, dy) || 1;
                const nx = (-dy / length) * width * 0.5;
                const ny = (dx / length) * width * 0.5;
                const paint = (spreadWidth, alpha) => {
                    const gradient = ctx.createLinearGradient(tx, ty, hx, hy);
                    gradient.addColorStop(0, spark.clear);
                    gradient.addColorStop(1, spark.color);
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.moveTo(tx, ty);
                    ctx.lineTo(hx + nx * spreadWidth, hy + ny * spreadWidth);
                    ctx.lineTo(hx - nx * spreadWidth, hy - ny * spreadWidth);
                    ctx.closePath();
                    ctx.fill();
                    ctx.fillStyle = spark.color;
                    ctx.beginPath();
                    ctx.arc(hx, hy, width * 0.5 * spreadWidth, 0, Math.PI * 2);
                    ctx.fill();
                };
                if (spark.glow > 0)
                    paint(3.2, fade * 0.16 * spark.glow);
                paint(1, fade);
                return true;
            }
            if (s.shape === 'dot') {
                const [x, y] = position(burst, spark, distance, seconds);
                const radius = width * 1.25 * (1 - 0.5 * e);
                if (spark.glow > 0) {
                    ctx.globalAlpha = fade * 0.18 * spark.glow;
                    ctx.beginPath();
                    ctx.arc(x, y, radius * 2.6, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = fade;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
                return true;
            }
            const [x, y] = position(burst, spark, distance, seconds);
            const twinkle = reduced ? 1 - p : Math.pow(Math.sin(Math.PI * clamp(p * 1.1, 0, 1)), 0.7);
            const radius = s.size * 0.6 * spark.scale * twinkle;
            const rotation = spark.angle + spark.spin * p * Math.PI * 0.5;
            if (radius <= 0.05)
                return true;
            if (spark.glow > 0) {
                ctx.globalAlpha = fade * 0.2 * spark.glow;
                ctx.beginPath();
                ctx.arc(x, y, radius * 1.1, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = fade;
            starPath(ctx, x, y, radius, rotation);
            ctx.fill();
            return true;
        };
        const drawRing = (ctx, burst, elapsed) => {
            const s = burst.settings;
            const life = reduced ? REDUCED_MS : s.duration * 0.8;
            const p = elapsed / life;
            if (p >= 1)
                return false;
            const radius = 2 + s.radius * 0.6 * (reduced ? 0.6 : EASINGS['ease-out'](p));
            ctx.globalAlpha = Math.pow(1 - p, 2) * 0.7;
            ctx.strokeStyle = burst.sparks[0]?.color ?? s.colors[0];
            ctx.lineWidth = Math.max(0.5, s.width * (1 - p) * 0.9);
            ctx.beginPath();
            ctx.arc(burst.x, burst.y, radius, 0, Math.PI * 2);
            ctx.stroke();
            return true;
        };
        const remove = burst => {
            burst.canvas.remove();
            const index = bursts.indexOf(burst);
            if (index >= 0)
                bursts.splice(index, 1);
        };
        const frame = now => {
            raf = 0;
            for (const burst of [...bursts]) {
                const elapsed = now - burst.start;
                const ctx = burst.ctx;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, burst.canvas.width, burst.canvas.height);
                ctx.setTransform(burst.ratio, 0, 0, burst.ratio, -burst.left * burst.ratio, -burst.top * burst.ratio);
                let alive = false;
                if (burst.settings.ring && drawRing(ctx, burst, elapsed))
                    alive = true;
                for (const spark of burst.sparks) {
                    if (drawSpark(ctx, burst, spark, elapsed))
                        alive = true;
                }
                ctx.globalAlpha = 1;
                if (!alive)
                    remove(burst);
            }
            if (bursts.length)
                raf = requestAnimationFrame(frame);
        };
        const spawn = (clientX, clientY) => {
            const s = settingsRef.current;
            if (s.disabled)
                return;
            const rect = root.getBoundingClientRect();
            const offset = Math.floor(Math.random() * s.colors.length);
            const full = s.spread >= 359.5;
            const arc = (s.spread * Math.PI) / 180;
            const heading = ((s.direction - 90) * Math.PI) / 180;
            const step = full ? (Math.PI * 2) / s.count : s.count > 1 ? arc / (s.count - 1) : 0;
            const sparks = Array.from({ length: s.count }, (_, i) => {
                const base = full ? heading + step * i : s.count > 1 ? heading - arc / 2 + step * i : heading;
                const jitter = (Math.random() - 0.5) * s.randomness;
                return {
                    angle: base + jitter * (step || arc || 1) * 0.9,
                    reach: 1 + (Math.random() - 0.5) * 0.7 * s.randomness,
                    scale: 1 + (Math.random() - 0.5) * 0.8 * s.randomness,
                    life: 1 + (Math.random() - 0.5) * 0.5 * s.randomness,
                    spin: Math.random() - 0.5,
                    color: s.colors[(i + offset) % s.colors.length],
                    clear: '',
                    glow: 0
                };
            });
            const longest = s.duration * (1 + 0.25 * s.randomness);
            const fall = drop(s, longest / 1000);
            const reach = s.radius * (1 + 0.35 * s.randomness) * (s.ease === EASINGS.spring ? 1.15 : 1) +
                s.size * (1 + 0.4 * s.randomness) +
                s.width * (s.glow > 0 ? 6 : 2) +
                6;
            const box = {
                left: Math.max(clientX - reach, 0),
                top: Math.max(clientY - reach, 0),
                right: Math.min(clientX + reach, window.innerWidth),
                bottom: Math.min(clientY + reach + fall, window.innerHeight)
            };
            if (box.right - box.left < 1 || box.bottom - box.top < 1)
                return;
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            const canvas = document.createElement('canvas');
            canvas.width = Math.ceil((box.right - box.left) * ratio);
            canvas.height = Math.ceil((box.bottom - box.top) * ratio);
            Object.assign(canvas.style, {
                position: 'absolute',
                left: `${box.left - rect.left}px`,
                top: `${box.top - rect.top}px`,
                width: `${box.right - box.left}px`,
                height: `${box.bottom - box.top}px`,
                display: 'block',
                pointerEvents: 'none'
            });
            canvas.setAttribute('aria-hidden', 'true');
            layer.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                canvas.remove();
                return;
            }
            for (const spark of sparks) {
                const [r, g, b] = channels(ctx, spark.color);
                spark.clear = `rgba(${r}, ${g}, ${b}, 0)`;
                spark.glow = s.glow * (0.35 + 0.65 * ((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255));
            }
            bursts.push({
                x: clientX,
                y: clientY,
                start: performance.now(),
                sparks,
                settings: { ...s },
                canvas,
                ctx,
                ratio,
                left: box.left,
                top: box.top
            });
            while (bursts.length > MAX_BURSTS)
                remove(bursts[0]);
            if (!raf)
                raf = requestAnimationFrame(frame);
        };
        const onPointerDown = event => {
            if (event.pointerType !== 'mouse' || event.button !== 0)
                return;
            lastPress = { time: performance.now(), x: event.clientX, y: event.clientY };
            spawn(event.clientX, event.clientY);
        };
        const onClick = event => {
            if ('pointerType' in event && event.pointerType === 'mouse')
                return;
            if (event.detail === 0) {
                const target = event.target instanceof Element ? event.target : root;
                const rect = target.getBoundingClientRect();
                spawn(rect.left + rect.width / 2, rect.top + rect.height / 2);
                return;
            }
            const recent = performance.now() - lastPress.time < 700 &&
                Math.hypot(event.clientX - lastPress.x, event.clientY - lastPress.y) < 12;
            if (!recent)
                spawn(event.clientX, event.clientY);
        };
        root.addEventListener('pointerdown', onPointerDown);
        root.addEventListener('click', onClick);
        engineRef.current = {
            spark: (x, y) => {
                const rect = root.getBoundingClientRect();
                spawn(rect.left + (x ?? rect.width / 2), rect.top + (y ?? rect.height / 2));
            }
        };
        return () => {
            cancelAnimationFrame(raf);
            root.removeEventListener('pointerdown', onPointerDown);
            root.removeEventListener('click', onClick);
            for (const burst of [...bursts])
                remove(burst);
            engineRef.current = null;
        };
    }, []);
    (0, react_1.useImperativeHandle)(ref, () => ({
        spark: (x, y) => engineRef.current?.spark(x, y)
    }), []);
    return (React.createElement("div", { ref: rootRef, className: className, style: { position: 'relative', width: '100%', height: '100%', isolation: 'isolate', ...style } },
        children,
        React.createElement("span", { ref: layerRef, "aria-hidden": "true", style: {
                position: 'absolute',
                inset: 0,
                zIndex: layer === 'back' ? -1 : 1,
                overflow: 'visible',
                pointerEvents: 'none'
            } })));
});
ClickSpark.displayName = 'ClickSpark';
exports.default = ClickSpark;

return exports.default; })();