import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
const countdown = () => {
  
  const [down, setDown] = useState(0);
  const [intervalId, setIntervalID] = useState(0);
  const [newcountdown, setnewcountdown] = useState([]);
  const [bolean, setbolean] = useState(false);

 

  useEffect(() => {
    setnewcountdown(down.toString().split("").reverse());
  }, [down]);

  useEffect(() => {
    if (bolean) {
      let newintervalId = setInterval(() => {
        setDown((preCount) => preCount - 1);
      }, 1000);
      setInterval(newintervalId);
    } else stopInterval();
  }, [bolean]);

  useEffect(() => {
    if (down < 0) {
      setbolean(false);
      alert("la cuenta regresiva a terminado");
	 setDown(0);
	  
	 
    }
  }, [down]);

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalID(0);
  };

  const cuentaAtras = () => {
    let inputValue = document.querySelector("input");
    if (inputValue.value > 0) {
      setDown((down) => (down = inputValue.value));
      setbolean(true);
      inputValue.value = "";
    } else alert("El numero debe ser mayor que 0");
	stopInterval;
  };

  return (
    <div className="">
      <div className=" d-flex justify-content-center">
        <div className="text-center   d-flex  justify-content-center mt-4  mx-5px fixed-top">
          <Card number={<i className="fa-regular fa-clock" />} />
          <Card number={newcountdown[5]} />
          <Card number={newcountdown[4]} />
          <Card number={newcountdown[3]} />
          <Card number={newcountdown[2]} />
          <Card number={newcountdown[1]} />
          <Card number={newcountdown[0]} />
        </div>
        <div className=" d-flex aling-items-center">
          <input type="number" id="inputTime" className="form-control" />
          <button
            type="button"
            className="btn btn-success"
            onClick={cuentaAtras}
          >
            setDown
          </button>
		  <button
            type="button"
            className="btn btn-danger"
            onClick={stopInterval}
          >
            reset
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default countdown;
