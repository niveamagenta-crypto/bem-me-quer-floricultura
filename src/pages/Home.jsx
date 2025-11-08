import { useEffect } from 'react';
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

const Home = () => {
  useEffect(() => {
    // Intersection Observer para animações ao rolar
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    // Observar elementos com animação
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

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
          buttonLink="https://wa.me/5524992771513?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
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

