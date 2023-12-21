import { AppContext } from "./Context/Context";
import React , {useContext, useState} from "react";
import TextField from "@mui/material/TextField";

const Stage_1 = () => {

  const { getPlayerNameHandler, players, removePlayerName, getNextStage } =
    useContext(AppContext);

  const [tempName, settempName] = useState("");

  const getPlayerName = () => {
    if (tempName != "" && tempName.length >= 2 && isNaN(tempName)) {
      getPlayerNameHandler(tempName)
      settempName("")
    } else {
      if (tempName == "") {
        alert("Please Enter A Name");
        settempName("");
      } else if (tempName.length < 2) {
        alert("Name must be of minimum 2 characters");
        settempName("");
      }
      else if (!isNaN(tempName)) {
        alert("Name Must Have Atleast One Character");
        settempName("");
      }
    }
  }
 
  return (
    <>
      <div className="text-center m-4">
        <h1>Who Will Pay The Bill?</h1>
        <TextField
          className="m-4"
          variant="standard"
          label="Add Name Here..."
          value={tempName}
          onChange={(e) => {
            settempName(e.target.value);
          }}
        />{" "}
        <br />
        <button
          className="btn btn-dark m-4"
          onClick={() => {
            getPlayerName();
          }}
        >
          Add Name
        </button>
        {players.length >= 1 ? (
          <button
            className="btn btn-dark m-4 "
            onClick={() => {
              getNextStage();
            }}
          >
            Next
          </button>
        ) : null}
        <hr />
        {players.map((value, ind) => (
          <div key={ind}>
            <button className="btn btn-primary m-2" disabled={true}>
              {value }
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                removePlayerName(ind);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stage_1;
