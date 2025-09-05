import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Target, 
  CheckCircle, 
  Users, 
  Clock, 
  Star,
  ArrowRight 
} from "lucide-react";

const LinkedIn = () => {
  const objectives = [
    "Créer un profil LinkedIn professionnel et attractif",
    "Optimiser votre visibilité pour attirer recruteurs et opportunités",
    "Maîtriser les techniques de networking digital efficace",
    "Utiliser LinkedIn comme outil de veille et de recherche d'emploi",
    "Développer votre personal branding et votre influence professionnelle"
  ];

  const program = [
    {
      title: "Optimisation du profil",
      content: "Photo, titre, résumé, expériences, compétences et recommandations"
    },
    {
      title: "Stratégie de contenu",
      content: "Publications, articles, partages et engagement communautaire"
    },
    {
      title: "Networking stratégique",
      content: "Recherche de contacts, messages personnalisés, groupes professionnels"
    },
    {
      title: "Recherche d'opportunités",
      content: "Veille emploi, candidatures via LinkedIn, approche directe"
    },
    {
      title: "Personal branding",
      content: "Positionnement expert, influence, mesure de performance"
    }
  ];

  const advantages = [
    "Formateurs certifiés LinkedIn et experts en digital",
    "Méthodes actualisées selon les dernières évolutions",
    "Analyse personnalisée de votre profil actuel",
    "Templates et guides pratiques fournis",
    "Suivi des performances post-formation"
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-accent/20 p-4 rounded-full">
                <Linkedin size={48} className="text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formation Création et Optimisation de Compte LinkedIn
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Transformez votre profil LinkedIn en véritable outil de réussite professionnelle
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock size={16} className="mr-2" />
                2 jours pratiques
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users size={16} className="mr-2" />
                Tous professionnels
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">LinkedIn : votre vitrine professionnelle digitale</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Avec plus de 800 millions d'utilisateurs dans le monde, LinkedIn est devenu incontournable 
                  pour votre développement professionnel. Un profil bien optimisé vous permet d'être trouvé 
                  par les recruteurs, de développer votre réseau et de saisir de nouvelles opportunités. 
                  Cette formation vous donne toutes les clés pour faire de LinkedIn un véritable accélérateur 
                  de carrière.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectifs pédagogiques */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Objectifs pédagogiques</h2>
              <p className="text-xl text-muted-foreground">
                À l'issue de cette formation, vous maîtriserez :
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-accent p-2 rounded-full flex-shrink-0 mt-1">
                    <Target size={16} className="text-accent-foreground" />
                  </div>
                  <p className="text-foreground">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme détaillé */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Programme détaillé</h2>
              <p className="text-xl text-muted-foreground">
                Une approche pratique en 5 modules complémentaires
              </p>
            </div>

            <div className="space-y-6">
              {program.map((module, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                        <p className="text-muted-foreground">{module.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Public cible & Modalités */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="text-primary" size={24} />
                    <span>Public cible</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Professionnels tous secteurs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Entrepreneurs et freelances</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Demandeurs d'emploi</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Étudiants et jeunes diplômés</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Cadres en évolution de carrière</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="text-primary" size={24} />
                    <span>Durée & Modalités</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Durée</h4>
                      <p className="text-muted-foreground">2 jours (14 heures de formation)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Format</h4>
                      <p className="text-muted-foreground">Présentiel ou en ligne</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Horaires</h4>
                      <p className="text-muted-foreground">9h00 - 16h00 (avec pauses)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Matériel</h4>
                      <p className="text-muted-foreground">Ordinateur/tablette avec compte LinkedIn</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages UMEGREAT PRO */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">L'expertise UMEGREAT PRO</h2>
              <p className="text-xl text-muted-foreground">
                Une formation LinkedIn nouvelle génération
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Star size={24} className="text-accent" />
                    </div>
                    <p className="font-medium">{advantage}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Boostez votre carrière avec LinkedIn
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Ne passez plus inaperçu. Créez un profil LinkedIn qui attire les opportunités 
            et développe votre réseau professionnel efficacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Optimisez votre profil <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Audit gratuit de profil</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedIn;