import { Suspense, lazy } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Differentials from '../components/Differentials';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ScrollProgress from '../components/ScrollProgress';
import CTASection from '../components/CTASection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { WHATSAPP_LINK } from '../config/contact';
import ManifestoSection from '../components/ManifestoSection';
import VideoTestimonialSection from '../components/VideoTestimonialSection';
import About from '../components/About';
import useScrollChromaticBackground from '../hooks/useScrollChromaticBackground';
import FloatingFooterCTA from '../components/cta/FloatingFooterCTA';
import useIsCoarsePointer from '../hooks/useIsCoarsePointer';

const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));

const SectionFallback = ({ title }) => (
  <div className="py-24 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
    Carregando {title}…
  </div>
);

const Home = () => {
  useScrollAnimation();
  const backgroundGradient = useScrollChromaticBackground();
  const isCoarsePointer = useIsCoarsePointer();

  return (
    <div
      className="relative min-h-screen transition-colors duration-700"
      style={{
        backgroundImage: backgroundGradient,
        backgroundAttachment: isCoarsePointer ? 'scroll' : 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ScrollProgress />
      <Header />
      
      <main>
        <Hero />

        <ManifestoSection />

        <VideoTestimonialSection />

        <About />

        <CTASection 
          title="Conheça Nossos Serviços"
          subtitle="Descubra como podemos transformar seu evento em algo inesquecível"
          buttonText="Ver Serviços"
          buttonLink="#servicos"
          variant="light"
        />
        
        <Services />
        
        <HowItWorks />
        
        <Differentials />
        
        <CTASection 
          title="Veja Nossos Projetos"
          subtitle="Conheça alguns dos trabalhos que realizamos com amor"
          buttonText="Ver Portfólio"
          buttonLink="/portfolio"
          variant="primary"
        />
        
        <Suspense fallback={<SectionFallback title="depoimentos" />}>
          <Testimonials />
        </Suspense>
        
        <CTASection 
          title="Pronto Para Começar Seu Projeto?"
          subtitle="Entre em contato e vamos criar algo especial juntos"
          buttonText="Solicitar Orçamento"
          buttonLink={WHATSAPP_LINK}
          variant="secondary"
        />
        
        <Suspense fallback={<SectionFallback title="formulário de contato" />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <FloatingFooterCTA />
    </div>
  );
};

export default Home;

