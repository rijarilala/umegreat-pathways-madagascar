import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Globe, 
  BookOpen, 
  GraduationCap, 
  UserCheck, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Briefcase,
  FileText
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Users,
      title: "Ressources Humaines",
      subtitle: "Notre expertise phare",
      description: "Solutions complètes en gestion des ressources humaines pour les entreprises et les professionnels.",
      featured: true,
      services: [
        "Formations en GRH (recrutement, évaluation, GPEC)",
        "Conseil en organisation et gestion RH",
        "Coaching en management et leadership",
        "Audit RH et optimisation des processus",
        "Fidélisation et développement des talents"
      ],
      cta: "Optimiser votre gestion RH"
    },
    {
      icon: Globe,
      title: "Immigration au Canada",
      subtitle: "Votre projet, notre expertise",
      description: "Accompagnement complet pour votre installation durable au Canada avec votre famille.",
      featured: true,
      services: [
        "Évaluation d'éligibilité personnalisée",
        "Regroupement familial",
        "Installation avec recherche d'emploi",
        "Accompagnement administratif complet",
        "Suivi post-installation"
      ],
      cta: "Testez votre éligibilité"
    }
  ];

  const additionalServices = [
    {
      icon: BookOpen,
      title: "Conseil & Orientation professionnelle",
      description: "Clarifiez vos objectifs et optimisez votre parcours professionnel.",
      services: [
        "Bilan de compétences approfondi",
        "Coaching carrière et reconversion",
        "Préparation aux entretiens d'embauche",
        "Stratégie de développement professionnel"
      ]
    },
    {
      icon: GraduationCap,
      title: "Formations professionnelles",
      description: "Développez vos compétences pour réussir sur le marché du travail.",
      services: [
        "Techniques de rédaction CV et lettre de motivation",
        "Méthodes de recherche d'emploi efficaces",
        "Transition vers la vie active",
        "Création et optimisation de profil LinkedIn"
      ]
    },
    {
      icon: UserCheck,
      title: "Recrutement (Prochainement)",
      description: "Services de recrutement national et international pour entreprises et candidats.",
      services: [
        "Recrutement sur mesure pour entreprises",
        "Chasse de têtes spécialisée",
        "Opportunités locales et internationales",
        "Évaluation et sélection de candidats"
      ],
      comingSoon: true
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation initiale",
      description: "Analyse de vos besoins et définition d'un plan d'action personnalisé"
    },
    {
      number: "02", 
      title: "Accompagnement",
      description: "Mise en œuvre des solutions avec un suivi régulier et des ajustements"
    },
    {
      number: "03",
      title: "Résultats",
      description: "Atteinte de vos objectifs avec un suivi à long terme"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Des solutions sur mesure pour votre développement professionnel et vos projets d'immigration.
            </p>
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos domaines d'excellence</h2>
            <p className="text-xl text-muted-foreground">
              Deux piliers d'expertise pour votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="relative overflow-hidden border-primary/20 hover:shadow-elegant transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Star size={12} className="mr-1" />
                    {service.subtitle}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={index === 0 ? "default" : "accent"} className="w-full" asChild>
                    <Link to={index === 1 ? "/eligibility" : "/contact"}>
                      {service.cta} <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services complémentaires */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services complémentaires</h2>
            <p className="text-xl text-muted-foreground">
              Un écosystème complet pour votre développement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className={`hover:shadow-md transition-all duration-300 ${service.comingSoon ? 'opacity-75' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-secondary p-3 rounded-lg">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    {service.comingSoon && (
                      <Badge variant="outline" className="text-xs">
                        Bientôt
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-muted-foreground text-sm">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre méthode d'accompagnement</h2>
            <p className="text-xl text-muted-foreground">
              Un processus éprouvé en 3 étapes pour votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Commencez votre projet dès aujourd'hui
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Que votre objectif soit le développement RH ou l'immigration au Canada, 
            nous avons les solutions adaptées à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/eligibility">
                Test d'éligibilité immigration <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Consultation RH</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;