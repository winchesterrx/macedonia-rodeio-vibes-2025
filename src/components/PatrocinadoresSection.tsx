import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import imperioLogo from "../assets/imperio-logo.png";
const PatrocinadoresSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const patrocinadores = [{
    name: "Cervejaria Império",
    logo: imperioLogo,
    tier: "master" // master, gold, silver
  }, {
    name: "Colégio Objetivo",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_BkcCESxiI6ziC-9P_ZpXDVP6BRy97vdAw&s",
    tier: "gold"
  }, {
    name: "Maxxi Hospitalar",
    logo: "https://via.placeholder.com/200x100/222222/D4AF37?text=Maxxi",
    tier: "gold"
  }, {
    name: "MultiDrogas",
    logo: "https://via.placeholder.com/200x100/222222/D4AF37?text=MultiDrogas",
    tier: "gold"
  }, {
    name: "AGV Nutrição Animal",
    logo: "https://via.placeholder.com/200x100/222222/D4AF37?text=AGV",
    tier: "silver"
  }, {
    name: "KZA e Cia",
    logo: "https://via.placeholder.com/200x100/222222/D4AF37?text=KZA",
    tier: "silver"
  }, {
    name: "Truck Center Boa Vista",
    logo: "https://via.placeholder.com/200x100/222222/D4AF37?text=Truck+Center",
    tier: "silver"
  }, {
    name: "Beverly Gin",
    logo: "https://via.placeholder.com/200x100/222222/D4AF37?text=Beverly+Gin",
    tier: "silver"
  }, {
    name: "Don Leghe",
    logo: "https://via.placeholder.com/200x100/222222/D4AF37?text=Don+Leghe",
    tier: "silver"
  }, {
    name: "Ice Leev",
    logo: "https://via.placeholder.com/200x100/222222/D4AF37?text=Ice+Leev",
    tier: "silver"
  }];
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 300;
    const scrollPosition = direction === 'left' ? carouselRef.current.scrollLeft - scrollAmount : carouselRef.current.scrollLeft + scrollAmount;
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };
  const masterSponsors = patrocinadores.filter(p => p.tier === "master");
  const goldSponsors = patrocinadores.filter(p => p.tier === "gold");
  const silverSponsors = patrocinadores.filter(p => p.tier === "silver");
  return <section id="patrocinadores" className="py-20 bg-rodeo-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">NOSSOS</span> <span className="text-rodeo-gold">PATROCINADORES</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça as marcas que tornaram possível o Macedônia Rodeio Show 2025
          </p>
        </div>

        {/* Master Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">
            <span className="border-b-2 border-rodeo-gold pb-1">
              Patrocinador Master
            </span>
          </h3>
          
          <div className="flex justify-center">
            {masterSponsors.map((sponsor, index) => <div key={index} className="p-6 flex items-center justify-center">
                <div className="bg-black/30 p-8 rounded-lg border border-rodeo-gold/40 flex items-center justify-center hover:border-rodeo-gold transition-colors">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-h-32 max-w-[300px]" onError={e => {
                e.currentTarget.src = `https://via.placeholder.com/300x150/222222/D4AF37?text=${sponsor.name.replace(/ /g, '+')}`;
              }} />
                </div>
              </div>)}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-center mb-6">
            <span className="border-b border-rodeo-gold/70 pb-1">
              Patrocinadores Gold
            </span>
          </h3>
          
          <div className="flex flex-wrap justify-center">
            {goldSponsors.map((sponsor, index) => <div key={index} className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center">
                <div className="bg-black/20 p-6 rounded-lg border border-rodeo-gold/30 flex items-center justify-center w-full h-full hover:border-rodeo-gold/80 transition-colors">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 max-w-[200px]" onError={e => {
                e.currentTarget.src = `https://via.placeholder.com/200x100/222222/D4AF37?text=${sponsor.name.replace(/ /g, '+')}`;
              }} />
                </div>
              </div>)}
          </div>
        </div>

        {/* Silver Sponsors Carousel */}
        <div className="relative">
          <h3 className="text-base font-medium text-center mb-6">
            <span className="border-b border-rodeo-gold/50 pb-1">
              Patrocinadores
            </span>
          </h3>
          
          <div className="relative">
            <Button variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-rodeo-gold/50 text-rodeo-gold hover:bg-rodeo-gold hover:text-black rounded-full" onClick={() => scroll('left')}>
              <ChevronLeft size={20} />
            </Button>
            
            <div ref={carouselRef} className="flex overflow-x-auto scrollbar-none scroll-smooth py-4 px-10" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
              {silverSponsors.map((sponsor, index) => <div key={index} className="flex-shrink-0 w-[200px] mx-3">
                  <div className="bg-black/10 p-4 rounded-lg border border-rodeo-gold/20 flex items-center justify-center h-[100px] hover:border-rodeo-gold/60 transition-colors">
                    <img src={sponsor.logo} alt={sponsor.name} className="max-h-16 max-w-[160px]" onError={e => {
                  e.currentTarget.src = `https://via.placeholder.com/160x80/222222/D4AF37?text=${sponsor.name.replace(/ /g, '+')}`;
                }} />
                  </div>
                </div>)}
              
              {/* Empty Spaces for Future Sponsors */}
              {[1, 2, 3].map(index => <div key={`empty-${index}`} className="flex-shrink-0 w-[200px] mx-3">
                  <div className="bg-black/10 p-4 rounded-lg border border-dashed border-rodeo-gold/20 flex items-center justify-center h-[100px]">
                    <p className="text-rodeo-gold/50 text-sm">Espaço disponível</p>
                  </div>
                </div>)}
            </div>
            
            <Button variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 border-rodeo-gold/50 text-rodeo-gold hover:bg-rodeo-gold hover:text-black rounded-full" onClick={() => scroll('right')}>
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm italic">
            Deseja que sua marca faça parte deste evento? Entre em contato conosco!
          </p>
        </div>
      </div>
    </section>;
};
export default PatrocinadoresSection;
