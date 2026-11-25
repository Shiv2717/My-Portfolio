import LetterGlitch from './LetterGlitch';
import ProfileCard from './ProfileCard';

export function Hero() {
 return <section className="cover" aria-label="Introduction">
   <div className="hero-glitch" aria-hidden="true">
     <LetterGlitch glitchColors={['#ffffff', '#61dca3']} glitchAmount={0.5}
       speed={1} flow={0.5} clickEffect="burst" density={0.95} />
   </div>
   <div className="mast"><a href="#top" className="monogram" aria-label="Shivam Mishra home">sm.</a><span>Engineering &amp; photography</span><a href={window.portfolioFiles?.["resume.pdf"] ?? "resume.pdf"} download="Shivam-Mishra-Resume.pdf">Résumé <small>PDF</small></a></div>
   <div className="hero-profile">
     <ProfileCard name="Shivam Mishra" title="Electronics & Communication Engineering"
       handle="Shiv2717" status="Durgapur, India" statusColor="#d8b98c" contactText="Contact"
       avatarUrl={window.portfolioFiles?.['images/profile-portrait.jpg'] ?? 'images/profile-portrait.jpg'}
       holo={0.8} glare={0.5} tiltStrength={12} parallax={8} radius={16}
       enableTilt intro showUserInfo enableMobileTilt={false} theme="dark"
       onContactClick={() => {location.hash = 'contact'; document.getElementById('contact')?.scrollIntoView();}} />
   </div>
   <div className="cover-bottom"><h1 className="hero-heading">Shivam Mishra — Engineering and photography</h1><a href="#about">Meet Shivam <span aria-hidden="true">↓</span></a></div>
 </section>
}
const destinations = ['top', 'work', 'skills', 'photos', 'contact'];
const labels = ['Home', 'Projects', 'Skills', 'Photos', 'Contact'];

export function Dock() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const trigger = React.useRef(null);
  const nav = React.useRef(null);

  React.useEffect(() => {
    function sync() {
      const line = Math.min(120, innerHeight / 4);
      let current = 0;
      destinations.forEach((id, index) => {
        if (document.getElementById(id)?.getBoundingClientRect().top <= line) current = index;
      });
      setActive(current);
    }
    sync();
    window.addEventListener('scroll', sync, {passive: true});
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  React.useEffect(() => {
    if (!open) return;
    function outside(event) {
      if (!nav.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
    };
  }, [open]);

  return <nav ref={nav} className="section-nav" aria-label="Portfolio navigation"
    onKeyDown={event => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current.focus({preventScroll:true});
      }
    }}>
    <button className="menu-trigger" ref={trigger} aria-expanded={open} aria-controls="portfolio-links"
      onClick={() => setOpen(value => !value)}>
      <span className="menu-icon" aria-hidden="true" />{open ? 'Close' : 'Menu'}
    </button>
    <ul id="portfolio-links" className="menu-links" hidden={!open}>
      {destinations.map((id, i) => <li key={id}>
        <a href={'#' + id} aria-current={i === active ? 'location' : undefined}
          onClick={() => { setOpen(false); trigger.current.focus({preventScroll:true}); }}>
          {labels[i]}
        </a>
      </li>)}
    </ul>
  </nav>;
}
