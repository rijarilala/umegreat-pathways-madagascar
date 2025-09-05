import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Target, 
  CheckCircle, 
  Users, 
  Clock, 
  Star,
  ArrowRight 
} from "lucide-react";

const LettreMotivation = () => {
  const objectives = [
    "Maîtriser la structure et les codes de la lettre de motivation",
    "Personnaliser efficacement chaque lettre selon l'entreprise et le poste",
    "Utiliser un langage percutant qui valorise votre profil",
    "Éviter les formulations banales et les erreurs fréquentes",
    "Créer un lien cohérent entre votre CV et votre lettre"
  ];

  const program = [
    {
      title: "Anatomie d'une lettre efficace",
      content: "Structure, ton, longueur idéale et présentation"
    },
    {
      title: "Recherche et analyse d'entreprise",
      content: "Comment personnaliser selon l'employeur cible"
    },
    {
      title: "Argumentation persuasive",
      content: "Techniques de vente de soi et mise en valeur"
    },
    {
      title: "Formules et expressions percutantes",
      content: "Vocabulaire professionnel et phrases d'accroche"
    },
    {
      title: "Atelier de rédaction",
      content: "Création de votre lettre type et variantes"
    }
  ];

  const advantages = [
    "Méthodes basées sur l'analyse de centaines de lettres gagnantes",
    "Templates personnalisables selon votre secteur",
    "Coaching individualisé pour affiner votre style",
    "Banque de phrases et expressions professionnelles",
    "Suivi post-formation pour vos candidatures"
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-accent/20 p-4 rounded-full">
                <MessageSquare size={48} className="text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formation Lettre de Motivation Convaincante
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Rédigez des lettres qui captent l'attention et suscitent l'envie de vous rencontrer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock size={16} className="mr-2" />
                1,5 jour intensif
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users size={16} className="mr-2" />
                Tous profils
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
                <CardTitle className="text-2xl text-center">L'art de convaincre par l'écrit</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Alors que le CV présente vos compétences, la lettre de motivation révèle votre personnalité 
                  et votre motivation réelle. C'est elle qui fait la différence entre deux candidats aux 
                  profils similaires. Savoir rédiger une lettre personnalisée, authentique et persuasive 
                  est un atout majeur pour décrocher des entretiens et marquer les esprits des recruteurs.
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
                À l'issue de cette formation, vous maîtriserez :
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
                Une approche méthodique en 5 étapes clés
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
                      <span>Candidats en recherche active</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Étudiants préparant leur insertion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Professionnels en mobilité</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Personnes reprenant une activité</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Candidats à l'international</span>
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
                      <p className="text-muted-foreground">1,5 jour (10 heures de formation)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Format</h4>
                      <p className="text-muted-foreground">Présentiel ou distanciel</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Horaires</h4>
                      <p className="text-muted-foreground">9h00 - 16h30 (jour 1) / 9h00 - 12h00 (jour 2)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Groupe</h4>
                      <p className="text-muted-foreground">Maximum 8 participants</p>
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
              <h2 className="text-3xl font-bold mb-4">L'approche UMEGREAT PRO</h2>
              <p className="text-xl text-muted-foreground">
                Une méthode éprouvée pour des lettres qui marquent
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
            Transformez vos lettres en atouts de séduction
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Apprenez à rédiger des lettres de motivation qui captivent et convainquent. 
            Votre personnalité fera la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Inscrivez-vous maintenant <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Programme détaillé</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LettreMotivation;