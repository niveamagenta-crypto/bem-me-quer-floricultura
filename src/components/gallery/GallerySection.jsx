import { Suspense, lazy, useMemo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import clsx from 'clsx';
import GalleryFilters from './GalleryFilters';
import MakingOfStoryReel from './MakingOfStoryReel';
import { galleryFilters, galleryPhotos, makingOfStories } from '../../data/gallery';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const LightboxViewer = lazy(() => import('./LightboxViewer'));

const GallerySection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === 'all') {
      return galleryPhotos;
    }

    return galleryPhotos.filter((photo) => photo.collection === activeFilter);
  }, [activeFilter]);

  const slides = useMemo(
    () =>
      filteredPhotos.map((photo) => ({
        src: photo.src,
        description: photo.description,
        title: photo.title,
      })),
    [filteredPhotos]
  );

  const photos = useMemo(
    () =>
      filteredPhotos.map((photo) => ({
        ...photo,
        src: photo.src,
        width: photo.width,
        height: photo.height,
      })),
    [filteredPhotos]
  );

  const columns = useCallback(
    (containerWidth) => {
      if (containerWidth < 640) return 1;
      if (containerWidth < 1024) return 2;
      return 3;
    },
    []
  );

  const renderPhoto = useCallback(
    ({ photo, layout, imageProps: { alt, style, ...rest }, wrapperStyle }) => (
      <motion.figure
        className="group relative overflow-hidden rounded-[28px]"
        style={{ ...wrapperStyle, borderRadius: '28px', cursor: 'zoom-in' }}
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.24, 0.12, 0.25, 1] }}
      >
        <img
          {...rest}
          alt={alt}
          style={{ ...style, borderRadius: '28px' }}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 transition duration-500 group-hover:opacity-100">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            {photo.collection}
          </span>
          <h3 className="mt-2 font-display text-xl">{photo.title}</h3>
          <p className="mt-2 text-sm text-white/80">{photo.description}</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.25em] text-white/60">
            {photo.tags?.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/30 px-3 py-1"
              >
                {tag}
              </li>
            ))}
          </ul>
        </figcaption>
      </motion.figure>
    ),
    [prefersReducedMotion]
  );

  return (
    <section id="portfolio" className="relative bg-transparent py-24 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
            portfólio & making of
          </span>
          <h2 className="mt-6 font-display text-4xl text-secondary md:text-5xl">
            Galeria imersiva de experiências florais
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Navegue pelos nossos casos favoritos, filtre por segmentos e mergulhe nos bastidores de
            cada história floral.
          </p>
        </div>

        <div className="mt-12">
          <GalleryFilters
            filters={galleryFilters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <PhotoAlbum
              layout="masonry"
              columns={columns}
              photos={photos}
              renderPhoto={renderPhoto}
              onClick={({ index }) => setLightboxIndex(index)}
              targetRowHeight={320}
            />
          </div>

          <aside className="sticky top-24 space-y-8">
            <motion.div
              className="rounded-[32px] bg-white/75 p-8 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.45)] backdrop-blur"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.24, 0.12, 0.25, 1] }}
            >
              <h3 className="font-display text-2xl text-secondary">
                Making of em stories
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Um olhar de bastidores com os principais passos do processo criativo: do moodboard ao
                grande dia.
              </p>
              <MakingOfStoryReel stories={makingOfStories} />
            </motion.div>
          </aside>
        </div>
      </div>

      <Suspense fallback={null}>
        {lightboxIndex >= 0 && (
          <LightboxViewer
            open={lightboxIndex >= 0}
            index={lightboxIndex}
            slides={slides}
            onClose={() => setLightboxIndex(-1)}
            onView={({ index }) => setLightboxIndex(index)}
          />
        )}
      </Suspense>
    </section>
  );
};

export default GallerySection;

