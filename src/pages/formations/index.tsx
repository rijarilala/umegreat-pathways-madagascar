import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, MessageSquare, Search, Compass, Linkedin, Briefcase, Clock, Users, ArrowRight, BookOpen, Star, Package, CheckCircle, Target, Zap, Award } from "lucide-react";
const FormationsIndex = () => {
  const formations = [{
    id: "cv-impactant",
    title: "CV Impactant",
    description: "Créez un CV qui vous démarque et maximise vos chances d'obtenir des entretiens",
    icon: FileText,
    duration: "2 jours",
    audience: "Tous niveaux",
    level: "Essentiel",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }, {
    id: "lettre-motivation",
    title: "Lettre de Motivation Convaincante",
    description: "Rédigez des lettres qui captent l'attention et suscitent l'envie de vous rencontrer",
    icon: MessageSquare,
    duration: "1,5 jour",
    audience: "Tous profils",
    level: "Essentiel",
    color: "text-green-600",
    bgColor: "bg-green-50"
  }, {
    id: "recherche-emploi",
    title: "Recherche du Premier ou Nouveau Emploi",
    description: "Maîtrisez toutes les techniques pour décrocher l'emploi qui vous correspond",
    icon: Search,
    duration: "3 jours",
    audience: "Demandeurs d'emploi",
    level: "Complet",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }, {
    id: "transition-vie-active",
    title: "Transition vers la Vie Active",
    description: "Préparez-vous efficacement à intégrer le monde professionnel avec confiance",
    icon: Compass,
    duration: "2,5 jours",
    audience: "Jeunes diplômés",
    level: "Fondamental",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }, {
    id: "linkedin",
    title: "Création et Optimisation LinkedIn",
    description: "Transformez votre profil LinkedIn en véritable outil de réussite professionnelle",
    icon: Linkedin,
    duration: "2 jours",
    audience: "Tous professionnels",
    level: "Digital",
    color: "text-blue-700",
    bgColor: "bg-blue-100"
  }, {
    id: "grh",
    title: "Gestion des Ressources Humaines",
    description: "Développez une expertise complète en GRH pour optimiser la performance de vos équipes",
    icon: Briefcase,
    duration: "5 jours",
    audience: "Managers & RH",
    level: "Expert",
    color: "text-red-600",
    bgColor: "bg-red-50"
  }];
  const stats = [{
    label: "Formations professionnelles",
    value: "6"
  }, {
    label: "Heures de formation",
    value: "100+"
  }, {
    label: "Participants formés",
    value: "500+"
  }, {
    label: "Taux de satisfaction",
    value: "95%"
  }];
  return <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-accent/20 p-4 rounded-full">
                <BookOpen size={48} className="text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Formations Professionnelles
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Développez vos compétences avec nos formations expertes en développement professionnel et ressources humaines
            </p>
            <div className="flex justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Découvrez nos programmes <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      

      {/* Formations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Catalogue de Formations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Du développement personnel aux compétences managériales, nos formations vous accompagnent 
              à chaque étape de votre parcours professionnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map(formation => <Card key={formation.id} className="hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${formation.bgColor}`}>
                      <formation.icon className={`${formation.color}`} size={24} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {formation.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {formation.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {formation.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{formation.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{formation.audience}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/formations/${formation.id}`}>
                      Voir le programme <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Nos Packs de Formation */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Packs de Formation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des programmes complets et optimisés pour maximiser votre réussite professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pack Réussite */}
            <Card className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 group border-2">
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 rounded-bl-lg">
                <span className="text-sm font-semibold">POPULAIRE</span>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-accent to-accent/80 p-4 rounded-xl">
                    <Award size={32} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-accent mb-2">Pack Réussite</CardTitle>
                    <Badge variant="secondary" className="text-xs">CV + Lettre + Entretien</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Package size={20} className="mr-2 text-accent" />
                    Contenu détaillé
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Formation CV Impactant (2 jours)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Formation Lettre de Motivation Convaincante (1,5 jour)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Préparation aux entretiens + simulation (1 jour)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Suivi personnalisé pendant 3 mois</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Target size={20} className="mr-2 text-accent" />
                    Objectif principal
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Maîtriser l'ensemble des outils de candidature pour maximiser vos chances de décrocher l'emploi désiré
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Zap size={20} className="mr-2 text-accent" />
                    Avantages concrets
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• +70% de réponses positives aux candidatures</li>
                    <li>• Confiance renforcée en entretien</li>
                    <li>• Documents professionnels prêts à l'emploi</li>
                    <li>• Économie de 40% vs formations séparées</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white" size="lg" asChild>
                    <Link to="/contact">
                      En savoir plus <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pack Formation RH */}
            <Card className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 group border-2">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-bl-lg">
                <span className="text-sm font-semibold">EXPERT</span>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-xl">
                    <Briefcase size={32} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">Pack Formation RH</CardTitle>
                    <Badge variant="secondary" className="text-xs">Formation + Outils RH</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Package size={20} className="mr-2 text-primary" />
                    Contenu détaillé
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Formation GRH complète (5 jours)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Kit d'outils RH digitaux</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Modèles de documents RH</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Accompagnement mise en pratique (2 mois)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Target size={20} className="mr-2 text-primary" />
                    Objectif principal
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Acquérir une expertise complète en GRH et disposer d'outils pratiques pour optimiser la gestion des équipes
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Zap size={20} className="mr-2 text-primary" />
                    Avantages concrets
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Compétences RH certifiées</li>
                    <li>• Outils prêts à utiliser en entreprise</li>
                    <li>• Réseau professionnel RH</li>
                    <li>• Support technique inclus</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg" asChild>
                    <Link to="/contact">
                      S'inscrire <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Approche Pédagogique</h2>
              <p className="text-xl text-muted-foreground">
                Une méthode éprouvée pour un apprentissage efficace et durable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <Star size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Pratique intensive</h3>
                  <p className="text-muted-foreground">
                    70% de pratique pour une maîtrise concrète des outils et techniques
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <Users size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Groupes restreints</h3>
                  <p className="text-muted-foreground">
                    Maximum 15 participants pour un accompagnement personnalisé optimal
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <BookOpen size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Suivi post-formation</h3>
                  <p className="text-muted-foreground">
                    Accompagnement et conseils après la formation pour consolider les acquis
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à booster votre carrière ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Choisissez la formation qui correspond à vos objectifs et donnez une nouvelle dimension 
            à votre développement professionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Demander un conseil <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Devis personnalisé</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default FormationsIndex;