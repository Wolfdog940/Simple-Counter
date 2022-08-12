import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import Countdown from "./Countdown.jsx";

const counter = () => {
  const [count, setCount] = useState(0);
  const [newcount, setnewcount] = useState([]);

  useEffect(() => {
    setnewcount(count.toString().split("").reverse());
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      setCount((preCount) => preCount + 1);
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      <div className="count mt-0">
        <Countdown />
      </div>

      <div className="text-center   d-flex  justify-content-center mt-4  mx-5px fixed-bottom">
        <Card number={<i className="fa-regular fa-clock" />} />
        <Card number={newcount[5]} />
        <Card number={newcount[4]} />
        <Card number={newcount[3]} />
        <Card number={newcount[2]} />
        <Card number={newcount[1]} />
        <Card number={newcount[0]} />
      </div>
    </div>
  );
};

export default counter;
