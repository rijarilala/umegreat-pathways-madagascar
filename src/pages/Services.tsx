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
  Search,
  RefreshCw,
  Handshake,
  Plane
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Recrutement",
      subtitle: "De la CV à l'offre d'emploi",
      description: "Nous accompagnons les candidats de la rédaction de leur CV et lettre de motivation jusqu'à la réussite de l'entretien, en passant par des simulations sur-mesure. Nous assurons également la recherche ciblée d'offres locales et internationales.",
      services: [
        "Rédaction et optimisation du CV & Lettre de motivation",
        "Préparation aux entretiens avec simulation personnalisée",
        "Recherche d'emploi ciblée (local & international)",
        "Coaching individualisé pour maximiser vos chances"
      ],
      cta: "🔎 Découvrir notre méthode",
      ctaLink: "/contact",
      keywords: ["CV", "lettre de motivation", "entretien", "emploi"]
    },
    {
      icon: GraduationCap,
      title: "Formation Modulaire Professionnalisante",
      subtitle: "Attestation reconnue à la clé",
      description: "Nos formations, courtes et ciblées, délivrent une attestation reconnue à la fin de chaque module. Au programme : CV impactant, recherche d'emploi efficace, transition vers la vie active, GRH, comptabilité pratique et optimisation du profil LinkedIn.",
      services: [
        "CV impactant et lettre de motivation percutante",
        "Techniques de recherche d'emploi efficace",
        "Transition réussie vers la vie active",
        "Gestion des Ressources Humaines (GRH)",
        "Optimisation de profil LinkedIn professionnel"
      ],
      cta: "📚 Réserver votre place",
      ctaLink: "/formations",
      keywords: ["formation", "attestation", "compétences", "LinkedIn"]
    },
    {
      icon: RefreshCw,
      title: "Orientation & Reconversion Professionnelle",
      subtitle: "Trouvez votre voie idéale",
      description: "Nous réalisons un bilan de compétences complet afin d'identifier le métier qui correspond le mieux à vos aspirations et à votre profil. Vous bénéficiez d'un accompagnement personnalisé, de la sélection de formations adéquates et d'une stratégie de transition réussie.",
      services: [
        "Bilan de compétences approfondi",
        "Orientation métier personnalisée",
        "Sélection de formations adaptées à vos objectifs",
        "Stratégie de transition professionnelle"
      ],
      cta: "🔄 Planifier votre reconversion",
      ctaLink: "/conseil-orientation",
      keywords: ["bilan de compétences", "orientation", "reconversion"]
    },
    {
      icon: Handshake,
      title: "Conseil & Coaching",
      subtitle: "Expertise RH et accompagnement études",
      description: "Nous proposons un accompagnement complet pour étudier à l'étranger, depuis la préparation du dossier jusqu'à l'intégration. Nos experts en RH vous conseillent sur le Code du travail, les décrets assimilés, la gestion disciplinaire et élaborent des règlements intérieurs, ainsi que des audits organisationnels et de paie.",
      services: [
        "Études à l'étranger (préparation → intégration)",
        "Conseil RH (Code du travail, décrets, gestion disciplinaire)",
        "Coaching d'entreprise (audit organisationnel, règlement intérieur)",
        "Assistance aux déclarations légales (IRSA, OSTIE/SMIMO, CNAPS/FMFP)"
      ],
      cta: "🤝 Demander un audit gratuit",
      ctaLink: "/contact",
      keywords: ["conseil RH", "coaching", "audit", "Code du travail"]
    },
    {
      icon: Plane,
      title: "Immigration",
      subtitle: "Votre parcours vers le Canada",
      description: "Notre service « Votre parcours vers le Canada » comprend une séance d'information pour explorer les programmes d'immigration, un business plan personnalisé aligné à vos objectifs, et un accompagnement complet : recherche d'emploi, démarches administratives et installation au Canada.",
      services: [
        "Séance d'information sur les programmes d'immigration",
        "Business plan personnalisé aligné à vos objectifs",
        "Accompagnement complet (emploi → installation)",
        "Suivi des démarches administratives"
      ],
      cta: "🍁 Commencer votre aventure canadienne",
      ctaLink: "/eligibility",
      keywords: ["immigration", "Canada", "emploi", "installation"],
      featured: true
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
    <>
      <Helmet>
        <title>Nos Services - Recrutement, Formation, Immigration | UMEGREAT PRO</title>
        <meta name="description" content="Découvrez nos services de recrutement, formation, reconversion, conseil & immigration. Accompagnement complet vers le succès professionnel et l'immigration au Canada." />
        <meta name="keywords" content="recrutement, formation professionnelle, orientation carrière, conseil RH, immigration Canada, accompagnement candidat" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="space-y-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Services
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Accompagnement 360° vers votre réussite professionnelle et votre projet d'immigration
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos domaines d'expertise</h2>
              <p className="text-xl text-muted-foreground">
                Cinq piliers pour votre développement professionnel et personnel
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden border-border hover:shadow-elegant transition-all duration-300 ${
                    service.featured ? 'ring-2 ring-accent' : ''
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Left Section - Icon and Title */}
                    <CardHeader className="bg-secondary/30 lg:border-r border-border flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <service.icon className="text-primary" size={32} />
                        </div>
                        {service.featured && (
                          <Badge variant="default" className="bg-accent text-accent-foreground">
                            <Star size={12} className="mr-1" />
                            Populaire
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        <h3>{service.title}</h3>
                      </CardTitle>
                      <h4 className="text-lg text-muted-foreground font-medium">
                        {service.subtitle}
                      </h4>
                    </CardHeader>

                    {/* Right Section - Content */}
                    <CardContent className="lg:col-span-2 p-6 lg:p-8">
                      <CardDescription className="text-base mb-6 leading-relaxed">
                        {service.description.split(' ').map((word, i) => {
                          const isKeyword = service.keywords.some(kw => 
                            word.toLowerCase().includes(kw.toLowerCase())
                          );
                          return isKeyword ? (
                            <strong key={i} className="text-foreground">{word} </strong>
                          ) : (
                            <span key={i}>{word} </span>
                          );
                        })}
                      </CardDescription>

                      <ul className="space-y-3 mb-6">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        variant={service.featured ? "accent" : "default"} 
                        size="lg"
                        asChild
                      >
                        <Link to={service.ctaLink}>
                          {service.cta} <ArrowRight className="ml-2" size={16} />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Notre processus */}
        <section className="py-20 bg-secondary/30">
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
              Que votre objectif soit le développement RH, la formation ou l'immigration au Canada, 
              nous avons les solutions adaptées à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/eligibility">
                  🍁 Test d'éligibilité immigration <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background hover:text-primary" asChild>
                <Link to="/contact">📞 Consultation gratuite</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
