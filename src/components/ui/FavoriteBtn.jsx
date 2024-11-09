"use client";

import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function FavoriteBtn(product) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorite(favorites.some((fav) => fav.id === product.id));
  }, [product.id, favorite]);

  const addToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (favorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setFavorite(!favorite);
  };

  return (
    <div className="absolute top-5 right-7 sm:top-5 sm:right-3 md:top-6 md:right-8 lg:top-5 lg:right-5">
      <button
        onClick={addToFavorite}
        className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {!favorite ? (
          <FaRegHeart className="w-4 h-4 text-gray-600 hover:text-gray-800 transition-colors duration-200" />
        ) : (
          <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-forest-green-600 hover:text-forest-green-700 transition-colors duration-200" />
        )}
      </button>
    </div>
  );
}
