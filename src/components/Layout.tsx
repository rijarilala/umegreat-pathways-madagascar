import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Immigration Canada", href: "/canada-immigration" },
    { name: "Formations", href: "/formations" },
    { name: "Test d'éligibilité", href: "/eligibility" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <span className="text-primary-foreground font-bold text-xl">UP</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-primary">UMEGREAT PRO</h1>
                <p className="text-xs text-muted-foreground">Cabinet conseil</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="hero" size="sm" asChild>
                <Link to="/eligibility">Test gratuit</Link>
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
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="hero" size="sm" asChild className="w-fit">
                  <Link to="/eligibility">Test gratuit</Link>
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
              <div className="flex items-center space-x-2">
                <div className="bg-accent p-2 rounded-lg">
                  <span className="text-accent-foreground font-bold">UP</span>
                </div>
                <h3 className="font-bold text-lg">UMEGREAT PRO</h3>
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
                  <Link to="/services" className="hover:text-primary-foreground transition-colors">
                    Ressources Humaines
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-primary-foreground transition-colors">
                    Immigration Canada
                  </Link>
                </li>
                <li>
                  <Link to="/formations" className="hover:text-primary-foreground transition-colors">
                    Formations
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-primary-foreground transition-colors">
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