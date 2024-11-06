"use client";

import { useEffect, useState } from "react";
import { Suggestion } from "./Suggestion";
export function SuggestionsList() {
  const [suggestions, setSuggestions] = useState([]);

  // Function to fetch and parse JSON data from the public folder
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/suggestions.json"); // Assuming the JSON file is in the public folder
      const data = await response.json();
      setSuggestions(data.data); // Set the fetched data
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 p-6">
      {suggestions.map((suggestion) => (
        <Suggestion
          key={suggestion.Id}
          suggestion={{
            name: suggestion.Name,
            description: suggestion.Description,
            rating: suggestion.Rating,
            price: 0, // Placeholder, as there's no price data in the JSON, but it can be updated in the future
            trailerUrl: suggestion.Trailer,
            link: suggestion.Link,
            category: suggestion.Category,
            screenshot: suggestion.Screenshot,
          }}
        />
      ))}
    </div>
  );
}
