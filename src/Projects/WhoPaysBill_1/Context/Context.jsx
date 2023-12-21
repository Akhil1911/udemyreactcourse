import React, { useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [stage, setStage] = useState(1);
  const [players, setPlayers] = useState([]);
  const [looserName, setlooserName] = useState("");

  const getPlayerNameHandler = (name) => {
    // setPlayers(name)  Aama first value null aave che
    players.push(name);
  };

  const removePlayerName = (id) => {
    const newArr = players;
    players.splice(id, 1);
    setPlayers(newArr);
    console.log(players);
  };


  const getNextStage = () => {
    if (players.length >= 2) {
      setStage(2);
      getLooserName();
    } else {
      alert("Minimum 2 Names Are Required");
    }
  };

  const getLooserName = () => {
    setlooserName("");
    setTimeout(() => {
      setlooserName(players[Math.floor(Math.random() * players.length)]);
    }, 3000);
    console.log("Random Player :" + looserName);
  };

  const resetGame = () => {
    setStage(1);
    setPlayers([]);
    setlooserName("");
  };

  const backToStage1 = () => {
    setStage(1);
  };

  return (
    <AppContext.Provider
      value={{
        stage,
        players,
        getPlayerNameHandler,
        removePlayerName,
        getNextStage,
        looserName,
        getLooserName,
        resetGame,
        backToStage1,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
