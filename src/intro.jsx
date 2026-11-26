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
  ['top','Home'], ['about','Profile'], ['work','Projects'], ['skills','Skills'],
  ['experience','Experience & education'], ['achievements','Achievements'],
  ['activities','Activities'], ['photos','Photos'], ['music','Favorite songs'], ['contact','Contact']
];

const items = destinations.map(([id, label]) => ({ href: '#' + id, label }));

export function Dock() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    function sync() {
      const line = Math.min(120, innerHeight / 4);
      let current = 0;
      destinations.forEach(([id], index) => {
        if (document.getElementById(id)?.getBoundingClientRect().top <= line) current = index;
      });
      setActive(Math.ceil(scrollY + innerHeight) >= document.documentElement.scrollHeight ? items.length - 1 : current);
    }
    sync();
    window.addEventListener('scroll', sync, {passive: true});
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  return <div className="portfolio-nav-wrap">
    <PillNav className="portfolio-pill" logo={<span>sm.</span>} logoHref="#top"
      logoAlt="Shivam Mishra home" ariaLabel="Portfolio sections" items={items}
      activeHref={items[active].href} itemStyle="plain" hoverEffect="fill" indicator="dot"
      layout="joined" surface="none" size="sm" collapse="never" highlightColor="#e5b778"
      textColor="#ddd8d1" />
  </div>;
}
