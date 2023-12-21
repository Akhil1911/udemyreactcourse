import React,{useContext} from 'react'
import { AppContext } from './Context/Context';
const Stage_2 = () => {

  const { looserName, getLooserName, resetGame, backToStage1 } =
    useContext(AppContext);

  return (
    <>
      <div className="text-center mt-4">
        <h1>And The Looser Is...</h1>
        {looserName ? (
          <h1>{looserName}</h1>
        ) : (
          <h3>Please Wait ... 😁</h3>
        )}{" "}
        <button
          className="btn btn-info m-3"
          onClick={() => {
            getLooserName();
          }}
        >
          Start Over
        </button>
        <button
          className="btn btn-info m-3"
          onClick={() => {
            resetGame();
          }}
        >
          Reset Game
        </button>
        <button
          className="btn btn-info m-3"
          onClick={() => {
            backToStage1();
          }}
        >
          Add A Name
        </button>
      </div>
    </>
  );
}

export default Stage_2