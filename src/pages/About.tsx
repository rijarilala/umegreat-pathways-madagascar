import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Globe, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Accompagner les individus et organisations dans leur développement professionnel et leurs projets de vie, avec un focus sur les ressources humaines et l'immigration au Canada."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Être le cabinet de référence à Madagascar pour l'accompagnement RH et l'immigration, reconnu pour son expertise et la qualité de ses services."
    },
    {
      icon: Heart,
      title: "Valeurs",
      description: "Excellence, proximité, intégrité et engagement. Nous croyons en un accompagnement personnalisé et professionnel pour chaque client."
    }
  ];

  const expertise = [
    {
      icon: Users,
      title: "Expertise RH",
      description: "Plus de 10 ans d'expérience en gestion des ressources humaines, formation et développement organisationnel.",
      stats: "50+ entreprises accompagnées"
    },
    {
      icon: Globe,
      title: "Immigration Canada", 
      description: "Spécialisation dans les processus d'immigration canadienne avec un taux de réussite élevé.",
      stats: "200+ dossiers traités"
    },
    {
      icon: Award,
      title: "Formations certifiantes",
      description: "Programmes de formation reconnus et adaptés aux besoins du marché local et international.",
      stats: "1000+ personnes formées"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos d'UMEGREAT PRO
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Votre partenaire de confiance pour le développement professionnel et la réalisation de vos projets d'immigration au Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Qui sommes-nous ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              UMEGREAT PRO est un cabinet de conseil basé à Moramanga, Madagascar, spécialisé dans l'accompagnement des ressources humaines et l'immigration au Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre expertise */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre expertise</h2>
            <p className="text-xl text-muted-foreground">
              Des domaines de compétence reconnus avec des résultats concrets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <item.icon className="text-accent" size={24} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-primary">{item.stats}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre engagement</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Accompagnement sur mesure</h3>
                  <p className="text-muted-foreground">
                    Chaque client est unique. Nous adaptons nos services à vos besoins spécifiques, 
                    que vous soyez un particulier en quête de nouvelles opportunités ou une entreprise 
                    souhaitant développer ses ressources humaines.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Proximité et professionnalisme</h3>
                  <p className="text-muted-foreground">
                    Basés à Moramanga, nous comprenons les enjeux locaux tout en gardant une vision 
                    internationale. Notre approche combine proximité humaine et expertise professionnelle.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Résultats concrets</h3>
                  <p className="text-muted-foreground">
                    Notre succès se mesure au vôtre. Nous nous engageons à vous fournir des solutions 
                    pratiques et efficaces pour atteindre vos objectifs professionnels et personnels.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-accent text-accent-foreground border-none">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h4>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>Expertise reconnue en RH et immigration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>Accompagnement personnalisé</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>Taux de réussite élevé</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>Transparence et intégrité</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>Suivi à long terme</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à faire le premier pas ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous accompagner dans la réalisation de vos projets professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/services">
                Découvrir nos services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;