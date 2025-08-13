export const mockServices = [
  {
    id: 1,
    title: "Conseil en Intelligence Artificielle",
    description: "Stratégie IA personnalisée, audit de faisabilité et roadmap d'implémentation pour votre transformation digitale.",
    hourlyRate: 150,
    icon: "brain",
    features: ["Audit IA complet", "Stratégie sur mesure", "Formation équipes", "ROI garanti"]
  },
  {
    id: 2,
    title: "Gestion de Bases de Données",
    description: "Optimisation, migration et administration de vos systèmes de données pour des performances maximales.",
    hourlyRate: 120,
    icon: "database",
    features: ["Optimisation requêtes", "Migration sécurisée", "Monitoring 24/7", "Backup automatisé"]
  },
  {
    id: 3,
    title: "Maintenance Serveurs",
    description: "Surveillance proactive et maintenance préventive de votre infrastructure critique.",
    hourlyRate: 100,
    icon: "server",
    features: ["Monitoring temps réel", "Mise à jour sécurisée", "Support 24/7", "Rapport mensuel"]
  },
  {
    id: 4,
    title: "Développement Applications IA",
    description: "Création d'applications intelligentes intégrant machine learning et traitement automatisé.",
    hourlyRate: 180,
    icon: "code",
    features: ["ML personnalisé", "API intelligentes", "Interface intuitive", "Évolutivité garantie"]
  },
  {
    id: 5,
    title: "Automatisation Agentique",
    description: "Déploiement d'agents autonomes pour automatiser vos processus métier complexes.",
    hourlyRate: 200,
    icon: "robot",
    features: ["Agents autonomes", "Workflow intelligent", "Intégration système", "Apprentissage continu"]
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Marcus Aurelius",
    company: "Tech Imperium",
    position: "CEO",
    content: "Cosmos a révolutionné notre infrastructure avec une approche digne des plus grands stratèges. Leur expertise en IA nous a propulsés vers de nouveaux sommets.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Claudia Maxima",
    company: "DataForge Solutions",
    position: "CTO",
    content: "L'automatisation agentique de Cosmos a transformé nos processus. Efficacité, précision et innovation - tout ce qu'on attend d'un partenaire d'exception.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Julius Caesar",
    company: "Empire Analytics",
    position: "Directeur Innovation",
    content: "Veni, vidi, vici - c'est exactement ce que Cosmos a fait avec notre transformation digitale. Résultats spectaculaires en temps record.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

export const mockContactSubmission = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock form submission:", formData);
      resolve({ success: true, message: "Message envoyé avec succès!" });
    }, 1000);
  });
};