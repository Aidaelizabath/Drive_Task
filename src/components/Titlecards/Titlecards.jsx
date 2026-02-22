import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Titlecards = ({ title, category, setHoveredTrailer }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'now_playing'
      }?language=en-US&page=1`,
      options
    )
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    const current = cardsRef.current;
    current?.addEventListener('wheel', handleWheel);

    return () => current?.removeEventListener('wheel', handleWheel);
  }, [category]);

  const fetchTrailer = (movieId) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    )
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(
          vid => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailer) {
          setHoveredTrailer(trailer.key);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="mt-12 mb-8 md:mt-5 md:mb-0">
      {/* Section Title */}
      <h2 className="mb-2 text-xl md:text-2xl font-semibold">
        {title ? title : 'Popular on Netflix'}
      </h2>

      {/* Cards Row */}
      <div
        ref={cardsRef}
        className="flex gap-2 overflow-x-auto overflow-y-hidden whitespace-nowrap pb-2 scroll-smooth scrollbar-hide"
      >
        {apiData
          .filter(card => card.backdrop_path)
          .map(card => (
            <Link
              to={`/player/${card.id}`}
              key={card.id}
              onMouseEnter={() => fetchTrailer(card.id)}
              onMouseLeave={() => setHoveredTrailer(null)}
              className="relative flex-shrink-0 group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
                className="w-[165px] sm:w-[200px] md:w-[240px] rounded cursor-pointer transition-transform duration-300 group-hover:scale-105"
              />

              <p className="absolute bottom-2 right-2 text-white text-[10px] sm:text-xs md:text-sm">
                {card.original_title}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Titlecards;