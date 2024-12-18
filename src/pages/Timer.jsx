import React, { useState, useEffect } from "react";
import { use } from "react";
const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 60);

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  };
  return (
    <div className=" bg-zinc-900 flex justify-center items-center p-4 h-screen">
      <div className=" bg-white flex flex-col gap-6 shadow-lg p-8 rounded-lg ">
        <div className="bg-lime-500 flex justify-center items-center p-4 rounded-lg">
          {getFormattedTime(time)}
        </div>
        <div class="flex gap-4 items-center justify-center p-6">
          <div class="">
            <button className="bg-blue-700 px-4 py-2 rounded-lg">start</button>
          </div>
          <div class="">
            <button className="bg-red-700 p-2 px-4 py-2 rounded-lg">
              stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
