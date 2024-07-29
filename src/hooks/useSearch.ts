import { useState, useEffect } from 'react';
import data from '../data.json';
import { Country } from '../types/Country';

const useSearch = (initialTerm: string = '') => {
  const [searchTerm, setSearchTerm] = useState(initialTerm);
  const [filteredResults, setFilteredResults] = useState<Country[]>([]);

  useEffect(() => {
    const handleSearch = (term: string) => {
      if (term.trim() === '') {
        setFilteredResults([]);
      } else {
        const results = (data as Country[]).filter((country) =>
          country.name.toLowerCase() === term.toLowerCase()
        );
        setFilteredResults(results);
      }
    };

    handleSearch(searchTerm);
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredResults,
  };
};

export default useSearch;

