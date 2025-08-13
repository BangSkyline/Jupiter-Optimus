import React from "react";
import { Button } from "./ui/button";
import { Sparkles, Zap, Shield, Database, Crown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#461044] rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-[#dbb979] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#461044] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#461044]/20 backdrop-blur-sm rounded-full border border-[#dbb979]/30">
              <Crown className="w-16 h-16 text-[#dbb979]" />
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-[#461044] leading-tight">
            L'Empire de l'
            <span className="text-[#dbb979] block">Intelligence Artificielle</span>
          </h1>

          <p className="text-xl lg:text-2xl text-[#461044] mb-8 leading-relaxed font-medium">
            Cosmos transforme votre entreprise avec la puissance de l'IA, 
            la maîtrise des données et l'excellence technologique. 
            Rejoignez l'élite digitale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-[#461044] hover:bg-[#461044]/90 text-[#ffdb8d] px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Découvrir nos Services
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-[#461044] text-[#461044] hover:bg-[#461044] hover:text-[#ffdb8d] px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Consultation Gratuite
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-[#dbb979]/30 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
              <Sparkles className="w-12 h-12 text-[#461044] mb-4 mx-auto" />
              <h3 className="text-[#461044] font-bold text-lg mb-2">IA Avancée</h3>
              <p className="text-[#461044]/80 text-sm">Solutions intelligentes sur mesure</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-[#dbb979]/30 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
              <Database className="w-12 h-12 text-[#461044] mb-4 mx-auto" />
              <h3 className="text-[#461044] font-bold text-lg mb-2">Gestion Données</h3>
              <p className="text-[#461044]/80 text-sm">Architecture de données optimisée</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-[#dbb979]/30 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
              <Shield className="w-12 h-12 text-[#461044] mb-4 mx-auto" />
              <h3 className="text-[#461044] font-bold text-lg mb-2">Serveurs Sécurisés</h3>
              <p className="text-[#461044]/80 text-sm">Infrastructure robuste et fiable</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-[#dbb979]/30 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
              <Zap className="w-12 h-12 text-[#461044] mb-4 mx-auto" />
              <h3 className="text-[#461044] font-bold text-lg mb-2">Automatisation</h3>
              <p className="text-[#461044]/80 text-sm">Agents intelligents autonomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;