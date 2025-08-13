import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Crown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#461044]/95 backdrop-blur-md border-b border-[#dbb979]/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Crown className="w-8 h-8 text-[#dbb979]" />
            <span className="text-2xl font-bold text-[#ffdb8d] tracking-wider">
              COSMOS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-[#e6e6e6] hover:text-[#dbb979] transition-colors duration-300 font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#e6e6e6] hover:text-[#dbb979] transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="text-[#e6e6e6] hover:text-[#dbb979] transition-colors duration-300 font-medium"
            >
              Témoignages
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#dbb979] hover:bg-[#ffdb8d] text-[#461044] font-semibold px-6 py-2 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#e6e6e6]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#dbb979]/30 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-[#e6e6e6] hover:text-[#dbb979] transition-colors duration-300 font-medium text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#e6e6e6] hover:text-[#dbb979] transition-colors duration-300 font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("temoignages")}
                className="text-[#e6e6e6] hover:text-[#dbb979] transition-colors duration-300 font-medium text-left"
              >
                Témoignages
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#dbb979] hover:bg-[#ffdb8d] text-[#461044] font-semibold w-fit"
              >
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;