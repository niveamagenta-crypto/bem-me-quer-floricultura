import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ScrollProgress from '../components/ScrollProgress';
import CTASection from '../components/CTASection';
import { ArrowLeft } from 'lucide-react';

const Portfolio = () => {
  const navigate = useNavigate();

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
        {/* Back Button */}
        <section className="pt-32 pb-8 bg-sand">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para página inicial</span>
            </button>
          </div>
        </section>

        {/* Gallery */}
        <Gallery />
        
        {/* CTA */}
        <CTASection 
          title="Gostou do Que Viu?"
          subtitle="Entre em contato e vamos criar algo especial para você"
          buttonText="Solicitar Orçamento"
          buttonLink="https://wa.me/5524992771513?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
          variant="primary"
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Portfolio;

