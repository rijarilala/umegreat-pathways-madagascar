import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Compass, 
  Target, 
  CheckCircle, 
  Users, 
  Clock, 
  Star,
  ArrowRight 
} from "lucide-react";

const TransitionVieActive = () => {
  const objectives = [
    "Comprendre les codes et les attentes du monde professionnel",
    "Développer une posture professionnelle adaptée à votre secteur",
    "Maîtriser les soft skills essentiels pour réussir en entreprise",
    "Créer un projet professionnel cohérent et réalisable",
    "Acquérir les bons réflexes pour une intégration réussie"
  ];

  const program = [
    {
      title: "Codes du monde professionnel",
      content: "Culture d'entreprise, hiérarchie, communication professionnelle"
    },
    {
      title: "Développement personnel",
      content: "Confiance en soi, gestion du stress, assertivité"
    },
    {
      title: "Compétences relationnelles",
      content: "Travail en équipe, networking, gestion des conflits"
    },
    {
      title: "Project professionnel",
      content: "Définition d'objectifs, plan de carrière, évolution"
    },
    {
      title: "Mise en situation",
      content: "Simulations, études de cas, jeux de rôle professionnels"
    }
  ];

  const advantages = [
    "Formateurs experts en insertion professionnelle",
    "Méthodes interactives et ludiques d'apprentissage",
    "Accompagnement personnalisé post-formation",
    "Réseau d'entreprises pour stages et emplois",
    "Certification reconnue par les entreprises partenaires"
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-accent/20 p-4 rounded-full">
                <Compass size={48} className="text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formation Transition vers la Vie Active Professionnelle
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Préparez-vous efficacement à intégrer le monde professionnel avec confiance
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock size={16} className="mr-2" />
                2,5 jours intensifs
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users size={16} className="mr-2" />
                Jeunes diplômés
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
                <CardTitle className="text-2xl text-center">Le pont entre formation et emploi</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passer des études au monde professionnel représente un défi majeur pour de nombreux jeunes. 
                  Au-delà des compétences techniques, réussir cette transition nécessite de maîtriser les codes 
                  de l'entreprise, de développer sa posture professionnelle et d'acquérir les soft skills 
                  indispensables. Cette formation vous accompagne dans cette étape cruciale pour un démarrage 
                  de carrière réussi.
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
                À l'issue de cette formation, vous serez prêt à :
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
                Un accompagnement progressif en 5 modules essentiels
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
                      <span>Jeunes diplômés (Bac à Bac+5)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Étudiants en fin de cursus</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Jeunes sans expérience professionnelle</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Demandeurs d'emploi débutants</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Personnes en réorientation professionnelle</span>
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
                      <p className="text-muted-foreground">2,5 jours (17 heures de formation)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Format</h4>
                      <p className="text-muted-foreground">Présentiel interactif</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Horaires</h4>
                      <p className="text-muted-foreground">9h00 - 16h00 / Dernière demi-journée 9h00-12h00</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Groupe</h4>
                      <p className="text-muted-foreground">Maximum 15 participants</p>
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
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir UMEGREAT PRO ?</h2>
              <p className="text-xl text-muted-foreground">
                Une approche moderne de l'insertion professionnelle
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
            Démarrez votre carrière du bon pied
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Ne laissez pas le hasard décider de votre avenir professionnel. Préparez votre transition 
            avec les bonnes méthodes et les bons outils.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Réservez votre place <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Entretien de motivation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransitionVieActive;