import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";
import { Calculator, TrendingUp, DollarSign, Clock, Users, Zap, Crown } from "lucide-react";

const ROISimulator = () => {
  const [inputs, setInputs] = useState({
    employees: 50,
    monthlyRevenue: 100000,
    currentITCosts: 15000,
    timeSpentOnManualTasks: 20,
    dataProcessingHours: 40
  });

  const [results, setResults] = useState({
    monthlySavings: 0,
    yearlyROI: 0,
    timeRecovered: 0,
    productivityGain: 0,
    breakEvenMonths: 0
  });

  // Calcul automatique du ROI
  useEffect(() => {
    const calculateROI = () => {
      // Estimations basées sur des données réelles du marché IA
      const automationSavings = inputs.employees * inputs.timeSpentOnManualTasks * 25; // 25€/heure économisée
      const dataProcessingSavings = inputs.dataProcessingHours * 60; // 60€/heure optimisation data
      const efficiencyGain = inputs.monthlyRevenue * 0.15; // 15% d'amélioration efficacité
      const itOptimization = inputs.currentITCosts * 0.25; // 25% réduction coûts IT
      
      const totalMonthlySavings = automationSavings + dataProcessingSavings + efficiencyGain + itOptimization;
      const yearlyROI = (totalMonthlySavings * 12) / (inputs.currentITCosts * 12) * 100;
      const timeRecovered = inputs.employees * inputs.timeSpentOnManualTasks * 0.7; // 70% du temps récupéré
      const productivityGain = (totalMonthlySavings / inputs.monthlyRevenue) * 100;
      const investmentCost = inputs.employees * 200; // Coût d'implémentation estimé
      const breakEvenMonths = investmentCost / totalMonthlySavings;

      setResults({
        monthlySavings: Math.round(totalMonthlySavings),
        yearlyROI: Math.round(yearlyROI),
        timeRecovered: Math.round(timeRecovered),
        productivityGain: Math.round(productivityGain * 10) / 10,
        breakEvenMonths: Math.round(breakEvenMonths * 10) / 10
      });
    };

    calculateROI();
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: Array.isArray(value) ? value[0] : parseInt(value) || 0
    }));
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#ffdb8d]/20 to-[#e6e6e6]/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 border-4 border-[#dbb979] rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#461044] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#461044]/20 backdrop-blur-sm rounded-full border border-[#dbb979]/30">
              <Calculator className="w-12 h-12 text-[#dbb979]" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#461044] mb-6">
            Simulateur de ROI Imperial
          </h2>
          <p className="text-xl text-[#461044]/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez combien votre entreprise pourrait économiser et gagner 
            en adoptant nos solutions d'intelligence artificielle
          </p>
          <div className="w-24 h-1 bg-[#dbb979] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs Section */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#dbb979]/30 shadow-2xl">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-[#461044] rounded-lg">
                  <Users className="w-6 h-6 text-[#ffdb8d]" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#461044]">
                  Paramètres de votre Entreprise
                </CardTitle>
              </div>
              <CardDescription className="text-[#461044]/70">
                Ajustez les paramètres selon votre situation actuelle
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Nombre d'employés */}
              <div className="space-y-3">
                <Label className="text-[#461044] font-semibold flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Nombre d'employés: {inputs.employees}</span>
                </Label>
                <Slider
                  value={[inputs.employees]}
                  onValueChange={(value) => handleInputChange('employees', value)}
                  max={500}
                  min={10}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-[#461044]/60">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              {/* Chiffre d'affaires mensuel */}
              <div className="space-y-3">
                <Label htmlFor="revenue" className="text-[#461044] font-semibold flex items-center space-x-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Chiffre d'affaires mensuel (€)</span>
                </Label>
                <Input
                  id="revenue"
                  type="number" 
                  value={inputs.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                  className="border-[#dbb979]/30 focus:border-[#dbb979]"
                  placeholder="100000"
                />
              </div>

              {/* Coûts IT actuels */}
              <div className="space-y-3">
                <Label htmlFor="itCosts" className="text-[#461044] font-semibold">
                  Coûts IT mensuels actuels (€)
                </Label>
                <Input
                  id="itCosts"
                  type="number"
                  value={inputs.currentITCosts}
                  onChange={(e) => handleInputChange('currentITCosts', e.target.value)}
                  className="border-[#dbb979]/30 focus:border-[#dbb979]"
                  placeholder="15000"
                />
              </div>

              {/* Temps tâches manuelles */}
              <div className="space-y-3">
                <Label className="text-[#461044] font-semibold flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Heures/semaine tâches manuelles par employé: {inputs.timeSpentOnManualTasks}h</span>
                </Label>
                <Slider
                  value={[inputs.timeSpentOnManualTasks]}
                  onValueChange={(value) => handleInputChange('timeSpentOnManualTasks', value)}
                  max={40}
                  min={5}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-[#461044]/60">
                  <span>5h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Heures traitement données */}
              <div className="space-y-3">
                <Label className="text-[#461044] font-semibold flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Heures/semaine traitement données: {inputs.dataProcessingHours}h</span>
                </Label>
                <Slider
                  value={[inputs.dataProcessingHours]}
                  onValueChange={(value) => handleInputChange('dataProcessingHours', value)}
                  max={80}
                  min={10}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-[#461044]/60">
                  <span>10h</span>
                  <span>80h</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Main ROI Card */}
            <Card className="bg-[#461044]/95 backdrop-blur-sm border-2 border-[#dbb979]/30 text-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Crown className="w-8 h-8 text-[#dbb979]" />
                  <h3 className="text-2xl font-bold text-[#ffdb8d]">
                    Résultats de la Simulation
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-[#dbb979]/20 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-[#dbb979] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-[#dbb979] mb-1">
                      {formatNumber(results.monthlySavings)}€
                    </div>
                    <p className="text-white/80 text-sm">Économies mensuelles</p>
                  </div>

                  <div className="text-center p-4 bg-[#dbb979]/20 rounded-lg">
                    <DollarSign className="w-8 h-8 text-[#dbb979] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-[#dbb979] mb-1">
                      {results.yearlyROI}%
                    </div>
                    <p className="text-white/80 text-sm">ROI annuel</p>
                  </div>

                  <div className="text-center p-4 bg-[#dbb979]/20 rounded-lg">
                    <Clock className="w-8 h-8 text-[#dbb979] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-[#dbb979] mb-1">
                      {formatNumber(results.timeRecovered)}h
                    </div>
                    <p className="text-white/80 text-sm">Temps récupéré/mois</p>
                  </div>

                  <div className="text-center p-4 bg-[#dbb979]/20 rounded-lg">
                    <Zap className="w-8 h-8 text-[#dbb979] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-[#dbb979] mb-1">
                      {results.productivityGain}%
                    </div>
                    <p className="text-white/80 text-sm">Gain productivité</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#ffdb8d]/20 rounded-lg text-center">
                  <p className="text-[#ffdb8d] font-semibold mb-1">
                    Retour sur investissement en
                  </p>
                  <div className="text-2xl font-bold text-[#dbb979]">
                    {results.breakEvenMonths} mois
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Breakdown */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#dbb979]/30">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-[#461044] mb-4">
                  Répartition des Bénéfices
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#ffdb8d]/20 rounded-lg">
                    <span className="text-[#461044] font-medium">Automatisation des tâches</span>
                    <Badge className="bg-[#dbb979] text-[#461044]">
                      {formatNumber(inputs.employees * inputs.timeSpentOnManualTasks * 25)}€/mois
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#ffdb8d]/20 rounded-lg">
                    <span className="text-[#461044] font-medium">Optimisation traitement données</span>
                    <Badge className="bg-[#dbb979] text-[#461044]">
                      {formatNumber(inputs.dataProcessingHours * 60)}€/mois
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#ffdb8d]/20 rounded-lg">
                    <span className="text-[#461044] font-medium">Gain d'efficacité générale</span>
                    <Badge className="bg-[#dbb979] text-[#461044]">
                      {formatNumber(inputs.monthlyRevenue * 0.15)}€/mois
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#ffdb8d]/20 rounded-lg">
                    <span className="text-[#461044] font-medium">Réduction coûts IT</span>
                    <Badge className="bg-[#dbb979] text-[#461044]">
                      {formatNumber(inputs.currentITCosts * 0.25)}€/mois
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-[#dbb979]/20 to-[#ffdb8d]/20 border-2 border-[#dbb979]/30">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-[#461044] mb-3">
                  Prêt à Concrétiser ces Résultats ?
                </h4>
                <p className="text-[#461044]/80 mb-4">
                  Nos experts vous accompagnent pour transformer ces projections en réalité
                </p>
                <Button
                  onClick={scrollToContact}
                  className="bg-[#461044] hover:bg-[#461044]/90 text-[#ffdb8d] font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Obtenir une Analyse Détaillée
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-[#461044]/60 text-sm max-w-3xl mx-auto">
            * Les résultats sont des estimations basées sur des études de cas réels et peuvent varier selon votre secteur d'activité. 
            Une analyse personnalisée gratuite vous donnera des chiffres précis pour votre entreprise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISimulator;