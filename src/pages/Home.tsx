import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Globe, BookOpen, Award, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import hrImage from "@/assets/hr-consulting.jpg";
import canadaImage from "@/assets/canada-immigration.jpg";

const Home = () => {
  const services = [
    {
      icon: Users,
      title: "Ressources Humaines",
      description: "Formations GRH, conseil en gestion RH, coaching management",
      featured: true,
    },
    {
      icon: Globe,
      title: "Immigration Canada",
      description: "Regroupement familial, installation durable avec emploi",
      featured: true,
    },
    {
      icon: BookOpen,
      title: "Conseil & Orientation",
      description: "Bilan de compétences, coaching carrière, préparation entretiens",
      featured: false,
    },
    {
      icon: Award,
      title: "Formations",
      description: "CV, recherche d'emploi, transition professionnelle, LinkedIn",
      featured: false,
    },
  ];

  const testimonials = [
    {
      name: "Marie R.",
      role: "DRH",
      content: "Un accompagnement exceptionnel pour nos formations RH. L'équipe d'UMEGREAT PRO a su adapter les contenus à nos besoins spécifiques.",
    },
    {
      name: "Jean-Claude M.",
      role: "Immigrant au Canada",
      content: "Grâce à UMEGREAT PRO, j'ai pu immigrer au Canada avec ma famille. Un processus bien encadré du début à la fin.",
    },
    {
      name: "Sophie L.",
      role: "Cadre commercial",
      content: "Le coaching carrière m'a permis de clarifier mes objectifs et de décrocher le poste de mes rêves. Merci !",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(33, 66, 134, 0.8), rgba(33, 66, 134, 0.8)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ensemble vers la vie que vous méritez
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Cabinet de conseil spécialisé en Ressources Humaines et Immigration au Canada. 
            Votre réussite professionnelle commence ici.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/eligibility">
                Testez votre éligibilité <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services phares */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos domaines d'expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deux piliers d'excellence pour votre développement professionnel et personnel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* RH Card */}
            <Card className="relative overflow-hidden border-primary/20 hover:shadow-elegant transition-all duration-300">
              <div className="absolute top-0 right-0 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-bl-lg">
                <span className="text-sm font-semibold">Point Fort</span>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Users className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl">Ressources Humaines</CardTitle>
                    </div>
                    <CardDescription>
                      Expertise complète en gestion des ressources humaines
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Formations en GRH</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Conseil en gestion RH</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Coaching management</span>
                      </li>
                    </ul>
                    <Button variant="default" asChild>
                      <Link to="/ressources-humaines">En savoir plus</Link>
                    </Button>
                  </CardContent>
                </div>
                <div className="md:w-1/3">
                  <img src={hrImage} alt="Consultation RH" className="w-full h-full object-cover" />
                </div>
              </div>
            </Card>

            {/* Immigration Card */}
            <Card className="relative overflow-hidden border-primary/20 hover:shadow-elegant transition-all duration-300">
              <div className="absolute top-0 right-0 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-bl-lg">
                <span className="text-sm font-semibold">Point Fort</span>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Globe className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl">Immigration Canada</CardTitle>
                    </div>
                    <CardDescription>
                      Accompagnement complet pour votre projet d'immigration
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Regroupement familial</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Installation avec emploi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Test d'éligibilité gratuit</span>
                      </li>
                    </ul>
                    <Button variant="accent" asChild>
                      <Link to="/eligibility">Tester maintenant</Link>
                    </Button>
                  </CardContent>
                </div>
                <div className="md:w-1/3">
                  <img src={canadaImage} alt="Immigration Canada" className="w-full h-full object-cover" />
                </div>
              </div>
            </Card>
          </div>

          {/* Autres services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.filter(service => !service.featured).map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary p-3 rounded-lg">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={service.title === "Conseil & Orientation" ? "/conseil-orientation" : "/formations"}>
                      Découvrir <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Packs de Formation */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Packs de Formation</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Des formations complètes conçues pour accélérer votre réussite professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pack Réussite */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Pack Populaire
                  </div>
                  <Award className="text-accent" size={24} />
                </div>
                <CardTitle className="text-2xl text-white">Pack Réussite</CardTitle>
                <CardDescription className="text-white/80">
                  L'essentiel pour décrocher votre emploi idéal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-white/90">Formation CV Impactant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-white/90">Lettre de motivation efficace</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-white/90">Préparation entretien d'embauche</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-white/90">Suivi personnalisé 3 mois</span>
                  </li>
                </ul>
                <Button variant="accent" className="w-full" size="lg" asChild>
                  <Link to="/formations">
                    En savoir plus <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pack Formation RH */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Pack Pro
                  </div>
                  <Users className="text-accent" size={24} />
                </div>
                <CardTitle className="text-2xl text-white">Pack Formation RH</CardTitle>
                <CardDescription className="text-white/80">
                  Formation complète pour les professionnels RH
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-white/90">Formation GRH complète</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-white/90">Outils RH pratiques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-white/90">Coaching management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent" />
                    <span className="text-white/90">Certification professionnelle</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full" size="lg" asChild>
                  <Link to="/formations">
                    Découvrir le pack <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-elegant">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Que ce soit pour développer vos compétences RH ou concrétiser votre projet d'immigration, 
            nous sommes là pour vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/eligibility">
                Test d'éligibilité gratuit <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;