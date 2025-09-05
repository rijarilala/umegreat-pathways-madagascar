import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import rechercheEmploiImage from "@/assets/formations/recherche-emploi.jpg";
import { 
  Search, 
  Target, 
  CheckCircle, 
  Users, 
  Clock, 
  Star,
  ArrowRight 
} from "lucide-react";

const RechercheEmploi = () => {
  const objectives = [
    "Élaborer une stratégie de recherche d'emploi efficace et personnalisée",
    "Utiliser tous les canaux de recrutement : visible et caché",
    "Optimiser votre présence en ligne et votre réseau professionnel",
    "Maîtriser les techniques d'entretien et de négociation",
    "Gérer votre recherche dans la durée avec méthode et motivation"
  ];

  const program = [
    {
      title: "Stratégie et planification",
      content: "Définition d'objectifs, ciblage d'entreprises, planning de recherche"
    },
    {
      title: "Canaux de recrutement",
      content: "Marché visible/caché, réseaux, candidatures spontanées"
    },
    {
      title: "Techniques de candidature",
      content: "Optimisation CV/lettre, portfolios, vidéos de présentation"
    },
    {
      title: "Préparation aux entretiens",
      content: "Types d'entretiens, questions fréquentes, simulations"
    },
    {
      title: "Suivi et négociation",
      content: "Relances efficaces, négociation salaire, gestion des refus"
    }
  ];

  const advantages = [
    "Méthodes éprouvées issues de notre expertise RH",
    "Accompagnement personnalisé selon votre profil",
    "Outils concrets et templates prêts à utiliser",
    "Simulations d'entretiens avec retours détaillés",
    "Réseau d'entreprises partenaires pour opportunités"
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(var(--primary-rgb), 0.8), rgba(var(--primary-rgb), 0.8)), url(${rechercheEmploiImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-accent/20 p-4 rounded-full">
                <Search size={48} className="text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formation Recherche du Premier ou Nouveau Emploi
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Maîtrisez toutes les techniques pour décrocher l'emploi qui vous correspond
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock size={16} className="mr-2" />
                3 jours intensifs
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users size={16} className="mr-2" />
                Demandeurs d'emploi
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
                <CardTitle className="text-2xl text-center">La recherche d'emploi : un métier à part entière</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Rechercher un emploi ne s'improvise pas. Entre marché visible et caché, réseaux professionnels 
                  et candidatures spontanées, réussir sa recherche demande une véritable stratégie. Cette formation 
                  vous donne toutes les clés pour naviguer efficacement dans le monde professionnel, maximiser vos 
                  chances de succès et transformer chaque opportunité en entretien gagnant.
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
                À l'issue de cette formation, vous serez capable de :
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
                Un parcours complet en 5 modules stratégiques
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
                      <span>Jeunes diplômés en recherche du premier emploi</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Demandeurs d'emploi de longue durée</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Professionnels en reconversion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Personnes reprenant une activité</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Candidats souhaitant optimiser leur recherche</span>
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
                      <p className="text-muted-foreground">3 jours (21 heures de formation)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Format</h4>
                      <p className="text-muted-foreground">Présentiel recommandé</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Horaires</h4>
                      <p className="text-muted-foreground">9h00 - 16h00 (avec pauses)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Groupe</h4>
                      <p className="text-muted-foreground">Maximum 12 participants</p>
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
              <h2 className="text-3xl font-bold mb-4">Les + de notre formation</h2>
              <p className="text-xl text-muted-foreground">
                Une approche pragmatique et personnalisée
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
            Donnez un nouveau souffle à votre recherche
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Transformez votre approche et multipliez vos chances de décrocher l'emploi de vos rêves. 
            Une méthode éprouvée pour des résultats concrets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Commencez votre transformation <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Consultation gratuite</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RechercheEmploi;