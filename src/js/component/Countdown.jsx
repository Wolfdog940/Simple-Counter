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
	<div className="">
	
  <div className="row d-flex justify-content-center">
  <div className="text-center   d-flex  justify-content-center mt-4  mx-5px fixed-top">
        <Card number={<i className="fa-regular fa-clock" />} />
        <Card number={down} />
        <Card number={down} />
        <Card number={down} />
        <Card number={down} />
        <Card number={down} />
        <Card number={down} />
      </div>
    
</div>
	
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