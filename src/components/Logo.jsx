const Logo = ({ className = '', isScrolled = false, isHome = true }) => {
  // Usando o PNG do arquivo em public/images/logo.png
  const logoImagePNG = '/images/logo.png';
  
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo PNG do arquivo - Tamanho reduzido */}
      <img 
        src={logoImagePNG}
        alt="Bem Me Quer - Floricultura em Angra dos Reis"
        className="h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain"
        style={{
          maxHeight: '56px',
          width: 'auto',
          imageRendering: 'auto',
        }}
      />
    </div>
  );
};

export default Logo;
