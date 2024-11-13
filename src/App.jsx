import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "../components/MovieDisplay";
import Form from "../components/Form";

function App() {
  const apiKey = "";

  const movieList = [
    "Harry Potter",
    "The Grinch",
    "Mickey Mouse",
    "Ghostbusters",
    "Bruce Almighty",
  ];
  const randomNumber = Math.ceil(Math.random() * 5);

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie(movieList[randomNumber - 1]);
  }, []);

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
