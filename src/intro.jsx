import PillNav from './PillNav';
import LetterGlitch from './LetterGlitch';
import ProfileCard from './ProfileCard';

export function Hero() {
 return <section className="cover" aria-label="Introduction">
   <div className="hero-glitch" aria-hidden="true">
     <LetterGlitch glitchColors={['#ffffff', '#61dca3']} glitchAmount={0.35}
       smooth speed={0.65} flow={0.5} clickEffect="burst" density={0.95} />
   </div>
   <div className="mast"><a href="#top" className="monogram" aria-label="Shivam Mishra home">sm.</a><span>Engineering &amp; photography</span><a href={window.portfolioFiles?.["resume.pdf"] ?? "resume.pdf"} download="Shivam_Kumar_Mishra_Resume.pdf">Résumé <small>PDF</small></a></div>
   <div className="hero-profile">
     <ProfileCard name="Shivam Mishra" title="Electronics & Communication Engineering"
       handle="Shiv2717" status="Durgapur, India" statusColor="#d8b98c" contactText="Contact"
       avatarUrl={window.portfolioFiles?.['images/hero-cutout.png'] ?? 'images/hero-cutout.png'}
       iconUrl={window.portfolioFiles?.['images/foil-mark.png'] ?? 'images/foil-mark.png'} backdropColor="#322e3c"
       holo={0.8} glare={0.5} tiltStrength={12} parallax={8} radius={16}
       enableTilt intro showUserInfo enableMobileTilt={false} theme="dark"
       onContactClick={() => {location.hash = 'contact'; document.getElementById('contact')?.scrollIntoView();}} />
   </div>
   <div className="cover-bottom"><h1 className="hero-heading">Shivam Mishra — Engineering and photography</h1><a href="#about">Meet Shivam <span aria-hidden="true">↓</span></a></div>
 </section>
}
const destinations = [
  ['about', 'Profile'], ['work', 'Projects'], ['experience', 'Experience & education'],
  ['photos', 'Photos'], ['contact', 'Contact']
];
const items = destinations.map(([id, label]) => ({ href: '#' + id, label }));

export function Dock() {
  const [active, setActive] = React.useState(-1);
  React.useEffect(() => {
    const sections = destinations.map(([id]) => document.getElementById(id));
    function sync() {
      // Include the scroll padding used when following the Meet Shivam link.
      const threshold = (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0) + 1;
      let current = -1;
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= threshold) current = index;
      });
      if (Math.ceil(scrollY + innerHeight) >= document.documentElement.scrollHeight) current = items.length - 1;
      setActive(current);
    }
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  if (active < 0) return null;
  return <div className="portfolio-nav-wrap">
    <PillNav className="portfolio-pill" ariaLabel="Portfolio sections" items={items}
      activeHref={items[active].href} layout="joined" surface="solid" size="sm"
      collapse="always" intro={false} highlightColor="#e5b778" />
  </div>;
}
