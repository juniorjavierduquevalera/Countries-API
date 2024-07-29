import BackButton from "../../../components/BackButton";
import { Country } from "../../../types/Country";
import data from "../../../data.json";
import Image from "next/image";
import Link from "next/link";

interface CountryDetailProps {
  params: {
    slug: string;
  };
}

const normalizeString = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "")
    .toLowerCase();
};

export default async function CountryDetail({ params }: CountryDetailProps) {
  const { slug } = params;

  // Convertir el slug en nombre del país
  const countryName = decodeURIComponent(slug.replace(/-/g, " "));

  // Filtrar los datos para encontrar el país que coincide con el nombre
  const filteredResults: Country[] = (data as Country[]).filter(
    (country) => normalizeString(country.name) === normalizeString(countryName)
  );

  if (filteredResults.length === 0) {
    return <div>No country found for the given slug.</div>;
  }

  const country = filteredResults[0];

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 min-h-[calc(100vh-200px)] items-center">
        <div className="relative w-full lg:pr-10 h-64 sm:h-80 md:h-96 lg:h-120 flex items-center justify-center md:justify-start">
          <div className="w-full aspect-video relative">
            <Image
              src={country.flag}
              alt={`Flag of ${country.name}`}
              layout="fill"
              objectFit="cover"        
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold">{country.name}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-dark-gray dark:text-white text-sm">
                <strong>Native Name:</strong> {country.nativeName}
              </p>
              <p className="text-dark-gray dark:text-white text-sm">
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString("en-US")}
              </p>
              <p className="text-dark-gray dark:text-white text-sm">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="text-dark-gray dark:text-white text-sm">
                <strong>Sub Region:</strong> {country.subregion}
              </p>
              <p className="text-dark-gray dark:text-white text-sm">
                <strong>Top Level Domain:</strong>{" "}
                {country.topLevelDomain?.join(", ")}
              </p>
            </div>
            <div>
              <p className="text-dark-gray dark:text-white text-sm">
                <strong>Languages:</strong>{" "}
                {country.languages?.map((lang) => lang.name).join(", ")}
              </p>
              <p className="text-dark-gray dark:text-white text-sm">
                <strong>Currencies:</strong>{" "}
                {country.currencies
                  ?.map((curr) => `${curr.name} (${curr.symbol})`)
                  .join(", ")}
              </p>
              <p className="text-dark-gray dark:text-white text-sm">
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
          </div>
          <div className="mt-8 w-full">
            <p className="text-dark-gray dark:text-white text-lg mb-2">
              <strong>Border Countries:</strong>
            </p>
            <div className=" text-dark-gray dark:text-white text-sm flex flex-wrap gap-2">
              {country.borders?.length
                ? country.borders.map((border) => (
                    <Link
                      key={border}
                      href={`/country/${normalizeString(border)}`}
                      passHref
                    >
                      <button className="shadow-lg px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                        {border}
                      </button>
                    </Link>
                  ))
                : "None"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
