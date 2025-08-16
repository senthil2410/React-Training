import React, { useState } from "react";
import * as styles from "./Square.module.css"
const Square=({value,onClick})=>
{
    return (
        
         <button className={styles.squares} onClick={onClick}>
            {value}
        </button>
        
        )
}

export default Square;