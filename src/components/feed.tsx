"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../data.json";
import RegionFilter from "./RegionFilter";

const Feed = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((country) => {
    return (
      (selectedRegion ? country.region === selectedRegion : true) &&
      (searchTerm
        ? country.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
    );
  });

  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/ /g, "-");
  };

  return (
    <div className="my-4">
      <RegionFilter
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        setSearchTerm={setSearchTerm}
      />
      {filteredData.length === 0 ? (
        <p className="text-center">No results found...</p>
      ) : (
        <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-8 xl:gap-x-0">
          {filteredData.map((country) => (
            <li
              key={country.alpha3Code}
              className="bg-white min-w-[320px] max-w-[320px] md:min-w-[280px] md:max-w-[280px] dark:bg-dark-blue rounded-lg shadow-lg overflow-hidden mx-auto pb-6"
            >
              <Link href={`/country/${createSlug(country.name)}`}>
                <Image
                  src={country.flags.svg}
                  alt={`Flag of ${country.name}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  loading = 'lazy' 
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4 text-very-dark-blue-text dark:text-white">
                    {country.name}
                  </h2>
                  <div>
                    <p className="text-dark-gray dark:text-white text-sm">
                      <strong>Population:</strong>{" "}
                      {country.population.toLocaleString("en-US")}
                    </p>
                  </div>

                  <p className="text-dark-gray dark:text-white text-sm">
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p className="text-dark-gray dark:text-white text-sm">
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Feed;
