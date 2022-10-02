import React, { useEffect, useState } from "react";

interface StepControl {
  handleClick: (e: any, direction: string) => void;
  currentStep: number;
  steps: string[];
  validate: boolean;
}

const StepperControl: React.FC<StepControl> = ({
  handleClick,
  currentStep,
  steps,
  validate,
}) => {
  return (
    <div className='flex justify-around mt-4 mb-8'>
      {/** Vissza */}
      <button
        className={`bg-white text-red-400 uppercase rounded-lg font-semibold cursor-pointer border-red-300 border-2 hover:bg-red-500 hover:text-white transition duration-200 ease-in px-4 py-1 ${
          currentStep === 1
            ? "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-red-400"
            : ""
        }`}
        onClick={(e) => handleClick(e, "prev")}
      >
        Előző
      </button>

      {/** Előre, vagy Beküldés */}

      {currentStep === steps.length ? (
        <button
          className='bg-green-500 text-white uppercase rounded-lg font-semibold cursor-pointer border-2 border-green-500 hover:brightness-125 hover:text-white transition duration-200 ease-in px-4 py-1'
          type='submit'
        >
          Beküldés
        </button>
      ) : (
        <button
          disabled={!validate}
          className={`bg-green-500 text-white uppercase rounded-lg font-semibold cursor-pointer border-2 border-green-500 hover:brightness-125 hover:text-white transition duration-200 ease-in px-4 py-1 disabled:bg-slate-500 disabled:border-slate-500 ${
            validate ? "" : "cursor-not-allowed"
          } `}
          onClick={(e) => {
            handleClick(e, "next");
          }}
        >
          Következő
        </button>
      )}
    </div>
  );
};

export default StepperControl;
