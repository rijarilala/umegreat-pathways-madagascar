import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { CheckCircle, AlertCircle, ArrowRight, FileText, User, Globe } from "lucide-react";

const Eligibility = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    education: "",
    experience: "",
    frenchLevel: "",
    englishLevel: "",
    maritalStatus: "",
    children: "",
    project: ""
  });

  const [showResult, setShowResult] = useState(false);
  const [eligibilityScore, setEligibilityScore] = useState(0);

  const calculateEligibility = () => {
    let score = 0;
    
    // Calcul basé sur l'âge
    const age = parseInt(formData.age);
    if (age >= 18 && age <= 35) score += 30;
    else if (age >= 36 && age <= 45) score += 20;
    else if (age >= 46 && age <= 55) score += 10;

    // Calcul basé sur l'éducation
    if (formData.education === "master-plus") score += 25;
    else if (formData.education === "bachelor") score += 20;
    else if (formData.education === "diploma") score += 15;
    else if (formData.education === "secondary") score += 5;

    // Calcul basé sur l'expérience
    if (formData.experience === "5-plus") score += 20;
    else if (formData.experience === "3-5") score += 15;
    else if (formData.experience === "1-3") score += 10;
    else if (formData.experience === "less-1") score += 5;

    // Calcul basé sur le français
    if (formData.frenchLevel === "advanced") score += 20;
    else if (formData.frenchLevel === "intermediate") score += 15;
    else if (formData.frenchLevel === "basic") score += 5;

    // Calcul basé sur l'anglais
    if (formData.englishLevel === "advanced") score += 10;
    else if (formData.englishLevel === "intermediate") score += 8;
    else if (formData.englishLevel === "basic") score += 3;

    // Bonus pour situation familiale
    if (formData.maritalStatus === "married") score += 5;

    setEligibilityScore(score);
    setShowResult(true);
  };

  const getResultMessage = () => {
    if (eligibilityScore >= 75) {
      return {
        type: "excellent",
        title: "Excellentes chances d'éligibilité !",
        message: "Votre profil présente d'excellentes chances d'être éligible aux programmes d'immigration canadienne. Nous vous recommandons de commencer les démarches rapidement.",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      };
    } else if (eligibilityScore >= 50) {
      return {
        type: "good",
        title: "Bonnes chances d'éligibilité",
        message: "Votre profil montre de bonnes chances d'éligibilité. Quelques améliorations pourraient optimiser vos chances de réussite.",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      };
    } else {
      return {
        type: "improvement",
        title: "Profil à améliorer",
        message: "Votre profil nécessite quelques améliorations pour optimiser vos chances. Nous pouvons vous accompagner dans cette démarche.",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
      };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateEligibility();
  };

  if (showResult) {
    const result = getResultMessage();
    
    return (
      <div className="min-h-screen py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Résultat de votre test</h1>
              <p className="text-muted-foreground">Voici l'évaluation de votre éligibilité</p>
            </div>

            <Card className={`border-2 ${result.borderColor} ${result.bgColor} mb-8`}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {result.type === "excellent" ? (
                    <CheckCircle size={48} className="text-green-600" />
                  ) : result.type === "good" ? (
                    <CheckCircle size={48} className="text-blue-600" />
                  ) : (
                    <AlertCircle size={48} className="text-orange-600" />
                  )}
                </div>
                <CardTitle className={`text-2xl ${result.color}`}>
                  {result.title}
                </CardTitle>
                <div className="mt-4">
                  <div className="bg-background rounded-full p-1">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm font-medium">Score:</span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {eligibilityScore}/100
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className={`text-center ${result.color}`}>
                  {result.message}
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ArrowRight className="text-primary" size={20} />
                  <span>Prochaines étapes recommandées</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <User size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Consultation personnalisée</h4>
                    <p className="text-sm text-muted-foreground">
                      Rencontrez un de nos experts pour une analyse approfondie de votre dossier
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Préparation du dossier</h4>
                    <p className="text-sm text-muted-foreground">
                      Constitution et optimisation de votre dossier d'immigration
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Accompagnement complet</h4>
                    <p className="text-sm text-muted-foreground">
                      Suivi de A à Z jusqu'à votre installation au Canada
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1" asChild>
                <Link to="/contact">
                  Prendre rendez-vous <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" onClick={() => setShowResult(false)}>
                Refaire le test
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Test d'éligibilité à l'immigration</h1>
            <p className="text-xl text-muted-foreground">
              Évaluez gratuitement vos chances de réussir votre projet d'immigration au Canada
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FileText className="text-primary" size={20} />
                </div>
                <span>Questionnaire d'évaluation</span>
              </CardTitle>
              <CardDescription>
                Répondez à quelques questions pour obtenir une première évaluation de votre profil
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Âge *</Label>
                  <Input
                    id="age"
                    type="number"
                    min="18"
                    max="65"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Niveau d'études *</Label>
                  <Select value={formData.education} onValueChange={(value) => setFormData({...formData, education: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="secondary">Enseignement secondaire</SelectItem>
                      <SelectItem value="diploma">Diplôme professionnel/technique</SelectItem>
                      <SelectItem value="bachelor">Licence/Bachelor</SelectItem>
                      <SelectItem value="master-plus">Master ou plus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Expérience professionnelle *</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Années d'expérience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-1">Moins d'1 an</SelectItem>
                      <SelectItem value="1-3">1 à 3 ans</SelectItem>
                      <SelectItem value="3-5">3 à 5 ans</SelectItem>
                      <SelectItem value="5-plus">Plus de 5 ans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Niveau de français *</Label>
                    <Select value={formData.frenchLevel} onValueChange={(value) => setFormData({...formData, frenchLevel: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Évaluez votre français" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Aucune connaissance</SelectItem>
                        <SelectItem value="basic">Basique (communication simple)</SelectItem>
                        <SelectItem value="intermediate">Intermédiaire (conversations courantes)</SelectItem>
                        <SelectItem value="advanced">Avancé/Courant (maîtrise professionnelle)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Niveau d'anglais *</Label>
                    <Select value={formData.englishLevel} onValueChange={(value) => setFormData({...formData, englishLevel: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Évaluez votre anglais" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Aucune connaissance</SelectItem>
                        <SelectItem value="basic">Basique (communication simple)</SelectItem>
                        <SelectItem value="intermediate">Intermédiaire (conversations courantes)</SelectItem>
                        <SelectItem value="advanced">Avancé/Courant (maîtrise professionnelle)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Situation familiale *</Label>
                  <RadioGroup 
                    value={formData.maritalStatus} 
                    onValueChange={(value) => setFormData({...formData, maritalStatus: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single">Célibataire</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="married" id="married" />
                      <Label htmlFor="married">Marié(e)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Avez-vous des enfants ?</Label>
                  <Select value={formData.children} onValueChange={(value) => setFormData({...formData, children: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Nombre d'enfants" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Aucun</SelectItem>
                      <SelectItem value="1">1 enfant</SelectItem>
                      <SelectItem value="2">2 enfants</SelectItem>
                      <SelectItem value="3-plus">3 ou plus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Type de projet d'immigration *</Label>
                  <RadioGroup 
                    value={formData.project} 
                    onValueChange={(value) => setFormData({...formData, project: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="family" id="family" />
                      <Label htmlFor="family">Regroupement familial</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="work" id="work" />
                      <Label htmlFor="work">Immigration avec emploi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business" id="business" />
                      <Label htmlFor="business">Immigration d'affaires</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero" 
                  size="lg"
                  disabled={!formData.firstName || !formData.lastName || !formData.age || !formData.education || !formData.experience || !formData.frenchLevel || !formData.englishLevel || !formData.maritalStatus || !formData.project}
                >
                  Obtenir mon évaluation <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              * Cette évaluation est indicative. Pour une analyse complète, 
              <Link to="/contact" className="text-primary hover:underline ml-1">
                consultez nos experts
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;