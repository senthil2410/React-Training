import React, { useState } from "react";
import Square from "./Square";
import * as styles from "./Board.module.css"
const Board=()=>
{

    const [square,setSquare]=useState(Array(9).fill(null));
    const [isNext,setIsNext]=useState(true);


  const calculateWinner=(squares)=>
  {
    const winninglogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6], 
    ];

    for(let i=0;i<winninglogic.length;i++)
    {
         const [a,b,c]=winninglogic[i];

         if(squares[a]&&squares[a]===squares[b]&&squares[c]===squares[a])
         {
           return squares[a];
         }

    }
      return null;
  }

    const winner=calculateWinner(square);
     
    const status=winner?`Winner is ${winner}`
                       :!square.includes(null)
                       ?'It is draw match'
                       :`Next Player ${isNext?"X":"O"}`


    const handleClick=(index)=>
    {
        if(winner||square[index])
          return;

        const newsquare=[...square];
        newsquare[index]=isNext?'X':'O';
         setSquare(newsquare);
         setIsNext(!isNext);

  }

  const handleReset=()=>
  {
    setSquare(Array(9).fill(null));
  }


    return(
  <div className={styles.container}>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        {square.map((value, index) => (
          <Square key={index} value={value}  onClick={()=>handleClick(index)}/>
        ))}
      </div>
      <button className={styles.reset} onClick={handleReset}>
        Reset Game
      </button>
     
  </div>

    );
}
export default Board;