import React, { useMemo, useState } from "react";

const students=[
        "Senthil",
        "Kumar",
        "Thanagarj",
        "Suchind",
        "Suresh"
    ];

const FilterMemo=()=>
{
    
   const [studentdata,setStudentData]=useState("");

   const filterStudent=useMemo(()=>
   {
       console.log("Memo runs");

      return students.filter(student => 
       student.toLowerCase().includes(studentdata.toLowerCase())
)
   },[studentdata])

    return (
    <div>
      <input
        type="text"
        placeholder="Enter the Student"
        value={studentdata}
        onChange={(e) => setStudentData(e.target.value)}
      />

      <ul>
        {filterStudent.map((student,index)=>
        (
          <li key={index}>{student}</li>

        ))}
      </ul>
      </div> 
    ) 
}


export default FilterMemo;