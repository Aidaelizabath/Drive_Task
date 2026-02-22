import React, { useEffect, useState } from 'react';
import back_arrow from '../../assets/cards/back.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          setApiData({
            name: "No Trailer Found",
            key: "",
            published_at: "",
            type: "N/A"
          });
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative px-4">

      {/* Back Button */}
      <img
        src={back_arrow}
        alt="Go back"
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 w-12 cursor-pointer hover:scale-110 transition"
      />

      {/* Trailer */}
      {apiData.key ? (
        <iframe
          className="w-full max-w-5xl h-[60vh] md:h-[75vh] rounded-xl"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="Trailer"
          allowFullScreen
        />
      ) : (
        <p className="text-gray-400 text-lg">
          Trailer not available for this movie.
        </p>
      )}

      {/* Info Section */}
      <div className="flex flex-wrap gap-6 justify-center mt-6 text-gray-300 text-sm md:text-base">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  );
};

export default Player;