import React from "react";
import { useState,useEffect} from "react";
import Card from "./Card.jsx"
const countdown=()=>{

  

    const [inputvalue,setInputvalue]=useState("");
	const [down,setDown]=useState(0);

	useEffect(()=>{
		setInterval(()=>{
		   setDown(preCount =>preCount-1);
	
		},1000);
	},[]);
   

return (
	<div>
	<h2>{down}</h2>

	
	<input
	  type="number"
	  onChange={e => setInputvalue(e.target.value)}
	  value={inputvalue}
	  placeholder="down"
	/>
  </div>
	
	);
};





export default  countdown ;