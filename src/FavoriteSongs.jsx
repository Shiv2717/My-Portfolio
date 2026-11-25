import TiltedCard, { TiltedCardLayer } from './TiltedCard';

const songs = [
  ['Training Season (London Sessions)', 'Dua Lipa', 'nKOecvbrAKw'],
  ['São Paulo', 'The Weeknd & Anitta', '2kjolTLZ_Mg'],
  ['This Party Getting Hot', 'Jazzy B feat. Honey Singh', 'ZuoIW4aINak'],
  ['Enter Sandman', 'Metallica', 'CHIWNDAwTqQ'],
  ['WE ON GO', 'BIA', 'hx50R-jMAhQ'],
  ['Pass That Dutch', 'Missy Elliott', 'TtdFlf333c4'],
  ['SICKO MODE', 'Travis Scott', 'NQbkGDoD7B0'],
  ['Bohemian Rhapsody (Digital Remaster)', 'Queen', 'fJ9rUzIMcZQ'],
  ['War Pigs', 'Black Sabbath', 'LQUXuQ6Zd9w']
];

export default function FavoriteSongs() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const cover = 'https://i.ytimg.com/vi/' + songs[0][2] + '/hqdefault.jpg';
  const track = selected === null ? null : songs[selected];
  const closeRef = React.useRef(null);
  const shelfRef = React.useRef(null);
  React.useEffect(() => { if (open) closeRef.current?.focus({preventScroll:true}); }, [open]);
  function closePlaylist() {
    setSelected(null);
    setOpen(false);
    requestAnimationFrame(() => shelfRef.current?.querySelector('figure')?.focus({preventScroll:true}));
  }
  return <section id="music" className="p-section">
    <h2 className="p-title">Favorite songs<span>.</span></h2>
    <div ref={shelfRef} className="playlist-stage">
      {!open ? <TiltedCard imageSrc={cover} altText="Playlist cover" captionText="Open favorite songs playlist"
        containerWidth="min(100%, 390px)" containerHeight="auto" imageWidth="100%" imageHeight="100%"
        style={{aspectRatio:'1'}} rotateAmplitude={12} glare={0.5} shadow={0.5} gyroscope={false}
        showTooltip={false} onClick={()=>setOpen(true)}>
        <TiltedCardLayer depth={30} className="playlist-cover">
          <div><h3>Favorite songs</h3><small>Shivam Mishra · 9 tracks</small></div><b aria-hidden="true">▶</b>
        </TiltedCardLayer>
      </TiltedCard> : <div className="playlist-panel">
        <div className="playlist-head"><img src={cover} alt=""/><div><strong>Favorite songs</strong><small>Shivam Mishra · 9 tracks</small></div>
          <button ref={closeRef} onClick={closePlaylist} aria-label="Close playlist">×</button>
        </div>
        <ol>{songs.map(([title, artist, id], i)=><li key={id}>
          <button onClick={()=>setSelected(i)} aria-pressed={selected===i}>
            <span>{selected===i ? '▶' : i+1}</span><div><strong>{title}</strong><small>{artist}</small></div>
          </button>
        </li>)}</ol>
      </div>}
      {track && <div className="playlist-player">
        <iframe key={track[2]} src={'https://www.youtube.com/embed/'+track[2]+'?autoplay=1&playsinline=1'}
          title={track[0]+' by '+track[1]} allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
        <strong>{track[0]}</strong><small>{track[1]}</small>
      </div>}
    </div>
  </section>;
}
