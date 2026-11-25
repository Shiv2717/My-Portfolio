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
  return <section id="music" className="p-section">
    <div className="song-heading">
      <h2 className="p-title">Favorite songs<span>.</span></h2>
      <a href={'https://www.youtube.com/watch_videos?video_ids=' + songs.map(song=>song[2]).join(',')}>Play all 9 ↗</a>
    </div>
    <div className="song-grid">
      {songs.map(([title, artist, id]) => <article key={id}>
        <TiltedCard imageSrc={'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'}
          altText={title + ' artwork'} captionText={'Flip ' + title}
          containerWidth="100%" containerHeight="auto" imageWidth="100%" imageHeight="100%"
          style={{aspectRatio:'1'}} rotateAmplitude={12} scaleOnHover={1.05}
          glare={0.5} shadow={0.5} gyroscope={false} showTooltip={false}
          backContent={<div className="song-back"><strong>{artist}</strong><span>{title}</span></div>}>
          <TiltedCardLayer depth={30} className="song-title"><h3>{title}</h3></TiltedCardLayer>
        </TiltedCard>
        <a className="song-play" href={'https://music.youtube.com/watch?v=' + id} aria-label={'Play ' + title + ' by ' + artist}>
          <span>{artist}</span><b>Play ↗</b>
        </a>
      </article>)}
    </div>
  </section>;
}
