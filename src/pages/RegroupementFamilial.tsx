import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Phone, Mail, MessageCircle, Heart, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/regroupement-familial-hero.jpg";

const RegroupementFamilial = () => {
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
            Regroupement Familial : 
            <span className="block text-accent">rejoignez vos proches au Canada</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Le Canada permet aux familles de se réunir et de s'installer durablement dans un environnement sécurisé
          </p>
          <Button size="lg" variant="hero" asChild className="text-lg px-8 py-6">
            <Link to="/eligibility">Rejoindre sa famille au Canada</Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              La famille au cœur de l'immigration canadienne
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Le Canada valorise l'importance de la famille et facilite le regroupement familial. 
              Que vous souhaitiez faire venir votre conjoint(e), vos enfants, vos parents ou grands-parents, 
              des programmes spécifiques existent pour réunir les familles sur le territoire canadien.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Les avantages du regroupement familial au Canada
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Offrez à votre famille un avenir serein dans un pays qui valorise l'unité familiale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Sécurité et stabilité</h3>
                <p className="text-muted-foreground">
                  Un environnement sûr et stable pour élever vos enfants et prendre soin de vos proches
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Accompagnement administratif</h3>
                <p className="text-muted-foreground">
                  Nous vous guidons dans toutes les démarches administratives complexes
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Installation facilitée</h3>
                <p className="text-muted-foreground">
                  Support complet pour l'intégration et l'adaptation de votre famille au Canada
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types de regroupement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Types de regroupement familial
            </h2>
            
            <div className="space-y-6">
              <Card className="border-none shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-full flex-shrink-0">
                      <Heart className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Conjoint(e) et enfants</h3>
                      <p className="text-muted-foreground">
                        Faites venir votre époux/épouse et vos enfants à charge pour commencer une nouvelle vie ensemble au Canada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-full flex-shrink-0">
                      <Heart className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Parents et grands-parents</h3>
                      <p className="text-muted-foreground">
                        Programme spécial permettant de parrainer vos parents et grands-parents pour qu'ils vous rejoignent
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-full flex-shrink-0">
                      <Heart className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Autres membres de la famille</h3>
                      <p className="text-muted-foreground">
                        Dans certaines conditions spéciales, possibilité de parrainer d'autres membres de votre famille
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Notre accompagnement */}
      <section className="py-16 bg-muted/50">
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
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Évaluation familiale</h3>
                    <p className="text-muted-foreground">
                      Analyse de votre situation familiale et identification du meilleur programme de regroupement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Constitution du dossier</h3>
                    <p className="text-muted-foreground">
                      Préparation complète de tous les documents nécessaires pour votre famille
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Support à l'installation</h3>
                    <p className="text-muted-foreground">
                      Aide à l'intégration et à l'adaptation de votre famille une fois au Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Réunissez votre famille</h3>
                <p className="text-muted-foreground mb-6">
                  Ne laissez plus la distance séparer votre famille. Contactez-nous pour découvrir 
                  comment nous pouvons vous aider à réunir vos proches au Canada.
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
              Parlons de votre regroupement familial
            </h2>
            <p className="text-xl mb-12 text-primary-foreground/90">
              Chaque situation familiale est unique, nos experts vous proposent une solution personnalisée
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

export default RegroupementFamilial;