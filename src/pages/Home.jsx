import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Differentials from '../components/Differentials';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ScrollProgress from '../components/ScrollProgress';
import CTASection from '../components/CTASection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { WHATSAPP_LINK } from '../config/contact';

const Home = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      
      <main>
        <Hero />
        
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
        
        <Testimonials />
        
        <CTASection 
          title="Pronto Para Começar Seu Projeto?"
          subtitle="Entre em contato e vamos criar algo especial juntos"
          buttonText="Solicitar Orçamento"
          buttonLink={WHATSAPP_LINK}
          variant="secondary"
        />
        
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;

