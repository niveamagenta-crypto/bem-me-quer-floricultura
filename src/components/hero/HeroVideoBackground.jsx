import { motion } from 'framer-motion';

const VIDEO_SOURCES = [
  {
    src: 'https://cdn.coverr.co/videos/coverr-a-florists-work-table-8230/1080p.mp4',
    type: 'video/mp4',
  },
];

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1920&q=80&auto=format&fit=crop';

const HeroVideoBackground = ({ prefersReducedMotion, overlayGradient, parallaxStyle }) => {
  return (
    <motion.div className="absolute inset-0 z-0 overflow-hidden" style={parallaxStyle}>
      {prefersReducedMotion ? (
        <img
          src={FALLBACK_IMAGE}
          alt="Montagem floral artesanal"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={FALLBACK_IMAGE}
        >
          {VIDEO_SOURCES.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      )}

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{ backgroundImage: overlayGradient, mixBlendMode: 'multiply', opacity: 0.6 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-black/15" />
    </motion.div>
  );
};

export default HeroVideoBackground;

