import { useState } from 'react';
import { X, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems, categories } from '../data/gallery';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = activeCategory === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageClick = (item) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setSelectedImage(item);
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedImage(filteredItems[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedImage(filteredItems[selectedIndex + 1]);
    }
  };

  const handleShare = () => {
    const text = `Veja este lindo trabalho da Bem Me Quer: ${selectedImage.title}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Projetos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Portfólio
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Cada projeto é uma história única de beleza e dedicação
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-sand text-gray-700 hover:bg-sand-dark'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Masonry Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => handleImageClick(item)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                {categories.find(c => c.id === item.category)?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Nenhum item encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal Melhorado */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold">
            {selectedIndex + 1} / {filteredItems.length}
          </div>

          {/* Navigation Arrows */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {selectedIndex < filteredItems.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all backdrop-blur-sm hover:scale-110"
              aria-label="Próximo"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Content */}
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="absolute bottom-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all hover:scale-110"
                aria-label="Compartilhar"
              >
                <Share2 size={20} />
              </button>
            </div>

            <div className="text-center mt-6 text-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/80 text-lg">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

