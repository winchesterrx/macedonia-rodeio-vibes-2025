import { useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IngressosSection from '../components/IngressosSection';
import ProgramacaoSection from '../components/ProgramacaoSection';
import RanchoBaladaSection from '../components/RanchoBaladaSection';
import PatrocinadoresSection from '../components/PatrocinadoresSection';
import ContatoSection from '../components/ContatoSection';
import Footer from '../components/Footer';

const Index = () => {
  // Otimizar a função handleHashChange para evitar re-renderizações desnecessárias
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);
  
  useEffect(() => {
    document.title = "Macedônia Rodeio Show 2025";
    
    // Handle hash navigation on page load
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  return (
    <div className="flex flex-col min-h-screen bg-rodeo-darker">
      <Header />
      <Hero />
      <IngressosSection />
      <ProgramacaoSection />
      <RanchoBaladaSection />
      <PatrocinadoresSection />
      <ContatoSection />
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/5517997799992"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
        aria-label="Contato via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-phone"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.37a2 2 0 0 1-.45 2.11L8 9c1.72 3.24 4.24 5.76 7.48 7.48l.8-.8a2 2 0 0 1 2.11-.45c.77.24 1.56.42 2.37.54a2 2 0 0 1 1.72 2z" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
