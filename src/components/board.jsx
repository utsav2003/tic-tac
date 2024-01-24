import React, { useState } from "react";
import Square from "./square";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXTurn] = useState(true);
  const [lastVal,setLastVal] = useState(-1);
  const handler = (index) => {
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXturn);
    setLastVal(index)
  };
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if(state[a] === null) {continue}
      if (state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return null;
  };
  const Undo = () =>{
    state[lastVal] = null;
    setIsXTurn(!isXturn);
    setLastVal(-1)
  }
  const Restart = () =>{
    setState(Array(9).fill(null))
  }
  const isWinner = checkWinner();
  return isWinner ? (
    <marquee  className="GameOver" scrollamount="20" onClick={Restart}>The winner is one & only {isWinner} </marquee>
    

  ) : (
    <>
      <div className="board-container">
        <div className="board-row">
          <Square
            func={() => {
              handler(0);
            }}
            value={state[0]}
          />
          <Square
            func={() => {
              handler(1);
            }}
            value={state[1]}
          />
          <Square
            func={() => {
              handler(2);
            }}
            value={state[2]}
          />
        </div>
        <div className="board-row">
          <Square
            func={() => {
              handler(3);
            }}
            value={state[3]}
          />
          <Square
            func={() => {
              handler(4);
            }}
            value={state[4]}
          />
          <Square
            func={() => {
              handler(5);
            }}
            value={state[5]}
          />
        </div>
        <div className="board-row">
          <Square
            func={() => {
              handler(6);
            }}
            value={state[6]}
          />
          <Square
            func={() => {
              handler(7);
            }}
            value={state[7]}
          />
          <Square
            func={() => {
              handler(8);
            }}
            value={state[8]}
          />
        </div>
        <div className="controls">
            <button onClick={Undo}>Undo</button>
            <button onClick={Restart} style={{marginLeft:'8px'}}>Restart</button>
        </div>
      </div>
    </>
  );
};
export default Board;
