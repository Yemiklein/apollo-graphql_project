import React, { useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      title
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query Movie($title: String!) {
    movie(title: $title) {
      title
      year
      rating
      isInTheaters
    }
  }
`;

function DisplayData() {
  const [movieSearched, setMovieSearched] = useState("");
  const { loading, error, data } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  if (data) {console.log(data)}
  if (movieError) {console.log(movieError)}

  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Username: {user.username}</p>
              <p>Nationality: {user.nationality}</p>
            </div>
          );
        })}

      {movieData &&
        movieData.movies.map((movie) => {
          return <p>Movie Title: {movie.title} </p>;
        })}
      <div>
        <input
          type="text"
          placeholder="Enter movie title"
          onChange={(e) => setMovieSearched(e.target.value)}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                title: movieSearched,
              },
            });
          }}
        >
          {" "}
          Submit
        </button>
        <div>
          {movieSearchedData && (
            <div>
              {" "}
              <p>Title: {movieSearchedData.movie.title}</p>{" "}
              <p>Year: {movieSearchedData.movie.year}</p>{" "}
              <p>Rating: {movieSearchedData.movie.rating}</p>{" "}
              <p>In Theaters: {movieSearchedData.movie.isInTheaters}</p>{" "}
            </div>
          )}
          {movieError&& <p>Sorry there's an error fetching the data 🥲</p>}
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
