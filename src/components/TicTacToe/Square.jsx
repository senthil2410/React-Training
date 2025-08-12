import React, { useState } from "react";
import * as styles from "./Board.module.css"
const Square=({value})=>
{
    return (
        <>
         <button className={styles.square}>{value}</button>
        </>
        )
}

export default Square;