
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
    </div>
  );
};

export default Index;
