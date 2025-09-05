import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SearchResults } from './SearchResults';
import { useSearch } from '@/hooks/useSearch';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  variant?: 'inline' | 'modal';
}

export const SearchBar = ({ 
  className = "", 
  placeholder = "Rechercher...",
  variant = 'modal' 
}: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    query, 
    setQuery, 
    searchResults, 
    isSearching, 
    clearSearch, 
    hasQuery 
  } = useSearch();

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    clearSearch();
  };

  if (variant === 'inline') {
    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {hasQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 h-auto"
            >
              <X size={16} />
            </Button>
          )}
        </div>
        {hasQuery && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1">
            <SearchResults 
              results={searchResults} 
              isLoading={isSearching}
              onResultClick={() => clearSearch()}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={handleSearchClick}
        className={`relative ${className}`}
      >
        <Search size={16} className="mr-2" />
        <span className="hidden sm:inline">Rechercher</span>
        <span className="sm:hidden">Recherche</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Recherche sur le site</span>
              <Button variant="ghost" size="sm" onClick={handleClose}>
                <X size={18} />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 flex-1 overflow-hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Tapez votre recherche..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-10"
                autoFocus
              />
              {hasQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSearch}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 h-auto"
                >
                  <X size={16} />
                </Button>
              )}
            </div>

            <div className="flex-1 overflow-auto">
              <SearchResults 
                results={searchResults} 
                isLoading={isSearching}
                onResultClick={handleClose}
                showCategories
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};