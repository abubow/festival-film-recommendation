"use client";

import { Card } from "flowbite-react";
import { Magnet } from "lucide-react";

export function Suggestion({ suggestion }) {
  const { name, description, rating, price, trailerUrl, link, category, screenshot } = suggestion;

  // Function to render stars based on rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const stars = Array(5)
      .fill(null)
      .map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 ${index < fullStars ? "text-yellow-300" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
    return stars;
  };

  return (
    <Card
      className="max-w-full bg-night-200 text-floral_white-500"
      imgAlt={`Image of ${name}`}
      imgSrc={screenshot[0] || "/images/products/sample-product.jpg"} // Use first screenshot as the image
    >
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-semibold tracking-tight text-floral_white-800 dark:text-floral_white">
          {name}
        </h5>
        <Magnet className="text-burgundy-500" />
      </div>
      <p className="font-normal text-gray-200 dark:text-floral_white-400">
        {description.length > 100 ? `${description.slice(0, 100)}...` : description}
      </p>
      <div className="mb-5 mt-2.5 flex items-center">
        {renderStars()}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {rating.toFixed(1)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {trailerUrl && (
            <a
              href={trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-burgundy-400 px-3 py-1 text-center text-sm font-medium text-floral_white-500 hover:bg-burgundy-600 focus:outline-none focus:ring-4 focus:ring-burgundy-300"
            >
              Trailer
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-burgundy-400 px-3 py-1 text-center text-sm font-medium text-floral_white-500 hover:bg-burgundy-600 focus:outline-none focus:ring-4 focus:ring-burgundy-300"
            >
              More Info
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
