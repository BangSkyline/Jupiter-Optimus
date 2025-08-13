import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Clock, Send, Crown } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { mockContactSubmission } from "../mock/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await mockContactSubmission(formData);
      if (result.success) {
        toast({
          title: "Message envoyé!",
          description: "Nous vous recontacterons sous 24h.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          service: ""
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white/40 to-[#e6e6e6]/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#461044] mb-6">
            Rejoignez l'Elite Digitale
          </h2>
          <p className="text-xl text-[#461044]/80 max-w-3xl mx-auto leading-relaxed">
            Prêt à transformer votre entreprise ? Contactez nos experts 
            pour une consultation personnalisée gratuite
          </p>
          <div className="w-24 h-1 bg-[#dbb979] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#dbb979]/30 shadow-2xl">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-[#461044] rounded-lg">
                  <Crown className="w-6 h-6 text-[#ffdb8d]" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#461044]">
                  Consultation Gratuite
                </CardTitle>
              </div>
              <CardDescription className="text-[#461044]/70">
                Décrivez votre projet et recevez une stratégie personnalisée sous 24h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#461044] font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-[#dbb979]/30 focus:border-[#dbb979] focus:ring-[#dbb979]/20"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#461044] font-medium">
                      Email professionnel *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-[#dbb979]/30 focus:border-[#dbb979] focus:ring-[#dbb979]/20"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#461044] font-medium">
                    Entreprise
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-[#dbb979]/30 focus:border-[#dbb979] focus:ring-[#dbb979]/20"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-[#461044] font-medium">
                    Service d'intérêt
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#dbb979]/30 rounded-md focus:border-[#dbb979] focus:ring-[#dbb979]/20 focus:outline-none"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="ia-conseil">Conseil IA</option>
                    <option value="bdd">Gestion BDD</option>
                    <option value="serveurs">Maintenance Serveurs</option>
                    <option value="dev-ia">Développement IA</option>
                    <option value="automatisation">Automatisation Agentique</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#461044] font-medium">
                    Décrivez votre projet *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="border-[#dbb979]/30 focus:border-[#dbb979] focus:ring-[#dbb979]/20"
                    placeholder="Décrivez vos besoins, objectifs et défis actuels..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#461044] hover:bg-[#461044]/90 text-[#ffdb8d] font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Demander une Consultation
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-[#461044]/95 backdrop-blur-sm border-2 border-[#dbb979]/30 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#ffdb8d] mb-6">
                  Informations de Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#dbb979]/20 rounded-lg">
                      <Mail className="w-6 h-6 text-[#dbb979]" />
                    </div>
                    <div>
                      <p className="text-[#ffdb8d] font-medium">Email</p>
                      <p className="text-white/90">contact@cosmos-ai.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#dbb979]/20 rounded-lg">
                      <Phone className="w-6 h-6 text-[#dbb979]" />
                    </div>
                    <div>
                      <p className="text-[#ffdb8d] font-medium">Téléphone</p>
                      <p className="text-white/90">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#dbb979]/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#dbb979]" />
                    </div>
                    <div>
                      <p className="text-[#ffdb8d] font-medium">Adresse</p>
                      <p className="text-white/90">123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#dbb979]/20 rounded-lg">
                      <Clock className="w-6 h-6 text-[#dbb979]" />
                    </div>
                    <div>
                      <p className="text-[#ffdb8d] font-medium">Horaires</p>
                      <p className="text-white/90">Lun-Ven: 9h-18h<br />Support 24/7 disponible</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#dbb979]/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#461044] mb-4">
                  Pourquoi Choisir Cosmos ?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-[#dbb979] text-[#461044]">✓</Badge>
                    <span className="text-[#461044]/80">Expertise reconnue en IA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-[#dbb979] text-[#461044]">✓</Badge>
                    <span className="text-[#461044]/80">Solutions sur mesure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-[#dbb979] text-[#461044]">✓</Badge>
                    <span className="text-[#461044]/80">Support premium 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-[#dbb979] text-[#461044]">✓</Badge>
                    <span className="text-[#461044]/80">ROI garanti</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;