import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "../components/MovieDisplay";
import Form from "../components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <MovieDisplay />
    </div>
  );
}

export default App;
