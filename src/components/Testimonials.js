import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote } from "lucide-react";
import { mockTestimonials } from "../mock/data";

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-20 bg-gradient-to-b from-[#ffdb8d]/30 to-white/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#461044] mb-6">
            Témoignages d'Excellence
          </h2>
          <p className="text-xl text-[#461044]/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment Cosmos a transformé les entreprises de nos clients 
            avec la puissance de l'intelligence artificielle
          </p>
          <div className="w-24 h-1 bg-[#dbb979] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-white/90 backdrop-blur-sm border-2 border-[#dbb979]/30 hover:border-[#dbb979] transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2 relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-[#461044]" />
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#dbb979] text-[#dbb979]" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-[#461044]/80 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 border-2 border-[#dbb979]/30">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-[#461044] text-[#ffdb8d]">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#461044]">{testimonial.name}</p>
                    <p className="text-sm text-[#461044]/70">{testimonial.position}</p>
                    <p className="text-sm text-[#dbb979] font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-[#461044]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#dbb979]/30">
            <h3 className="text-2xl font-bold text-[#461044] mb-6">
              La Confiance de nos Clients
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#dbb979] mb-2">100+</div>
                <p className="text-[#461044]/80">Projets Réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#dbb979] mb-2">98%</div>
                <p className="text-[#461044]/80">Satisfaction Client</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#dbb979] mb-2">24/7</div>
                <p className="text-[#461044]/80">Support Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;