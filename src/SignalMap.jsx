import landPath from './worldLand';

const width = 720;
const latitudeY = lat => 1.25 * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 450));
const project = ([lon, lat]) => [(lon + 180) * 2, (latitudeY(83) - latitudeY(lat)) * 360 / Math.PI];
const height = Math.ceil(project([0, -57])[1]);
const cities = [[87.31,23.52],[-74,40.71],[-0.13,51.51],[139.69,35.68],[151.21,-33.87],[-46.63,-23.55],[18.42,-33.93],[103.82,1.35]].map(project);
const routes = [[2,0],[0,3],[1,2],[7,4],[5,6],[0,7],[6,0],[5,1]];

function arcPoint(from, to, t) {
  const lift = Math.min(52, Math.abs(to[0] - from[0]) * 0.22);
  return [from[0] + (to[0] - from[0]) * t, from[1] + (to[1] - from[1]) * t - 4 * lift * t * (1-t)];
}

export default function SignalMap({grid, density, dotSize, rate, travel, trail, rippleSize}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const land = new Path2D(landPath);
    const spacing = width / density;
    const dots = new Path2D();
    for (let row = 0; row * spacing < height; row++) {
      const y = row * spacing;
      const offset = grid === 'square' ? 0 : (row % 2) * spacing / 2;
      for (let x = offset; x < width; x += spacing) {
        if (!ctx.isPointInPath(land,x,y,'evenodd')) continue;
        const radius = spacing * dotSize / 2;
        dots.moveTo(x + radius,y);
        dots.arc(x,y,radius,0,Math.PI*2);
      }
    }
    const base = document.createElement('canvas');
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, visible = false;
    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      base.width = canvas.width = Math.max(1, Math.round(rect.width * dpr));
      base.height = canvas.height = Math.max(1, Math.round(rect.height * dpr));
      const background = base.getContext('2d');
      background.scale(base.width / width, base.height / height);
      background.fillStyle = '#91879d';
      background.fill(dots);
      background.strokeStyle = '#aa8caf40';
      background.lineWidth = 0.8;
      for (const [a,b] of routes) {
        background.beginPath();
        for(let i=0;i<=32;i++) background.lineTo(...arcPoint(cities[a],cities[b],i/32));
        background.stroke();
      }
      for (const [x,y] of cities) {
        background.fillStyle = '#e5b778';
        background.beginPath(); background.arc(x,y,2.1,0,Math.PI*2); background.fill();
      }
      refresh();
    }
    function draw(time) {
      ctx.setTransform(1,0,0,1,0,0);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.drawImage(base,0,0);
      ctx.scale(canvas.width / width, canvas.height / height);
      const interval = 1000/rate;
      const now = time + travel;
      const latest = Math.floor(now / interval);
      for(let n=latest; n>=0 && (now-n*interval)<travel+650; n--) {
        const [a,b] = routes[n % routes.length];
        const t = (now - n*interval)/travel;
        if(t < 1) {
          const start = Math.max(0,t-trail);
          for(let i=1;i<=12;i++) {
            ctx.beginPath();
            ctx.moveTo(...arcPoint(cities[a],cities[b],start+(t-start)*(i-1)/12));
            ctx.lineTo(...arcPoint(cities[a],cities[b],start+(t-start)*i/12));
            ctx.strokeStyle = 'rgba(225,181,252,' + i/12 + ')';
            ctx.lineWidth = 1.8; ctx.stroke();
          }
          ctx.beginPath(); ctx.arc(...arcPoint(cities[a],cities[b],t),2,0,Math.PI*2);ctx.fillStyle='#fff4dc';ctx.fill();
        } else {
          const progress = (t-1)*travel/650;
          ctx.strokeStyle='rgba(229,183,120,'+(1-progress)+')';
          ctx.beginPath();ctx.arc(...cities[b],2+progress*rippleSize*6,0,Math.PI*2);ctx.stroke();
        }
      }
      if (visible && !document.hidden && !motion.matches) frame=requestAnimationFrame(draw);
    }
    function refresh() {
      cancelAnimationFrame(frame);
      if (visible && !document.hidden) draw(motion.matches ? 0 : performance.now());
    }
    const viewport=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;refresh()});
    const size=new ResizeObserver(resize);
    size.observe(canvas);viewport.observe(canvas);resize();
    motion.addEventListener('change',refresh);
    document.addEventListener('visibilitychange',refresh);
    return ()=>{cancelAnimationFrame(frame);size.disconnect();viewport.disconnect();motion.removeEventListener('change',refresh);document.removeEventListener('visibilitychange',refresh)};
  },[grid,density,dotSize,rate,travel,trail,rippleSize]);
  return <canvas className="footer-map" ref={ref} aria-hidden="true" style={{aspectRatio:width+'/'+height}}/>;
}
