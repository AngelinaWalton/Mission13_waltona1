import { useState } from "react";
import data from "../MovieData.json";

// set a const
const movies = data.MovieData;

function MovieList() {
  const [ListOMovies, setListOMovies] = useState(movies);

  const addMovie = () => {
    setListOMovies([
      ...movies,
      {
        Category: "Action/Adventure",
        Title: "Batman",
        Year: 1989,
        Director: "Tim Burton",
        Rating: "PG-13",
        Edited: "No",
      },
    ]);
  };

  return (
    <>
      <div
        className="text-center"
        style={{ padding: "60px", backgroundColor: "#f5f5f5" }}
      >
        <h3>Welcome to Joel Hiltons Movie Collection!</h3>
      </div>
      <div
        className="text-center"
        style={{ padding: "0 20px", backgroundColor: "#f5f5f5" }}
      >
        <table
          className="table"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {ListOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-primary"
        onClick={addMovie}
      >
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
