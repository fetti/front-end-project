import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Card {
  name: string;
  description?: string;
  color?: string;
  id: string | number;
  handleClear: (id: string | number) => void;
}

const Card = ({ name, description, color, id, handleClear }: Card) => {
  function handleProjectClick() {
    handleClear(id);
  }

  // Projekt kezdőbetűinek kiszedése. Első két szó kezdőbetűje, vagy ha egy jó, akkor az első két karakter
  const getInitials: (string: string) => string = (string) => {
    const stringToArray = string.split(" ");
    return stringToArray.length == 1
      ? (stringToArray[0][0] + stringToArray[0][1]).toUpperCase()
      : (stringToArray[0][0] + stringToArray[1][0]).toUpperCase();
  };

  return (
    <>
      <div
        className={`flex items-center w-3xl  bg-white shadow-xl rounded-lg border border-gray-300 relative hover:shadow-md`}
      >
        {
          <button
            onClick={handleProjectClick}
            className='absolute top-0 right-0 text-3xl text-red-400 rounded-lg flex justify-center items-center w-[20px] h-[20px] p-3'
          >
            &times;
          </button>
        }
        <img
          src={`https://via.placeholder.com/500/${color}/ffffff/?text=${getInitials(
            name
          )}`}
          className='w-1/3 h-full object-cover rounded-tl-md rounded-bl-md'
        />

        <div className='w-2/3 p-12 flex flex-col h-full '>
          <h2 className='text-4xl font-bold text-center'>{name}</h2>

          <div className='my-4'>
            {description ? (
              <p className='w-full'>{description.slice(0, 100)}... </p>
            ) : null}
          </div>

          <Link
            className={`self-end place-self-end mt-auto`}
            to={`/projects/${id}`}
          >
            <button className='border-2 border-blue-500 rounded px-4 py-1 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white outline-0'>
              Megnézem
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
