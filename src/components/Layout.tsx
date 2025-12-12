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

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Formations", href: "/formations" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesLinks = [
    { name: "Tous nos services", href: "/services", description: "Vue d'ensemble de tous nos services et domaines d'expertise" },
    { name: "Ressources Humaines", href: "/ressources-humaines", description: "Conseil, coaching et audit RH pour optimiser votre capital humain" },
  ];

  const canadaLinks = [
    { name: "Immigration Permanente", href: "/immigration-permanente" },
    { name: "Regroupement Familial", href: "/regroupement-familial" },
    { name: "Études au Canada", href: "/etudes-canada" },
    { name: "Évaluer votre éligibilité", href: "/eligibility" },
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
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo-umegreat-pro.png" 
                alt="UMEGREAT PRO - Cabinet conseil RH et Immigration Canada" 
                className="h-14 w-auto object-contain"
              />
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
                  <span>Services</span>
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
                  <span>Canada</span>
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

            {/* CTA Button and Search */}
            <div className="hidden md:flex items-center space-x-4">
              <SearchBar />
              <Button variant="hero" size="sm" asChild>
                <Link to="/eligibility" onClick={() => window.scrollTo(0, 0)}>Évaluer votre éligibilité</Link>
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
                <SearchBar variant="inline" placeholder="Rechercher..." />
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
                
                {/* Services submenu for mobile */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">Services</span>
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
                  <span className="text-sm font-medium text-muted-foreground">Canada</span>
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
                  }}>Évaluer votre éligibilité</Link>
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
                  src="/logo-umegreat-pro.png" 
                  alt="UMEGREAT PRO - Cabinet conseil RH et Immigration Canada" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Ensemble vers la vie que vous méritez
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
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
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link to="/ressources-humaines" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    Ressources Humaines
                  </Link>
                </li>
                <li>
                  <Link to="/immigration-permanente" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    Immigration Permanente
                  </Link>
                </li>
                <li>
                  <Link to="/regroupement-familial" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    Regroupement Familial
                  </Link>
                </li>
                <li>
                  <Link to="/etudes-canada" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    Études au Canada
                  </Link>
                </li>
                <li>
                  <Link to="/formations" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    Formations
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-foreground transition-colors">
                    Conseil & Orientation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin size={16} />
                  <span>Moramanga, Madagascar</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={16} />
                  <span>+261 37 47 83 198</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail size={16} />
                  <span>umegreatpro@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 UMEGREAT PRO. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;