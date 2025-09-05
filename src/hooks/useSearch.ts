import { useState, useMemo } from 'react';
import { searchIndex, SearchItem } from '@/data/searchIndex';

export interface SearchResult extends SearchItem {
  score: number;
  highlightedTitle: string;
  highlightedContent: string;
}

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    setIsSearching(true);
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const results = searchIndex
      .map(item => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const contentLower = item.content.toLowerCase();
        const keywordsLower = item.keywords.map(k => k.toLowerCase());

        // Recherche exacte dans le titre (score élevé)
        if (titleLower.includes(query.toLowerCase())) {
          score += 100;
        }

        // Recherche par termes dans le titre
        searchTerms.forEach(term => {
          if (titleLower.includes(term)) {
            score += 50;
          }
          if (contentLower.includes(term)) {
            score += 20;
          }
          // Recherche dans les mots-clés
          keywordsLower.forEach(keyword => {
            if (keyword.includes(term)) {
              score += 30;
            }
          });
        });

        // Filtrage par catégorie
        if (selectedCategory !== 'Tous' && item.category !== selectedCategory) {
          score = 0;
        }

        return {
          ...item,
          score,
          highlightedTitle: highlightText(item.title, query),
          highlightedContent: highlightText(item.content, query)
        };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Limiter à 10 résultats

    setTimeout(() => setIsSearching(false), 100);
    return results;
  }, [query, selectedCategory]);

  const highlightText = (text: string, searchQuery: string): string => {
    if (!searchQuery.trim()) return text;
    
    const terms = searchQuery.split(' ').filter(term => term.length > 0);
    let highlightedText = text;
    
    terms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-primary/20 px-1 rounded">$1</mark>');
    });
    
    return highlightedText;
  };

  const clearSearch = () => {
    setQuery('');
    setSelectedCategory('Tous');
  };

  return {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    searchResults,
    isSearching,
    clearSearch,
    hasResults: searchResults.length > 0,
    hasQuery: query.trim().length > 0
  };
};