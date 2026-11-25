import DomeGallery from './DomeGallery';

function asset(path) {
  return window.portfolioFiles?.[path] ?? path;
}

const images = PORTFOLIO_PHOTOS.map((name, index) => ({
  src: asset('images/clicks/tiles/' + name),
  fullSrc: asset('images/clicks/' + name),
  alt: 'Photograph ' + (index + 1) + ' by Shivam Mishra'
}));

export function GalleryLink() {
  const dialog = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  function showGallery() {
    dialog.current.showModal();
    setOpen(true);
  }
  return <><button type="button" className="dome-entry" aria-haspopup="dialog" onClick={showGallery}>
    <div className="dome-strip" aria-hidden="true">{[0, Math.floor(images.length / 2), images.length - 1].map(i=><img key={i} src={images[i].fullSrc} alt="" loading="lazy"/>)}</div>
    <span className="dome-callout"><strong>Open photo gallery</strong><small>Color dome · Opens in a new tab</small></span>
  </button>
    <dialog ref={dialog} className="photo-dialog" aria-label="Photo gallery" onClose={()=>setOpen(false)}
      onCancel={event=>{if(dialog.current.querySelector('[data-enlarging="true"]')) event.preventDefault()}}>
      {open && <PhotographyPage/>}
      <button type="button" className="gallery-close" onClick={()=>dialog.current.close()}>Close gallery</button>
    </dialog>
  </>;
}

export function PhotographyPage() {
  React.useEffect(() => {const previous=document.title;document.title='Photography | Shivam Mishra';return ()=>{document.title=previous};}, []);
  return <div className="photo-room">
    <DomeGallery images={images} grayscale={false} segments={Math.max(35, Math.ceil(images.length / 9))} fitBasis="viewport" fit={0.81} minRadius={200}
      overlayBlurColor="#120f17" imageBorderRadius="22%" openedImageBorderRadius="8px"
      openedImageWidth="min(92vw, 1400px)" openedImageHeight="88dvh"/>
  </div>;
}
