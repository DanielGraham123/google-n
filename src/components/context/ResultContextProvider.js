import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
// 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk'

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("next google");

  // /vides,
  const getResults = async (type) => {
    setLoading(true);

    console.log(`url: ${baseUrl + type}`);

    const response = await fetch(`${baseUrl + type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });

    const data = await response.json();
    console.log(`${type}: ${data}`);

    setResults(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
