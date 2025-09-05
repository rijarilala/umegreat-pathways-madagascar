import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Phone, Mail, MessageCircle, GraduationCap, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/etudes-canada-hero.jpg";

const EtudesCanada = () => {
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
            Étudier au Canada : 
            <span className="block text-accent">un tremplin vers votre futur</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Le Canada attire des milliers d'étudiants internationaux chaque année grâce à la qualité de son enseignement et aux opportunités post-études
          </p>
          <Button size="lg" variant="hero" asChild className="text-lg px-8 py-6">
            <Link to="/eligibility">Commencez vos études au Canada</Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Le Canada, destination d'excellence pour les étudiants internationaux
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Avec ses universités de renommée mondiale et son système éducatif de qualité, le Canada accueille 
              plus de 800 000 étudiants internationaux. Que vous souhaitiez poursuivre un programme de premier 
              cycle, une maîtrise ou un doctorat, le Canada vous offre des opportunités exceptionnelles 
              d'apprentissage et de développement professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Pourquoi étudier au Canada ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les avantages uniques qui font du Canada la destination idéale pour vos études
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Enseignement de qualité</h3>
                <p className="text-muted-foreground">
                  Universités reconnues mondialement avec des programmes innovants et des professeurs experts
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Opportunités de travail</h3>
                <p className="text-muted-foreground">
                  Possibilité de travailler pendant les études et après l'obtention du diplôme
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Ouverture vers la résidence permanente</h3>
                <p className="text-muted-foreground">
                  Les études au Canada facilitent l'accès à la résidence permanente
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programmes d'études */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Programmes d'études disponibles
            </h2>
            
            <div className="space-y-6">
              <Card className="border-none shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-full flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Programmes de premier cycle</h3>
                      <p className="text-muted-foreground">
                        Baccalauréats dans tous les domaines : ingénierie, commerce, sciences, arts libéraux, santé
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-full flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Études supérieures</h3>
                      <p className="text-muted-foreground">
                        Maîtrises et doctorats avec opportunités de recherche et de développement professionnel
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-full flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Programmes techniques et professionnels</h3>
                      <p className="text-muted-foreground">
                        Formations courtes et spécialisées dans les collèges techniques et instituts professionnels
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'admission */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Notre accompagnement pour vos études
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Orientation académique</h3>
                    <p className="text-muted-foreground">
                      Choix du programme et de l'établissement les mieux adaptés à vos objectifs de carrière
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Dossier d'admission</h3>
                    <p className="text-muted-foreground">
                      Préparation complète de votre candidature et optimisation de vos chances d'admission
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Permis d'études et visa</h3>
                    <p className="text-muted-foreground">
                      Accompagnement pour l'obtention de votre permis d'études et visa étudiant
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Préparation au départ</h3>
                    <p className="text-muted-foreground">
                      Conseils pour l'installation et l'adaptation à la vie étudiante au Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-subtle p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Prêt à étudier au Canada ?</h3>
                <p className="text-muted-foreground mb-6">
                  Transformez votre rêve d'étudier au Canada en réalité. Contactez-nous pour une 
                  évaluation personnalisée de votre projet d'études.
                </p>
                <Button size="lg" variant="hero" asChild className="w-full">
                  <Link to="/contact">Commencer mon projet</Link>
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
              Concrétisez votre projet d'études au Canada
            </h2>
            <p className="text-xl mb-12 text-primary-foreground/90">
              Nos conseillers spécialisés vous accompagnent de A à Z dans votre démarche d'admission
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

export default EtudesCanada;