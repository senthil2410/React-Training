import React, { useState } from "react";
import Square from "./Square";
import * as styles from "./Board.module.css"
const Board=()=>
{

    const [square]=useState(Array(9).fill(1));

    return(
    <div className={styles.board}>
      {square.map((value, index) => (
        <Square key={index} value={value} />
      ))}
    </div>

    );
}
export default Board;