export interface SearchItem {
  id: string;
  title: string;
  content: string;
  url: string;
  category: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // Page d'accueil
  {
    id: "home",
    title: "Accueil - UMEGREAT PRO",
    content: "Votre partenaire de confiance pour l'immigration au Canada et le développement professionnel. Expertise en ressources humaines, formations professionnelles et accompagnement vers le Canada.",
    url: "/",
    category: "Accueil",
    keywords: ["accueil", "immigration", "canada", "rh", "formations", "développement professionnel"]
  },

  // Services RH
  {
    id: "rh-services",
    title: "Services Ressources Humaines",
    content: "Conseil et audit RH, coaching management et leadership, conseil en orientation professionnelle, optimisation des processus RH, gestion des talents, recrutement.",
    url: "/ressources-humaines",
    category: "Ressources Humaines",
    keywords: ["rh", "ressources humaines", "conseil", "audit", "coaching", "management", "leadership", "recrutement"]
  },
  {
    id: "conseil-orientation",
    title: "Conseil et Orientation Professionnelle",
    content: "Bilan de compétences, coaching carrière, préparation aux entretiens, transition professionnelle, orientation professionnelle personnalisée.",
    url: "/conseil-orientation",
    category: "Ressources Humaines",
    keywords: ["conseil", "orientation", "bilan", "compétences", "carrière", "entretiens", "transition professionnelle"]
  },
  {
    id: "coaching-management",
    title: "Coaching Management et Leadership",
    content: "Développement du leadership, coaching d'équipes, management stratégique, gestion du changement, performance organisationnelle.",
    url: "/coaching-management",
    category: "Ressources Humaines",
    keywords: ["coaching", "management", "leadership", "équipes", "stratégique", "changement", "performance"]
  },

  // Formations
  {
    id: "formations",
    title: "Formations Professionnelles",
    content: "CV impactant, lettre de motivation, recherche d'emploi, transition vers la vie active, LinkedIn, gestion des ressources humaines. Packs de formation disponibles.",
    url: "/formations",
    category: "Formations",
    keywords: ["formations", "cv", "lettre motivation", "emploi", "linkedin", "transition", "vie active", "packs"]
  },
  {
    id: "cv-impactant",
    title: "Formation CV Impactant",
    content: "Apprenez à créer un CV qui se démarque, structure optimale, mots-clés efficaces, mise en forme professionnelle.",
    url: "/formations/cv-impactant",
    category: "Formations",
    keywords: ["cv", "impactant", "structure", "mots-clés", "professionnel", "candidature"]
  },
  {
    id: "lettre-motivation",
    title: "Formation Lettre de Motivation",
    content: "Maîtrisez l'art de la lettre de motivation percutante, personnalisation, structure, argumentation convaincante.",
    url: "/formations/lettre-motivation",
    category: "Formations",
    keywords: ["lettre", "motivation", "percutante", "personnalisation", "argumentation", "convaincante"]
  },
  {
    id: "linkedin-formation",
    title: "Formation Optimisation LinkedIn",
    content: "Optimisez votre profil LinkedIn, développez votre réseau professionnel, stratégies de visibilité et networking.",
    url: "/formations/linkedin",
    category: "Formations",
    keywords: ["linkedin", "profil", "réseau", "networking", "visibilité", "professionnel"]
  },
  {
    id: "recherche-emploi",
    title: "Formation Recherche d'Emploi",
    content: "Techniques de recherche d'emploi efficaces, stratégies de candidature, préparation aux entretiens, négociation salariale.",
    url: "/formations/recherche-emploi",
    category: "Formations",
    keywords: ["recherche", "emploi", "candidature", "entretiens", "négociation", "salaire"]
  },
  {
    id: "transition-vie-active",
    title: "Formation Transition vers la Vie Active",
    content: "Accompagnement pour réussir sa transition vers le monde professionnel, première expérience, insertion professionnelle.",
    url: "/formations/transition-vie-active",
    category: "Formations",
    keywords: ["transition", "vie active", "professionnel", "insertion", "première expérience"]
  },
  {
    id: "grh-formation",
    title: "Formation Gestion des Ressources Humaines",
    content: "Formation complète en GRH, recrutement, gestion des talents, droit du travail, paie, formation continue.",
    url: "/formations/grh",
    category: "Formations",
    keywords: ["grh", "gestion", "ressources humaines", "recrutement", "talents", "droit travail", "paie"]
  },

  // Immigration Canada
  {
    id: "immigration-permanente",
    title: "Immigration Permanente au Canada",
    content: "Accompagnement complet pour votre immigration permanente, Entrée Express, Programme des Travailleurs Qualifiés, PNP.",
    url: "/immigration-permanente",
    category: "Immigration",
    keywords: ["immigration", "permanente", "canada", "entrée express", "travailleurs qualifiés", "pnp"]
  },
  {
    id: "regroupement-familial",
    title: "Regroupement Familial Canada",
    content: "Réunissez votre famille au Canada, parrainage d'époux, enfants, parents, grands-parents. Procédures et accompagnement.",
    url: "/regroupement-familial",
    category: "Immigration",
    keywords: ["regroupement", "familial", "parrainage", "époux", "enfants", "parents", "grands-parents"]
  },
  {
    id: "etudes-canada",
    title: "Études au Canada",
    content: "Accompagnement pour vos études au Canada, choix d'établissement, demande de permis d'études, logement étudiant.",
    url: "/etudes-canada",
    category: "Immigration",
    keywords: ["études", "canada", "établissement", "permis", "logement", "étudiant", "université"]
  },

  // Services et autres
  {
    id: "services",
    title: "Nos Services",
    content: "Vue d'ensemble de tous nos services : ressources humaines, formations, immigration Canada, conseil en orientation.",
    url: "/services",
    category: "Services",
    keywords: ["services", "ressources humaines", "formations", "immigration", "conseil", "orientation"]
  },
  {
    id: "contact",
    title: "Contact",
    content: "Contactez UMEGREAT PRO pour vos projets d'immigration, formation ou conseil RH. Consultation personnalisée disponible.",
    url: "/contact",
    category: "Contact",
    keywords: ["contact", "consultation", "projet", "immigration", "formation", "conseil", "personnalisé"]
  },
  {
    id: "about",
    title: "À Propos",
    content: "Découvrez UMEGREAT PRO, notre expertise, notre mission d'accompagnement vers le succès professionnel et l'immigration.",
    url: "/about",
    category: "À Propos",
    keywords: ["à propos", "expertise", "mission", "accompagnement", "succès", "professionnel"]
  },
  {
    id: "eligibility",
    title: "Test d'Éligibilité Immigration",
    content: "Évaluez gratuitement votre éligibilité à l'immigration canadienne, test personnalisé selon vos critères.",
    url: "/eligibility",
    category: "Immigration",
    keywords: ["test", "éligibilité", "immigration", "gratuit", "évaluation", "critères", "personnalisé"]
  },
  {
    id: "faq",
    title: "Questions Fréquentes",
    content: "Réponses aux questions les plus fréquentes sur l'immigration, les formations et nos services RH.",
    url: "/faq",
    category: "FAQ",
    keywords: ["faq", "questions", "réponses", "immigration", "formations", "services"]
  }
];

export const categories = [
  "Tous",
  "Accueil",
  "Ressources Humaines", 
  "Formations",
  "Immigration",
  "Services",
  "Contact",
  "À Propos",
  "FAQ"
];