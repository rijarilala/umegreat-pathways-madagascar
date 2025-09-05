import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import cvImpactantImage from "@/assets/formations/cv-impactant.jpg";
import { 
  FileText, 
  Target, 
  CheckCircle, 
  Users, 
  Clock, 
  Star,
  ArrowRight 
} from "lucide-react";

const CVImpactant = () => {
  const objectives = [
    "Structurer efficacement votre CV selon les standards professionnels",
    "Mettre en valeur vos compétences et expériences de manière percutante",
    "Adapter votre CV aux exigences du poste visé",
    "Éviter les erreurs courantes qui éliminent les candidatures",
    "Optimiser la présentation pour attirer l'attention des recruteurs"
  ];

  const program = [
    {
      title: "Fondamentaux du CV moderne",
      content: "Structure, mise en page, règles essentielles"
    },
    {
      title: "Rédaction percutante",
      content: "Profil professionnel, expériences, compétences"
    },
    {
      title: "Personnalisation stratégique",
      content: "Adaptation selon le secteur et le poste"
    },
    {
      title: "Optimisation visuelle",
      content: "Design, couleurs, typographie professionnelle"
    },
    {
      title: "Exercices pratiques",
      content: "Création et révision de votre CV personnel"
    }
  ];

  const advantages = [
    "Expertise reconnue en recrutement et RH",
    "Méthodes éprouvées avec de nombreux succès",
    "Accompagnement personnalisé et suivi individuel",
    "Outils et templates professionnels fournis",
    "Conseils adaptés au marché malgache et international"
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(var(--primary-rgb), 0.8), rgba(var(--primary-rgb), 0.8)), url(${cvImpactantImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-accent/20 p-4 rounded-full">
                <FileText size={48} className="text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formation CV Impactant
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Créez un CV qui vous démarque et maximise vos chances d'obtenir des entretiens
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock size={16} className="mr-2" />
                2 jours intensifs
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users size={16} className="mr-2" />
                Tous niveaux
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
                <CardTitle className="text-2xl text-center">Pourquoi un CV impactant est-il crucial ?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Votre CV est votre première impression auprès des recruteurs. En moyenne, un recruteur 
                  consacre seulement 6 secondes à la première lecture d'un CV. Dans ce contexte ultra-compétitif, 
                  savoir créer un CV qui capte immédiatement l'attention et communique efficacement votre valeur 
                  ajoutée est devenu une compétence indispensable pour réussir votre recherche d'emploi.
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
                Un parcours complet en 5 modules essentiels
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
                      <span>Demandeurs d'emploi</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Jeunes diplômés</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Professionnels en reconversion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Cadres souhaitant évoluer</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Entrepreneurs</span>
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
                      <h4 className="font-semibold mb-2">Groupe</h4>
                      <p className="text-muted-foreground">Maximum 10 participants</p>
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
                Notre expertise à votre service
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
            Prêt à créer un CV qui vous démarque ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Rejoignez nos formations et donnez à votre carrière l'impulsion qu'elle mérite. 
            Places limitées pour un accompagnement optimal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Inscrivez-vous dès aujourd'hui <ArrowRight className="ml-2" size={20} />
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

export default CVImpactant;