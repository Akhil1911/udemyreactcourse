import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addMovie,
  setTitle,
  setRatings,
  deleteMovie,
  editBoolFunc,
  UpdateMovie,
} from "./Projects/ReducerMovie/movies";
import "./App.css";
import { TextField, Button } from "@mui/material";
const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const title = useSelector((state) => state.movies.title);
  const rating = useSelector((state) => state.movies.rating);
  const editBool = useSelector((state) => state.movies.editBool);
  const dispatch = useDispatch();

  // const [movieTitle, setmovieTitle] = useState("");
  // const [movieRat, setmovieRat] = useState("");

  const getMovieDetails = () => {
    // dispatch(addMovie({ title: movieTitle, rating: movieRat }));
    // setmovieTitle("")
    // setmovieRat("")
  };

  // console.log(movieRat);
  // console.log(movieTitle);
  // console.log(titRate);

  return (
    <>
      <br />
      <h1 style={{ color: "#254061" }}>Add Movies</h1>
      <br /> <hr />
      <table className="movieTable">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((val, ind) => {
            return (
              <tr key={ind}>
                <td>{val.srno}</td>
                <td>{val.title}</td>
                <td>{val.rating}</td>
                <td>
                  <button
                    className="btn btn-success m-2"
                    onClick={() => dispatch(editBoolFunc(val))}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteMovie(ind))}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br /> <hr />
      <TextField
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
        label="Add Movie Name"
        variant="standard"
        autoComplete="off"
      />
      <br /> <br />
      <TextField
        type={"number"}
        value={rating}
        onChange={(e) => dispatch(setRatings(e.target.value))}
        label="Add Movie Ratings"
        autoComplete="off"
        variant="standard"
      />
      <br />
      {editBool ? (
        <button className="btn btn-primary m-4" onClick={() => dispatch(UpdateMovie())}>Update Movie</button>
      ) : (
        <Button
          sx={{ m: 4 }}
          variant="contained"
          color="success"
          onClick={() => dispatch(addMovie())}
          disabled={title && rating != "" ? false : true}
        >
          Add Movie
        </Button>
      )}
    </>
  );
};

export default App;
