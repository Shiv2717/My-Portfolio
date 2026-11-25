import DomeGallery from './DomeGallery';

function asset(path) {
  return window.portfolioFiles?.[path] ?? path;
}

const images = PORTFOLIO_PHOTOS.map((name, index) => ({
  src: asset('images/clicks/tiles/' + name),
  fullSrc: asset('images/clicks/' + name),
  alt: 'Photograph ' + (index + 1) + ' by Shivam Mishra'
}));

function pageUrl(gallery) {
  const url = new URL(location.href);
  if (gallery) url.searchParams.set('gallery','photography');
  else url.searchParams.delete('gallery');
  url.hash = gallery ? '' : 'photos';
  return url.href;
}

export function GalleryLink() {
  return <a className="dome-entry" href={pageUrl(true)} target="_blank" rel="noopener">
    <div className="dome-strip" aria-hidden="true">{[0, Math.floor(images.length / 2), images.length - 1].map(i=><img key={i} src={images[i].src} alt="" loading="lazy"/>)}</div>
    <span className="dome-callout"><strong>Open photo gallery</strong><small>Color dome · Opens in a new tab</small></span>
  </a>;
}

export function PhotographyPage() {
  React.useEffect(() => {document.title='Photography | Shivam Mishra';}, []);
  return <div className="photo-room">
    <DomeGallery images={images} grayscale={false} segments={Math.max(35, Math.ceil(images.length / 9))} fitBasis="viewport" fit={0.81} minRadius={200}
      overlayBlurColor="#120f17" imageBorderRadius="22%" openedImageBorderRadius="8px"
      openedImageWidth="min(92vw, 1400px)" openedImageHeight="88dvh"/>
  </div>;
}
