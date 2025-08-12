import React, { use, useState } from "react";
import Profile from "../Profile";
import List from "../List/List";
import { Fragment } from "react";
import Displayname from "./DisplayingName";
import DisplayPlace from "./DisplayingPlace";
import DatePicker  from "./DatePicker";
import * as styles from "./Fragment.module.css";

const person=[
{ id: 1, name: "Senthil", place: "Palani" },
  { id: 2, name: "Kumar", place: "Dharapuram" },
  { id: 3, name: "Surya", place: "Coimbatore" },
  { id: 4, name: "Suchind", place: "Nagercoil" },
]

const Fragments=()=>
{
   const[start,setStart]=useState();
   const[end,setEnd]=useState();

    return(
  
     <>
      {person.map(({ id, name, place }) => (
        <div key={id} className={styles.info}>
          <Displayname name={name} /> - <DisplayPlace place={place} />
        </div>
      ))}

      <div className={styles.datepicker}>
           <h1 className={styles.header}>Date picker</h1>
         From 
         <DatePicker date={start} onChange={setStart}  />
         To 
         <DatePicker date={end} onChange={setEnd} />
      </div>
    </>
    
 
)};

export default Fragments;
