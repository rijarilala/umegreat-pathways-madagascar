import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Phone, Mail, MessageCircle, Briefcase, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/immigration-permanente-hero.jpg";

const ImmigrationPermanente = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/80" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Immigration Permanente : 
            <span className="block text-accent">construisez votre avenir au Canada</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Le Canada vous offre la possibilité de vous installer durablement pour travailler et vivre en toute stabilité
          </p>
          <Button size="lg" variant="hero" asChild className="text-lg px-8 py-6">
            <Link to="/eligibility">Comment immigrer au Canada ?</Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Votre nouvelle vie vous attend au Canada
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Le Canada est reconnu comme l'un des meilleurs pays au monde pour la qualité de vie. 
              Avec ses nombreux programmes d'immigration, le pays accueille chaque année des milliers 
              de nouveaux résidents permanents qui viennent y construire leur avenir professionnel et familial.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Pourquoi choisir l'immigration permanente au Canada ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les nombreux avantages qui font du Canada une destination de choix
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Opportunités d'emploi</h3>
                <p className="text-muted-foreground">
                  Un marché du travail dynamique avec des opportunités dans tous les secteurs d'activité
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Home className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Qualité de vie exceptionnelle</h3>
                <p className="text-muted-foreground">
                  Système de santé universel, éducation de qualité et environnement sécurisé
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Stabilité pour la famille</h3>
                <p className="text-muted-foreground">
                  Un avenir sécurisé pour vous et vos proches dans un pays stable et accueillant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Notre accompagnement personnalisé
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Évaluation complète</h3>
                    <p className="text-muted-foreground">
                      Analyse détaillée de votre profil et identification du meilleur programme d'immigration
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Préparation du dossier</h3>
                    <p className="text-muted-foreground">
                      Constitution et optimisation de votre dossier d'immigration
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Suivi personnalisé</h3>
                    <p className="text-muted-foreground">
                      Accompagnement tout au long du processus jusqu'à votre installation au Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Prêt à commencer ?</h3>
                <p className="text-muted-foreground mb-6">
                  Contactez-nous dès aujourd'hui pour une consultation personnalisée et découvrez 
                  vos chances de réussir votre projet d'immigration au Canada.
                </p>
                <Button size="lg" variant="hero" asChild className="w-full">
                  <Link to="/contact">Consulter un expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Parlons de votre projet d'immigration
            </h2>
            <p className="text-xl mb-12 text-primary-foreground/90">
              Nos experts vous accompagnent dans chaque étape de votre démarche
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-accent p-4 rounded-full">
                  <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <p className="text-primary-foreground/80">+261 37 47 83 198</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-accent p-4 rounded-full">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-primary-foreground/80">umegreatpro@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-accent p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Localisation</h3>
                  <p className="text-primary-foreground/80">Moramanga, Madagascar</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+261374783198" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Appeler maintenant</span>
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/261374783198" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationPermanente;