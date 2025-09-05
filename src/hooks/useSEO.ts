import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOData {
  title?: string;
  description?: string;
}

export const useSEO = (seoData?: SEOData) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    // Update document title
    const title = seoData?.title || t('hero.title');
    document.title = `UMEGREAT PRO - ${title}`;

    // Update meta description
    const description = seoData?.description || t('hero.subtitle');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language, seoData?.title, seoData?.description, t]);
};