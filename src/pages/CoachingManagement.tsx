import { ArrowRight, Users, Award, TrendingUp, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import coachingManagementHero from "@/assets/coaching-management-hero.jpg";

const CoachingManagement = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${coachingManagementHero})`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Coaching RH et Management
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Développez vos compétences et votre leadership pour une performance optimale
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            Réservez une session de coaching RH
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Le coaching, accélérateur de performance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Le coaching en management et ressources humaines est un levier puissant pour 
              améliorer la performance individuelle et collective. UMEGREAT PRO vous propose 
              un accompagnement personnalisé pour développer votre leadership, optimiser 
              vos équipes et réussir les transformations organisationnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Nos Services de Coaching Professionnel
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Coaching en Management</CardTitle>
                <CardDescription>
                  Leadership et gestion d'équipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Développement du leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Amélioration de la prise de décision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Gestion efficace des équipes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>


            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Coaching RH</CardTitle>
                <CardDescription>
                  Optimisation des talents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Accompagnement équipes RH</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Gestion optimale des talents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Stratégies de développement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Accompagnement au Changement</CardTitle>
                <CardDescription>
                  Transformations organisationnelles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Conduite du changement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Gestion des restructurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Communication et cohésion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avantages du coaching */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Pourquoi choisir notre coaching ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise Reconnue</h3>
                <p className="text-muted-foreground">
                  Coachs certifiés avec une solide expérience en management et ressources humaines
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Approche Personnalisée</h3>
                <p className="text-muted-foreground">
                  Méthodes adaptées à vos besoins spécifiques et à votre contexte professionnel
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Résultats Mesurables</h3>
                <p className="text-muted-foreground">
                  Suivi des progrès et amélioration continue de votre performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public cible */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Nos Services s'adressent à
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dirigeants et Managers</h3>
                <p className="text-muted-foreground">
                  Cadres supérieurs, managers d'équipe et responsables RH
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborateurs Clés</h3>
                <p className="text-muted-foreground">
                  Talents à haut potentiel et professionnels en développement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Révélez votre potentiel de leader
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bénéficiez d'un coaching professionnel personnalisé pour développer vos compétences et atteindre vos objectifs
          </p>
          <div className="space-y-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Réservez une session de coaching RH
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="text-lg">
              <p>📞 +261 37 47 83 198 | ✉️ umegreatpro@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachingManagement;