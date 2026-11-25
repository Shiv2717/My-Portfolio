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
  const [active, setActive] = React.useState(0);
  const [title, artist, id] = songs[active];
  return <section id="music" className="p-section">
    <h2 className="p-title">Favorite songs<span>.</span></h2>
    <div className="record-shelf" role="group" aria-label="Choose a song">
      {songs.map(([name, performer, video], index) =>
        <button key={video} className="record-sleeve" aria-label={name + ' by ' + performer}
          aria-pressed={active === index} onPointerEnter={e=>{if(e.pointerType==='mouse') setActive(index)}}
          onFocus={()=>setActive(index)} onClick={()=>setActive(index)}>
          <img loading="lazy" src={'https://i.ytimg.com/vi/' + video + '/hqdefault.jpg'} alt=""/>
          <span>{name}</span>
        </button>)}
    </div>
    <div className="record-controls">
      <div aria-live="polite"><strong>{title}</strong><small>{artist}</small></div>
      <a href={'https://music.youtube.com/watch?v=' + id}>Play song ↗</a>
      <a href={'https://www.youtube.com/watch_videos?video_ids=' + songs.map(song=>song[2]).join(',')}>Play all 9 ↗</a>
    </div>
  </section>;
}
