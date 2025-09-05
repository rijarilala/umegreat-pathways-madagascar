import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBar } from "@/components/SearchBar";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.formations'), href: "/formations" },
    { name: t('nav.faq'), href: "/faq" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const servicesLinks = [
    { name: t('nav.allServices'), href: "/services", description: t('nav.allServicesDesc') },
    { name: t('nav.humanResources'), href: "/ressources-humaines", description: t('nav.humanResourcesDesc') },
  ];

  const canadaLinks = [
    { name: t('nav.permanentImmigration'), href: "/immigration-permanente" },
    { name: t('nav.familyReunification'), href: "/regroupement-familial" },
    { name: t('nav.canadaStudies'), href: "/etudes-canada" },
    { name: t('nav.evaluateEligibility'), href: "/eligibility" },
  ];

  const isCanadaActive = canadaLinks.some(link => location.pathname === link.href);
  const isServicesActive = servicesLinks.some(link => location.pathname === link.href);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/e6db913e-20f5-43fb-8d43-b731c331b66d.png" 
                alt="UMEGREAT PRO" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="font-bold text-lg text-primary">UMEGREAT PRO</h1>
                <p className="text-xs text-muted-foreground">Cabinet conseil</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                  isServicesActive ? "text-primary" : "text-foreground"
                }`}>
                  <span>{t('nav.services')}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-elegant min-w-[300px]">
                  {servicesLinks.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        onClick={() => window.scrollTo(0, 0)}
                        className={`w-full p-3 block text-sm font-medium transition-colors hover:text-primary ${
                          isActive(item.href) ? "text-primary" : "text-foreground"
                        }`}
                      >
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Canada Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                  isCanadaActive ? "text-primary" : "text-foreground"
                }`}>
                  <span>{t('nav.canada')}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-elegant">
                  {canadaLinks.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        onClick={() => window.scrollTo(0, 0)}
                        className={`w-full text-sm font-medium transition-colors hover:text-primary ${
                          isActive(item.href) ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Language Selector, CTA Button and Search */}
            <div className="hidden md:flex items-center space-x-4">
              <SearchBar />
              <LanguageSelector />
              <Button variant="hero" size="sm" asChild>
                <Link to="/eligibility" onClick={() => window.scrollTo(0, 0)}>{t('nav.evaluateEligibility')}</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {/* Mobile Search */}
              <div className="mb-6">
                <SearchBar variant="inline" placeholder={t('search.placeholder')} />
              </div>
              
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                    {item.name}
                  </Link>
                ))}
                
                {/* Language selector for mobile */}
                <LanguageSelector variant="mobile" />
                
                {/* Services submenu for mobile */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">{t('nav.services')}</span>
                  <div className="pl-4 space-y-2">
                    {servicesLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block text-sm font-medium transition-colors hover:text-primary ${
                            isActive(item.href) ? "text-primary" : "text-foreground"
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            window.scrollTo(0, 0);
                          }}
                        >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Canada submenu for mobile */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">{t('nav.canada')}</span>
                  <div className="pl-4 space-y-2">
                    {canadaLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block text-sm font-medium transition-colors hover:text-primary ${
                            isActive(item.href) ? "text-primary" : "text-foreground"
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            window.scrollTo(0, 0);
                          }}
                        >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Button variant="hero" size="sm" asChild className="w-fit">
                  <Link to="/eligibility" onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}>{t('nav.evaluateEligibility')}</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/e6db913e-20f5-43fb-8d43-b731c331b66d.png" 
                  alt="UMEGREAT PRO" 
                  className="h-10 w-10 object-contain"
                />
                <h3 className="font-bold text-lg">UMEGREAT PRO</h3>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">{t('footer.navigation')}</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link to="/ressources-humaines" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    {t('footer.servicesLinks.hr')}
                  </Link>
                </li>
                <li>
                  <Link to="/immigration-permanente" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    {t('footer.servicesLinks.immigration')}
                  </Link>
                </li>
                <li>
                  <Link to="/regroupement-familial" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    {t('footer.servicesLinks.family')}
                  </Link>
                </li>
                <li>
                  <Link to="/etudes-canada" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    {t('footer.servicesLinks.studies')}
                  </Link>
                </li>
                <li>
                  <Link to="/formations" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    {t('footer.servicesLinks.formations')}
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    {t('footer.servicesLinks.conseil')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin size={16} />
                  <span>{t('footer.location')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={16} />
                  <span>{t('footer.phone')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail size={16} />
                  <span>{t('footer.email')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 UMEGREAT PRO. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;