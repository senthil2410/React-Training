import React, { useState } from "react";
import * as styles from "./Fragment.module.css";
const DatePicker=({date,onChange})=>
{
    return(
        <>
        <input type="date" 
         name="date" 
         onChange={(e)=>onChange(e.target.value)}
         value={date}
         className={styles.dateinput}
         required/>
         </>
    )
}

export default DatePicker;