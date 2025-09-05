import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Globe, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  const { t } = useLanguage();
  
  // SEO optimization
  useSEO({
    title: t('about.title'),
    description: t('about.subtitle')
  });

  const values = [
    {
      icon: Target,
      title: t('about.values.mission.title'),
      description: t('about.values.mission.description')
    },
    {
      icon: Eye,
      title: t('about.values.vision.title'),
      description: t('about.values.vision.description')
    },
    {
      icon: Heart,
      title: t('about.values.values.title'),
      description: t('about.values.values.description')
    }
  ];

  const expertise = [
    {
      icon: Users,
      title: t('about.expertise.hr.title'),
      description: t('about.expertise.hr.description'),
      stats: t('about.expertise.hr.stats')
    },
    {
      icon: Globe,
      title: t('about.expertise.immigration.title'), 
      description: t('about.expertise.immigration.description'),
      stats: t('about.expertise.immigration.stats')
    },
    {
      icon: Award,
      title: t('about.expertise.training.title'),
      description: t('about.expertise.training.description'),
      stats: t('about.expertise.training.stats')
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.whoWeAre')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.description')}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.expertise.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('about.expertise.subtitle')}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.commitment.title')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">{t('about.commitment.personalized.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.commitment.personalized.description')}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">{t('about.commitment.proximity.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.commitment.proximity.description')}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">{t('about.commitment.results.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.commitment.results.description')}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-accent text-accent-foreground border-none">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-2xl font-bold mb-4">{t('about.whyChooseUs.title')}</h4>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>{t('about.whyChooseUs.expertise')}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>{t('about.whyChooseUs.personalized')}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>{t('about.whyChooseUs.success')}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>{t('about.whyChooseUs.transparency')}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-accent-foreground/80">•</span>
                        <span>{t('about.whyChooseUs.followUp')}</span>
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
            {t('about.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {t('about.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/services">
                {t('about.ctaPrimary')} <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">{t('about.ctaSecondary')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;