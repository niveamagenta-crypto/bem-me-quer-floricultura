import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const LightboxViewer = ({ open, index, slides, onClose, onView }) => {
  if (!open) return null;

  return (
    <Lightbox
      open={open}
      index={index}
      close={onClose}
      slides={slides}
      plugins={[Fullscreen, Slideshow, Zoom, Thumbnails, Captions]}
      carousel={{ finite: false }}
      controller={{
        closeOnBackdropClick: true,
        touchAction: 'pan-y',
      }}
      animation={{ fade: 400, swipe: 500 }}
      on={{
        view: onView,
      }}
    />
  );
};

export default LightboxViewer;

