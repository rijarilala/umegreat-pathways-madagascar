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
              <Link to="/eligibility" onClick={() => window.scrollTo(0, 0)}>
                Testez votre éligibilité <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contactez-nous</Link>
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
              Trois piliers d'excellence pour votre développement professionnel et personnel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
                        <span className="text-sm">Conseil et audit RH</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Coaching management et leadership</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Conseil en orientation professionnelle</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Optimisation des processus RH</span>
                      </li>
                    </ul>
                    <Button variant="default" asChild>
                      <Link to="/ressources-humaines" onClick={() => window.scrollTo(0, 0)}>En savoir plus</Link>
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
                      <Link to="/eligibility" onClick={() => window.scrollTo(0, 0)}>Tester maintenant</Link>
                    </Button>
                  </CardContent>
                </div>
                <div className="md:w-1/3">
                  <img src={canadaImage} alt="Immigration Canada" className="w-full h-full object-cover" />
                </div>
              </div>
            </Card>

            {/* Formations Card */}
            <Card className="relative overflow-hidden border-primary/20 hover:shadow-elegant transition-all duration-300">
              <div className="absolute top-0 right-0 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-bl-lg">
                <span className="text-sm font-semibold">Point Fort</span>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <BookOpen className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl">Formations Professionnelles</CardTitle>
                    </div>
                    <CardDescription>
                      Développement des compétences pour votre réussite professionnelle
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">CV et lettres de motivation impactants</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Optimisation LinkedIn et recherche d'emploi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Transition vers la vie active</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm">Gestion des ressources humaines</span>
                      </li>
                    </ul>
                    <Button variant="default" asChild>
                      <Link to="/formations" onClick={() => window.scrollTo(0, 0)}>Découvrir nos formations</Link>
                    </Button>
                  </CardContent>
                </div>
                <div className="md:w-1/3">
                  <img src={hrImage} alt="Formations professionnelles" className="w-full h-full object-cover" />
                </div>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* Section Packs de Formation */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          {/* Accroche professionnelle */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white/90 mb-4">
              💡 Formations d'Excellence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Investissez dans votre avenir professionnel</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-white/95 font-medium">
                Nos packs de formation sont conçus par des experts pour transformer votre potentiel en succès concret.
              </p>
              <p className="text-lg text-white/80">
                Que vous soyez en recherche d'emploi, en reconversion ou souhaitiez évoluer en RH, 
                nos programmes personnalisés vous donnent les clés pour atteindre vos objectifs professionnels.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/90">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-accent" />
                  <span>Approche pratique et opérationnelle</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-accent" />
                  <span>Suivi personnalisé inclus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-accent" />
                  <span>Résultats garantis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pack Réussite */}
            <Card className="bg-white/95 border-white/20 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Pack Populaire
                  </div>
                  <Award className="text-accent" size={24} />
                </div>
                <CardTitle className="text-2xl text-primary">Pack Réussite</CardTitle>
                <CardDescription className="text-muted-foreground">
                  L'essentiel pour décrocher votre emploi idéal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    <span className="text-foreground">Formation CV Impactant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    <span className="text-foreground">Lettre de motivation efficace</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    <span className="text-foreground">Préparation entretien d'embauche</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    <span className="text-foreground">Suivi personnalisé 3 mois</span>
                  </li>
                </ul>
                <div className="space-y-3">
                  <Button variant="default" className="w-full" size="lg" asChild>
                    <Link to="/formations#packs" onClick={() => window.scrollTo(0, 0)}>
                      En savoir plus <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                      S'inscrire maintenant
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pack Formation RH */}
            <Card className="bg-white/95 border-white/20 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Pack Expert
                  </div>
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl text-primary">Pack Formation RH</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Formation complète pour les professionnels RH
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Formation GRH complète</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Outils RH pratiques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Coaching management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">Certification professionnelle</span>
                  </li>
                </ul>
                <div className="space-y-3">
                  <Button variant="default" className="w-full" size="lg" asChild>
                    <Link to="/formations#packs" onClick={() => window.scrollTo(0, 0)}>
                      Découvrir le pack <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                      Demander un devis
                    </Link>
                  </Button>
                </div>
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

      {/* Section Démarche vers le Canada */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Démarche vers le Canada</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trois étapes clés pour concrétiser votre projet d'immigration, regroupement familial ou études au Canada
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Étape 1 */}
              <Card className="relative border-primary/20 hover:shadow-elegant transition-all duration-300">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <CardHeader className="pt-8">
                  <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                    <Users className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl text-center">Séance d'information</CardTitle>
                  <CardDescription className="text-center">
                    Présentation des grandes lignes et critères de base
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li>• Informations générales sur le Canada</li>
                    <li>• Évaluation rapide de vos besoins</li>
                    <li>• Présentation des grandes étapes</li>
                    <li>• Clarification de votre projet</li>
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                      Réservez votre séance
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Étape 2 */}
              <Card className="relative border-accent/20 hover:shadow-elegant transition-all duration-300">
                <div className="absolute -top-4 left-6 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <CardHeader className="pt-8">
                  <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                    <BookOpen className="text-accent" size={32} />
                  </div>
                  <CardTitle className="text-xl text-center">Élaboration du plan</CardTitle>
                  <CardDescription className="text-center">
                    Stratégie personnalisée (Business Plan)
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li>• Analyse de votre situation actuelle</li>
                    <li>• Définition des objectifs précis</li>
                    <li>• Plan d'action structuré</li>
                    <li>• Timeline personnalisée</li>
                  </ul>
                  <Button variant="accent" className="w-full" asChild>
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                      Élaborez votre plan
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Étape 3 */}
              <Card className="relative border-secondary/20 hover:shadow-elegant transition-all duration-300">
                <div className="absolute -top-4 left-6 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <CardHeader className="pt-8">
                  <div className="bg-secondary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                    <ArrowRight className="text-secondary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-xl text-center">Action / Mise en œuvre</CardTitle>
                  <CardDescription className="text-center">
                    Passage à l'action concrète
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li>• Assistance démarches administratives</li>
                    <li>• Suivi personnalisé continu</li>
                    <li>• Conseils pratiques d'installation</li>
                    <li>• Support jusqu'à l'intégration</li>
                  </ul>
                  <Button variant="default" className="w-full" asChild>
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                      Passez à l'action
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Services applicables */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">Cette démarche s'applique à :</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/immigration-permanente" onClick={() => window.scrollTo(0, 0)}>
                    Immigration Permanente
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/regroupement-familial" onClick={() => window.scrollTo(0, 0)}>
                    Regroupement Familial
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/etudes-canada" onClick={() => window.scrollTo(0, 0)}>
                    Études au Canada
                  </Link>
                </Button>
              </div>
            </div>
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
              <Link to="/eligibility" onClick={() => window.scrollTo(0, 0)}>
                Test d'éligibilité gratuit <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;