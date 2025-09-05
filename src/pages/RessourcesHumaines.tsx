import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen,
  UserCheck,
  ArrowRight,
  CheckCircle,
  Star,
  Briefcase,
  MessageSquare,
  Award
} from "lucide-react";
import hrHeroImage from "@/assets/hr-consulting.jpg";

const RessourcesHumaines = () => {
  const hrServices = [
    {
      icon: Target,
      title: "Conseil en organisation et gestion RH",
      description: "Optimisez votre structure organisationnelle pour améliorer la performance.",
      details: [
        "Analyse des processus RH existants",
        "Mise en place de solutions adaptées à l'entreprise", 
        "Optimisation de l'organisation et des flux de travail",
        "Définition des rôles et responsabilités"
      ]
    },
    {
      icon: TrendingUp,
      title: "Coaching en management et leadership",
      description: "Développez les compétences de vos managers pour un leadership efficace.",
      details: [
        "Formation des managers et dirigeants",
        "Développement des compétences en leadership",
        "Accompagnement pour améliorer la communication",
        "Gestion d'équipe et motivation du personnel"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Audit RH et optimisation des processus",
      description: "Évaluez et améliorez vos pratiques RH pour plus d'efficacité.",
      details: [
        "Évaluation des pratiques RH existantes",
        "Identification des axes d'amélioration",
        "Mise en œuvre de procédures efficaces et conformes",
        "Conformité légale et réglementaire"
      ]
    },
    {
      icon: Star,
      title: "Fidélisation et développement des talents",
      description: "Retenez vos meilleurs collaborateurs et développez leur potentiel.",
      details: [
        "Stratégies pour motiver et retenir les collaborateurs",
        "Plan de développement des compétences",
        "Programmes de reconnaissance et formation continue",
        "Gestion de carrière et mobilité interne"
      ]
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Expertise professionnelle et personnalisée",
      description: "Solutions sur mesure adaptées à votre secteur d'activité et culture d'entreprise."
    },
    {
      icon: Target,
      title: "Solutions adaptées aux besoins spécifiques",
      description: "Approche personnalisée pour chaque entreprise, quelle que soit sa taille."
    },
    {
      icon: TrendingUp,
      title: "Gain de temps et réduction des risques",
      description: "Optimisation des processus RH et minimisation des risques juridiques et opérationnels."
    },
    {
      icon: Award,
      title: "Accompagnement complet",
      description: "Du recrutement à la fidélisation, nous vous accompagnons à chaque étape de la gestion RH."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hrHeroImage})` }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Briefcase size={16} className="mr-2" />
              Services RH Professionnels
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Services RH : développez et optimisez votre capital humain
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              UMEGREAT PRO accompagne votre entreprise dans la gestion stratégique et opérationnelle des ressources humaines.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contactez-nous dès aujourd'hui <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              L'importance stratégique des Ressources Humaines
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Dans un monde professionnel en constante évolution, la gestion des ressources humaines devient un facteur déterminant de la performance et de la croissance de votre entreprise. 
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Chez <strong>UMEGREAT PRO</strong>, nous mettons notre expertise au service de votre réussite avec un accompagnement personnalisé qui respecte votre culture d'entreprise et vos objectifs stratégiques.
            </p>
          </div>
        </div>
      </section>


      {/* Services Spécialisés Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Services Spécialisés
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez nos activités dédiées pour un accompagnement personnalisé
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Conseil et Orientation Professionnelle */}
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Target className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Conseil et Orientation Professionnelle</CardTitle>
                    <CardDescription>Optimisez vos parcours et carrières</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Accompagnement personnalisé pour l'orientation de carrière, la reconversion professionnelle et le développement professionnel.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Orientation de carrière</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Reconversion professionnelle</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Coaching personnalisé (CV, lettres, entretiens)</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link to="/conseil-orientation">
                    En savoir plus <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Coaching Management */}
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Users className="text-primary" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Coaching RH et Management</CardTitle>
                    <CardDescription>Développez vos compétences de leader</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Formation et accompagnement pour managers, dirigeants et équipes RH pour optimiser les performances.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Coaching en management et leadership</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Coaching RH et optimisation des talents</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Accompagnement au changement</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link to="/coaching-management">
                    En savoir plus <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir UMEGREAT PRO ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Les avantages de notre accompagnement RH
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <advantage.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Parlez à un conseiller RH dès aujourd'hui
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Transformez votre gestion des ressources humaines et optimisez la performance de votre entreprise avec notre expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                <MessageSquare className="mr-2" size={20} />
                Consultation gratuite
              </Link>
            </Button>
            <div className="text-primary-foreground/90">
              <p className="font-semibold">Contact direct :</p>
              <p>+261 37 47 83 198 | umegreatpro@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RessourcesHumaines;