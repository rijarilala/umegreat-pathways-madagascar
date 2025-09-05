import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, MessageCircle, Users, GraduationCap, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/canada-immigration-hero.jpg";

const CanadaImmigration = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Réalisez votre projet de vie au Canada
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Immigration, études ou regroupement familial : nous vous accompagnons à chaque étape
          </p>
          <Link to="/eligibility">
            <Button size="lg" className="text-lg px-8 py-4">
              Évaluez vos chances dès aujourd'hui
            </Button>
          </Link>
        </div>
      </section>

      {/* Immigration Permanente Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-4xl font-bold">Immigration permanente</h2>
              </div>
              <h3 className="text-2xl text-muted-foreground mb-6">
                Construisez votre avenir au Canada
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Le Canada offre plusieurs programmes d'immigration pour les travailleurs qualifiés, 
                entrepreneurs et investisseurs. Bénéficiez d'opportunités d'emploi exceptionnelles, 
                d'une qualité de vie inégalée et de la stabilité pour votre famille dans l'un des 
                pays les plus accueillants au monde.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Opportunités d'emploi dans tous les secteurs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Système de santé universel</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Éducation gratuite pour vos enfants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Stabilité politique et économique</span>
                </li>
              </ul>
              <Link to="/eligibility">
                <Button size="lg">
                  Découvrez vos chances d'éligibilité
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Professionnels au Canada" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Études au Canada Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative md:order-1">
              <img 
                src="/api/placeholder/600/400" 
                alt="Campus universitaire canadien" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:order-2">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-4xl font-bold">Étudier au Canada</h2>
              </div>
              <h3 className="text-2xl text-muted-foreground mb-6">
                Un tremplin vers votre futur
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Le Canada attire plus de 800 000 étudiants internationaux chaque année grâce 
                à son système éducatif de renommée mondiale. Profitez d'un enseignement de 
                qualité, de la possibilité de travailler pendant et après vos études, et 
                d'une voie privilégiée vers la résidence permanente.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Universités classées parmi les meilleures au monde</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Permis de travail pendant les études</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Permis de travail post-diplôme jusqu'à 3 ans</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Voie privilégiée vers la résidence permanente</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button size="lg">
                  Préparez votre projet d'études avec nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regroupement Familial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-4xl font-bold">Regroupement Familial</h2>
              </div>
              <h3 className="text-2xl text-muted-foreground mb-6">
                Rejoignez vos proches au Canada
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Le Canada valorise l'unité familiale et offre plusieurs programmes pour 
                permettre aux familles de se réunir. Que vous souhaitiez parrainer votre 
                conjoint, vos enfants ou vos parents, nous vous accompagnons dans cette 
                démarche importante pour votre bonheur familial.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Parrainage de conjoint et enfants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Programme des parents et grands-parents</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Accompagnement administratif complet</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Installation facilitée au Canada</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button size="lg">
                  Contactez-nous pour en savoir plus
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Famille réunie au Canada" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi UMEGREAT PRO Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Pourquoi choisir UMEGREAT PRO ?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  Expertise Reconnue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Spécialistes en Ressources Humaines et Immigration avec une connaissance 
                  approfondie des programmes canadiens et des besoins des candidats malgaches.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  Accompagnement Personnalisé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Chaque client bénéficie d'un suivi individualisé adapté à sa situation 
                  personnelle, familiale et professionnelle pour maximiser ses chances de succès.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary mr-3" />
                  Proximité et Disponibilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Basés à Moramanga, Madagascar, nous comprenons les défis locaux et 
                  offrons un service de proximité avec une ouverture vers le Canada.
                </p>
              </CardContent>
            </Card>
          </div>
          <Link to="/contact">
            <Button size="lg">
              Parlez à un conseiller dès aujourd'hui
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Ai-je besoin d'un emploi avant de commencer mon processus d'immigration ?
                </AccordionTrigger>
                <AccordionContent>
                  Non, il n'est pas obligatoire d'avoir une offre d'emploi pour plusieurs 
                  programmes d'immigration. Cependant, une offre d'emploi valide peut 
                  considérablement améliorer vos chances. Nous évaluons votre profil pour 
                  déterminer la meilleure stratégie.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Combien de temps prend une demande d'immigration ?
                </AccordionTrigger>
                <AccordionContent>
                  Les délais varient selon le programme choisi, généralement entre 6 mois 
                  et 2 ans. Nous vous donnons une estimation précise lors de votre 
                  consultation personnalisée en fonction de votre situation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Quels sont les critères principaux d'éligibilité ?
                </AccordionTrigger>
                <AccordionContent>
                  Les critères incluent l'âge, l'éducation, l'expérience professionnelle, 
                  les compétences linguistiques et les liens avec le Canada. Chaque 
                  programme a ses spécificités que nous analysons avec vous.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Puis-je inclure ma famille dans ma demande ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, la plupart des programmes permettent d'inclure votre conjoint et 
                  vos enfants à charge. Nous vous aidons à préparer les documents pour 
                  toute la famille.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Contactez-nous</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+261 37 47 83 198</p>
                <a 
                  href="tel:+261374783198" 
                  className="text-primary hover:underline"
                >
                  Appelez maintenant
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">umegreatpro@gmail.com</p>
                <a 
                  href="mailto:umegreatpro@gmail.com" 
                  className="text-primary hover:underline"
                >
                  Envoyez un email
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+261 37 47 83 198</p>
                <a 
                  href="https://wa.me/261374783198" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chattez sur WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CanadaImmigration;