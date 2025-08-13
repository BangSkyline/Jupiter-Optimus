import React from "react";
import { Crown, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#461044] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-[#dbb979]" />
              <span className="text-2xl font-bold text-[#ffdb8d] tracking-wider">
                COSMOS
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              L'empire de l'intelligence artificielle. Nous transformons votre entreprise 
              avec des solutions IA de pointe, une gestion de données optimisée et 
              une infrastructure technologique d'excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#dbb979]/20 rounded-lg hover:bg-[#dbb979]/30 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-[#dbb979]" />
              </a>
              <a href="#" className="p-2 bg-[#dbb979]/20 rounded-lg hover:bg-[#dbb979]/30 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-[#dbb979]" />
              </a>
              <a href="#" className="p-2 bg-[#dbb979]/20 rounded-lg hover:bg-[#dbb979]/30 transition-colors duration-300">
                <Github className="w-5 h-5 text-[#dbb979]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#ffdb8d]">Services</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Conseil Intelligence Artificielle
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Gestion Bases de Données
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Maintenance Serveurs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Développement Applications IA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Automatisation Agentique
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#ffdb8d]">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("accueil")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("temoignages")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-[#dbb979] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#dbb979] transition-colors duration-300">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#ffdb8d]">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#dbb979] flex-shrink-0" />
                <span className="text-white/80">contact@cosmos-ai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#dbb979] flex-shrink-0" />
                <span className="text-white/80">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#dbb979] flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#dbb979]/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Cosmos. Tous droits réservés. L'empire de l'intelligence artificielle.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/60 hover:text-[#dbb979] text-sm transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-white/60 hover:text-[#dbb979] text-sm transition-colors duration-300">
                Conditions d'Utilisation
              </a>
              <button
                onClick={scrollToTop}
                className="text-white/60 hover:text-[#dbb979] text-sm transition-colors duration-300"
              >
                Retour en haut ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;