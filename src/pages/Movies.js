import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & ul {
    list-style-type: none;
    //padding: 0;
  }

  & .movie {
    display: flex;
    flex-direction: column;
    justify-content: center;
    aign-items: center;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
  }

  & li {
  }
  & .movieImg {
    width: 30%;
    height: 30%;
  }

  & .moviePara {
    font-size: 20px;
    font-weight: 800;
  }
`;

export default function Movies() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url = c;
    const requestQRCode = async () => {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        setError("Something went wrong!");
      }
      const res = await response.json();
      setMovies(res?.movies);
      setIsLoading(false);
    };
    requestQRCode();
  }, [id]);
  const moviesContent = (
    <ul>
      {movies.map((movie) => (
        <li>
          <div className="movie">
            <img className="movieImg" src={movie.Image} alt={movie.Title} />
            <p className="moviePara">{movie.Title}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Div>
        {isLoading && <Loader />}
        {!isLoading && !error && moviesContent}
        {!isLoading && error && <h1>{error}</h1>}
      </Div>
    </>
  );
}
