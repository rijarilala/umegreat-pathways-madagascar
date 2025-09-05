import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi du formulaire
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les 24h. Merci pour votre confiance.",
    });

    // Reset du formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      info: "Moramanga, Madagascar",
      description: "Nous recevons sur rendez-vous"
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "+261 37 47 83 198",
      description: "Du lundi au vendredi, 8h-17h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "umegreatpro@gmail.com",
      description: "Réponse sous 24h"
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "Lun-Ven : 8h-17h",
      description: "Samedi sur rendez-vous"
    }
  ];

  const services = [
    "Ressources Humaines",
    "Immigration Canada",
    "Conseil & Orientation",
    "Formations professionnelles",
    "Autre demande"
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="font-medium text-primary mb-1">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <MessageSquare className="text-accent" size={20} />
                  </div>
                  <span>Envoyez-nous un message</span>
                </CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons rapidement
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Service d'intérêt</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Objet du message *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Ex: Demande de devis, Question sur l'immigration..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Décrivez votre projet ou votre demande en détail..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero" 
                    size="lg"
                    disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                  >
                    Envoyer le message <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informations supplémentaires */}
            <div className="space-y-8">
              {/* Pourquoi nous contacter */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Pourquoi nous contacter ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <span className="text-primary text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Consultation gratuite</h4>
                      <p className="text-sm text-muted-foreground">
                        Premier échange sans engagement pour évaluer vos besoins
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <span className="text-primary text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expertise reconnue</h4>
                      <p className="text-sm text-muted-foreground">
                        Plus de 10 ans d'expérience en RH et immigration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <span className="text-primary text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Accompagnement personnalisé</h4>
                      <p className="text-sm text-muted-foreground">
                        Solutions adaptées à votre situation unique
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services d'urgence */}
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Besoin urgent ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Pour les demandes urgentes ou les consultations d'urgence, 
                    appelez-nous directement :
                  </p>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Phone size={16} className="text-accent" />
                      <span className="font-semibold">+261 37 47 83 198</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Disponible du lundi au vendredi, 8h-17h
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Carte Google Maps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="text-primary" size={20} />
                    <span>Notre localisation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary/30 h-48 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="text-primary mx-auto mb-2" size={32} />
                      <p className="font-semibold">UMEGREAT PRO</p>
                      <p className="text-sm text-muted-foreground">Moramanga, Madagascar</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Carte interactive disponible sur demande
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section informations pratiques */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Informations pratiques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Délais de réponse</h3>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• Email : 24h maximum</li>
                  <li>• Téléphone : Réponse immédiate aux horaires d'ouverture</li>
                  <li>• Formulaire web : 24-48h</li>
                  <li>• Consultation : Rendez-vous sous 48-72h</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Types de consultations</h3>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• Consultation en présentiel à Moramanga</li>
                  <li>• Visioconférence pour les clients distants</li>
                  <li>• Consultation téléphonique</li>
                  <li>• Rendez-vous à domicile (selon disponibilité)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;