import { ArrowRight, Target, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import conseilOrientationHero from "@/assets/conseil-orientation-hero.jpg";

const ConseilOrientation = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${conseilOrientationHero})`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Conseil et Orientation Professionnelle
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Optimisez vos parcours et carrières avec un accompagnement personnalisé
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            Prenez rendez-vous avec un conseiller RH
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              L'orientation professionnelle, clé de votre réussite
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Dans un monde professionnel en constante évolution, l'orientation et la reconversion 
              professionnelle sont devenues essentielles pour optimiser les talents et assurer 
              l'épanouissement des collaborateurs. UMEGREAT PRO vous accompagne avec expertise 
              et bienveillance dans cette démarche stratégique.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Nos Services d'Orientation Professionnelle
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Orientation de Carrière</CardTitle>
                <CardDescription>
                  Trouvez votre voie professionnelle idéale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Analyse des aptitudes et compétences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Identification du métier ou secteur adapté</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Accompagnement dans les choix stratégiques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Reconversion Professionnelle</CardTitle>
                <CardDescription>
                  Réussissez votre transition de carrière
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Accompagnement du changement de poste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Transition vers un nouveau domaine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Stratégie de reconversion personnalisée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Développement Professionnel</CardTitle>
                <CardDescription>
                  Élaborez votre plan de carrière
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Identification des compétences à développer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Plan de formation personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Suivi des objectifs professionnels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Public cible */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              À qui s'adressent nos services ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professionnels en activité</h3>
                <p className="text-muted-foreground">
                  Employés, managers et cadres souhaitant évoluer ou se reconvertir
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Jeunes diplômés</h3>
                <p className="text-muted-foreground">
                  Nouveaux entrants sur le marché du travail cherchant leur voie
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
            Prêt à donner un nouvel élan à votre carrière ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nos conseillers RH vous accompagnent dans vos projets d'orientation et de reconversion professionnelle
          </p>
          <div className="space-y-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Prenez rendez-vous avec un conseiller RH
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

export default ConseilOrientation;