import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  CheckCircle, 
  Clock, 
  Star,
  ArrowRight,
  Briefcase 
} from "lucide-react";

const GRH = () => {
  const objectives = [
    "Maîtriser les fondamentaux de la gestion des ressources humaines",
    "Piloter efficacement le processus de recrutement et d'intégration",
    "Développer les compétences et accompagner l'évolution des collaborateurs",
    "Gérer la performance et motiver les équipes",
    "Mettre en place une GPEC (Gestion Prévisionnelle des Emplois et Compétences)"
  ];

  const program = [
    {
      title: "Fondamentaux de la GRH",
      content: "Rôle RH, enjeux stratégiques, cadre légal et réglementaire"
    },
    {
      title: "Recrutement et intégration",
      content: "Processus de recrutement, techniques d'entretien, onboarding"
    },
    {
      title: "Gestion des compétences",
      content: "Évaluation, formation, développement des talents"
    },
    {
      title: "Management de la performance",
      content: "Entretiens d'évaluation, objectifs, motivation et rétention"
    },
    {
      title: "GPEC et évolution",
      content: "Planification RH, gestion des carrières, mobilité interne"
    }
  ];

  const advantages = [
    "Formateurs experts avec 15+ ans d'expérience RH",
    "Méthodes éprouvées en entreprises malgaches et internationales",
    "Outils concrets et modèles de documents fournis",
    "Études de cas réels et mises en situation",
    "Réseau d'experts RH pour échanges post-formation"
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-accent/20 p-4 rounded-full">
                <Briefcase size={48} className="text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formation Gestion des Ressources Humaines (GRH)
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Développez une expertise complète en GRH pour optimiser la performance de vos équipes
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock size={16} className="mr-2" />
                5 jours complets
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users size={16} className="mr-2" />
                Managers & RH
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
                <CardTitle className="text-2xl text-center">La GRH au cœur de la performance d'entreprise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dans un environnement économique en constante évolution, la gestion des ressources humaines 
                  est devenue un enjeu stratégique majeur. Bien plus qu'une fonction administrative, la GRH 
                  moderne pilote la performance, développe les talents et accompagne la transformation des 
                  organisations. Cette formation vous donne tous les outils pour exceller dans cette fonction 
                  cruciale et faire de vos équipes un véritable avantage concurrentiel.
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
                À l'issue de cette formation, vous saurez :
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
                Un parcours expertise en 5 modules stratégiques
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
                      <span>Responsables et directeurs RH</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Managers et chefs d'équipe</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Entrepreneurs et dirigeants de PME</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Consultants en organisation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Professionnels souhaitant évoluer vers les RH</span>
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
                      <p className="text-muted-foreground">5 jours (35 heures de formation)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Format</h4>
                      <p className="text-muted-foreground">Présentiel intensif</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Horaires</h4>
                      <p className="text-muted-foreground">9h00 - 16h00 (avec pauses)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Certification</h4>
                      <p className="text-muted-foreground">Attestation de formation délivrée</p>
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
              <h2 className="text-3xl font-bold mb-4">Excellence UMEGREAT PRO</h2>
              <p className="text-xl text-muted-foreground">
                Notre expertise RH reconnue à votre service
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
            Devenez un expert en Gestion des Ressources Humaines
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Développez les compétences stratégiques pour faire de vos équipes un avantage concurrentiel. 
            Une formation complète pour exceller en GRH.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Rejoignez la formation <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Demande de financement</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GRH;