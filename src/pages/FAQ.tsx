import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, MessageCircle, ArrowRight, Users, Globe } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Immigration au Canada",
      icon: Globe,
      questions: [
        {
          q: "Quelles sont les étapes générales pour immigrer au Canada ?",
          a: "Le processus comprend généralement : 1) L'évaluation d'éligibilité, 2) La préparation et soumission du dossier, 3) L'examen par les autorités canadiennes, 4) L'obtention des documents, et 5) L'installation. Chaque programme a ses spécificités que nous détaillons lors de nos consultations."
        },
        {
          q: "Combien de temps prend une démarche d'immigration ?",
          a: "Les délais varient selon le programme choisi et la complexité du dossier. En général, comptez entre 12 à 24 mois pour la plupart des programmes. Nous vous fournirons un calendrier précis selon votre situation lors de notre première consultation."
        },
        {
          q: "Faut-il avoir un emploi avant de partir au Canada ?",
          a: "Ce n'est pas toujours obligatoire, cela dépend du programme d'immigration choisi. Certains programmes exigent une offre d'emploi, d'autres non. Nous vous aidons à identifier le programme le plus adapté à votre situation et vous accompagnons dans la recherche d'emploi si nécessaire."
        },
        {
          q: "Quels sont les critères de base pour être éligible ?",
          a: "Les critères incluent généralement : l'âge (18-55 ans), le niveau d'éducation, l'expérience professionnelle, la maîtrise du français ou de l'anglais, les ressources financières, et l'absence d'antécédents criminels. Notre test d'éligibilité vous donne une première indication."
        },
        {
          q: "UMEGREAT PRO accompagne-t-il aussi les familles ?",
          a: "Absolument ! Nous spécialisons dans l'accompagnement des familles complètes. Nous gérons les dossiers de regroupement familial et aidons à préparer l'installation de tous les membres de la famille, y compris l'inscription scolaire des enfants."
        }
      ]
    },
    {
      title: "Ressources Humaines", 
      icon: Users,
      questions: [
        {
          q: "Quels types de formations RH proposez-vous ?",
          a: "Nos formations couvrent tous les aspects de la GRH : recrutement et sélection, gestion des performances, GPEC, droit du travail, management d'équipe, et développement des talents. Nous adaptons nos programmes aux besoins spécifiques de votre organisation."
        },
        {
          q: "Vos formations sont-elles certifiantes ?",
          a: "Oui, nous délivrons des certificats de formation reconnus. Certaines de nos formations peuvent également préparer à des certifications professionnelles reconnues dans le domaine des ressources humaines."
        },
        {
          q: "Proposez-vous du conseil RH pour les PME ?",
          a: "Certainement ! Nous accompagnons les PME dans la structuration de leur fonction RH, l'optimisation de leurs processus, et la résolution de problématiques spécifiques. Nos interventions sont adaptées à la taille et aux moyens de chaque entreprise."
        },
        {
          q: "Comment se déroule un audit RH ?",
          a: "Notre audit RH comprend : une analyse de l'existant, l'évaluation des processus, l'identification des axes d'amélioration, et la remise d'un plan d'action détaillé. Nous vous accompagnons ensuite dans la mise en œuvre des recommandations."
        }
      ]
    }
  ];

  const generalQuestions = [
    {
      q: "Comment prendre rendez-vous avec UMEGREAT PRO ?",
      a: "Vous pouvez nous contacter par téléphone au +261 37 47 83 198, par email à umegreatpro@gmail.com, ou via notre formulaire de contact en ligne. Nous vous répondrons dans les 24h pour convenir d'un rendez-vous."
    },
    {
      q: "Proposez-vous des consultations à distance ?",
      a: "Oui, nous proposons des consultations par visioconférence pour les clients qui ne peuvent pas se déplacer à Moramanga. Cela nous permet d'accompagner des clients partout à Madagascar et même à l'international."
    },
    {
      q: "Quels sont vos tarifs ?",
      a: "Nos tarifs varient selon le type de service et la complexité du dossier. Nous proposons toujours un devis personnalisé après une première consultation gratuite. Nos prix sont transparents et sans frais cachés."
    },
    {
      q: "Offrez-vous une garantie sur vos services ?",
      a: "Nous nous engageons sur la qualité de nos prestations et le suivi de nos clients. Pour l'immigration, nous vous accompagnons jusqu'à l'obtention d'une réponse officielle. En cas de refus pour des raisons indépendantes de notre volonté, nous analysons les options de recours."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Trouvez rapidement les réponses à vos questions sur nos services RH et d'immigration.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ par catégorie */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <category.icon className="text-primary" size={24} />
                      </div>
                      <span className="text-2xl">{category.title}</span>
                    </CardTitle>
                    <CardDescription>
                      Questions fréquentes concernant nos services de {category.title.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border border-border rounded-lg px-4">
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-medium">{faq.q}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Questions générales */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <HelpCircle className="text-accent" size={24} />
                  </div>
                  <span className="text-2xl">Questions générales</span>
                </CardTitle>
                <CardDescription>
                  Informations pratiques sur nos services et modalités
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {generalQuestions.map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`} className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section d'aide supplémentaire */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-6">
              <MessageCircle className="text-accent" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Notre équipe d'experts est là pour répondre à toutes vos questions spécifiques. 
              Contactez-nous pour une consultation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Poser votre question <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/eligibility">Test d'éligibilité</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Note importante */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <HelpCircle size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Note importante</h3>
                    <p className="text-sm text-muted-foreground">
                      Les informations fournies dans cette FAQ sont générales et indicatives. 
                      Chaque situation étant unique, nous recommandons toujours une consultation 
                      personnalisée pour obtenir des conseils adaptés à votre cas spécifique. 
                      Les réglementations peuvent évoluer, nous nous assurons de vous fournir 
                      les informations les plus récentes lors de nos consultations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;