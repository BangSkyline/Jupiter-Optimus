import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Brain, Database, Server, Code, Bot, Star, CheckCircle } from "lucide-react";
import { mockServices } from "../mock/data";

const Services = () => {
  const getIcon = (iconName) => {
    const icons = {
      brain: Brain,
      database: Database,
      server: Server,
      code: Code,
      robot: Bot
    };
    const IconComponent = icons[iconName] || Star;
    return <IconComponent className="w-8 h-8" />;
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#461044] mb-6">
            Services d'Excellence
          </h2>
          <p className="text-xl text-[#461044]/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services premium, 
            conçus pour propulser votre entreprise vers l'avenir digital
          </p>
          <div className="w-24 h-1 bg-[#dbb979] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.map((service, index) => (
            <Card 
              key={service.id}
              className="bg-white/80 backdrop-blur-sm border-2 border-[#dbb979]/30 hover:border-[#dbb979] transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2 group overflow-hidden"
            >
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#461044]/10 rounded-lg text-[#461044] group-hover:bg-[#461044] group-hover:text-[#ffdb8d] transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <Badge className="bg-[#dbb979] text-[#461044] font-bold text-lg px-3 py-1">
                    {service.hourlyRate}€/h
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-[#461044] leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-[#461044]/70 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#dbb979] flex-shrink-0" />
                      <span className="text-[#461044]/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-[#461044] hover:bg-[#461044]/90 text-[#ffdb8d] font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Réserver une Consultation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#461044]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#dbb979]/30">
            <h3 className="text-2xl font-bold text-[#461044] mb-4">
              Tarification Flexible
            </h3>
            <p className="text-[#461044]/80 mb-6 max-w-2xl mx-auto">
              Nos tarifs sont facturés à l'heure pour une transparence totale. 
              Packages sur mesure disponibles pour les projets d'envergure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-[#dbb979] text-[#461044] px-4 py-2">
                Facturation transparente
              </Badge>
              <Badge variant="outline" className="border-[#dbb979] text-[#461044] px-4 py-2">
                Sans engagement
              </Badge>
              <Badge variant="outline" className="border-[#dbb979] text-[#461044] px-4 py-2">
                Support inclus
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;