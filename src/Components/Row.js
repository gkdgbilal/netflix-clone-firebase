import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../Actions/axios';
import '../Styles/Row.css';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const baseUrl = 'https://api.themoviedb.org/3';
  useEffect(() => {
    async function fetchData() {
      //   const request = await axios.get(fetchUrl);
      const request = await axios.get(`${baseUrl}${fetchUrl}`);
      setMovies(request.data.results);
      //   console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: true
    }
  };

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row_poster(s) */}
        {movies.map(movie => (
          <img
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
