import Step from "./Step";

import React, { useEffect, useRef, useState } from "react";

interface Steps {
  description: string,
  completed: boolean,
  highlighted: boolean,
  selected: boolean,
}

const Stepper = ({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) => {
  const [newStep, setNewStep] = useState<Steps[] | [Steps] | never[]>([]);

  const stepRef = useRef<Steps[] | [Steps] | never[]>();


  const updateStep = (stepNumber: number, steps:[Steps]) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          completed: true,
          selected: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          completed: true,
          selected: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          completed: false,
          selected: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    console.log()
    //@ts-ignore
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step:Steps, index:number) => {
    return (
      <div
        key={index}
        className={
          index != newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >

        <Step index={index} step={step} />
      </div>
    );
  });

  return (
    <div className='mx-4 p-4 flex justify-around items-center'>
      {displaySteps}
    </div>
  );
};

export default Stepper;
