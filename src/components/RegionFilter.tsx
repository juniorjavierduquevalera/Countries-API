"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

interface RegionFilterProps {
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const RegionFilter: React.FC<RegionFilterProps> = ({
  selectedRegion,
  setSelectedRegion,
  setSearchTerm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchClick = () => {
    setSearchTerm(localSearchTerm);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchTerm(localSearchTerm);
    }
  };

  const clearSearch = () => {
    setLocalSearchTerm("");
    setSearchTerm("");
  };

  const resetRegion = () => {
    setSelectedRegion("");
  };

  return (
    <section className="flex flex-col items-start lg:flex-row lg:justify-between container mx-auto my-2 px-6">
      <div className="flex items-center dark:bg-dark-blue rounded-md px-4 py-4 w-full md:w-2/5 shadow-xl mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="flex-1 border-none outline-none dark:bg-very-dark-blue-bg"
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearchClick} className="ml-2 text-gray-500">
          <FaSearch />
        </button>
        {localSearchTerm && (
          <button onClick={clearSearch} className="ml-2 text-gray-500">
            <FaTimes />
          </button>
        )}
      </div>
      <div className="flex justify-end">
        <div className="mb-4 relative min-w-48">
          <button
            onClick={toggleAccordion}
            className="w-full max-w-48 p-4 bg-gray-200 dark:bg-dark-blue text-left"
          >
            Filter by Region
          </button>
          {isOpen && (
            <ul className="absolute mt-2 left-0 w-full max-w-48 bg-white dark:bg-dark-blue z-10 border border-gray-200 dark:border-dark-blue rounded-b-lg">
              <li
                className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => {
                  resetRegion();
                  setIsOpen(false);
                }}
              >
                All Regions
              </li>
              {regions.map((region) => (
                <li
                  key={region}
                  className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    setSelectedRegion(region);
                    setIsOpen(false);
                  }}
                >
                  {region}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegionFilter;
