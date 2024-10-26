"use client";

import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function FavoriteBtn(product) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorite(favorites.some((fav) => fav.id === product.id));
    console.log("favorite", favorite);
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
    <div className="absolute top-7 left-[175px] bg-white p-2 rounded-full">
      {!favorite ? (
        <FaRegHeart
          onClick={addToFavorite}
          className="cursor-pointer"
          size={18}
        />
      ) : (
        <FaHeart
          onClick={addToFavorite}
          className="text-forest-green-600 cursor-pointer"
          size={18}
        />
      )}
    </div>
  );
}
