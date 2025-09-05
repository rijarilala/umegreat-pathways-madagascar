import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SearchResult } from '@/hooks/useSearch';
import { ArrowRight, FileText, Search } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  onResultClick?: () => void;
  showCategories?: boolean;
}

export const SearchResults = ({ 
  results, 
  isLoading, 
  onResultClick,
  showCategories = false 
}: SearchResultsProps) => {
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-2">
            <Search className="animate-spin" size={20} />
            <span>Recherche en cours...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (results.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center">
          <FileText className="mx-auto mb-4 text-muted-foreground" size={48} />
          <p className="text-muted-foreground">Aucun résultat trouvé</p>
          <p className="text-sm text-muted-foreground mt-2">
            Essayez avec des mots-clés différents
          </p>
        </CardContent>
      </Card>
    );
  }

  const groupedResults = showCategories 
    ? results.reduce((acc, result) => {
        if (!acc[result.category]) {
          acc[result.category] = [];
        }
        acc[result.category].push(result);
        return acc;
      }, {} as Record<string, SearchResult[]>)
    : { "Résultats": results };

  return (
    <Card className="w-full max-h-96 overflow-auto">
      <CardContent className="p-0">
        {Object.entries(groupedResults).map(([category, categoryResults], categoryIndex) => (
          <div key={category}>
            {showCategories && Object.keys(groupedResults).length > 1 && (
              <div className="px-4 py-3 bg-muted/50">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                  {category}
                </h4>
              </div>
            )}
            
            {categoryResults.map((result, index) => (
              <div key={result.id}>
                <Link
                  to={result.url}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    onResultClick?.();
                  }}
                  className="block p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 
                          className="font-medium text-foreground line-clamp-1"
                          dangerouslySetInnerHTML={{ 
                            __html: result.highlightedTitle 
                          }}
                        />
                        <Badge variant="secondary" className="text-xs">
                          {result.category}
                        </Badge>
                      </div>
                      <p 
                        className="text-sm text-muted-foreground line-clamp-2"
                        dangerouslySetInnerHTML={{ 
                          __html: result.highlightedContent 
                        }}
                      />
                      <div className="flex items-center mt-2 text-xs text-primary">
                        <span>Voir la page</span>
                        <ArrowRight size={12} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                {index < categoryResults.length - 1 && (
                  <Separator className="mx-4" />
                )}
              </div>
            ))}
            
            {categoryIndex < Object.keys(groupedResults).length - 1 && showCategories && (
              <Separator className="my-2" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};