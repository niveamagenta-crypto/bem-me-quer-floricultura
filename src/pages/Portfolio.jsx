import { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ScrollProgress from '../components/ScrollProgress';
import CTASection from '../components/CTASection';
import { ArrowLeft } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { WHATSAPP_LINK } from '../config/contact';

const Gallery = lazy(() => import('../components/Gallery'));

const Portfolio = () => {
  const navigate = useNavigate();

  useScrollAnimation();

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
        <Suspense fallback={<div className="py-24 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Carregando galeria…</div>}>
          <Gallery />
        </Suspense>
        
        {/* CTA */}
        <CTASection 
          title="Gostou do Que Viu?"
          subtitle="Entre em contato e vamos criar algo especial para você"
          buttonText="Solicitar Orçamento"
          buttonLink={WHATSAPP_LINK}
          variant="primary"
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Portfolio;

