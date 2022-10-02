/** React modul */
import { useEffect, useState } from "react";

/** Third-party modulok */
import uuid from "react-uuid";

/** Context modul */
import { StepperContext } from "../context/StepperContext";

import StepperControl from "./Wizard/StepperControl";

import Stepper from "./Wizard/Stepper";
import Links from "./Wizard/steps/Links";
import Project from "./Wizard/steps/Project";
import User from "./Wizard/steps/User";

interface Wizard {
  handleSubmit: (
    event: any,
    object: {
      name: string;
      description?: string;
      users?: [{ name: string; task: string }] | undefined;
      links: [{ link: string }];
    }
  ) => void;
  close: (wizard: boolean) => void;
  wizard: boolean;
}

interface Projects {
  id?: string;
  name: string;
  description?: string;
  users?: UserIf[];
  links: Link[];
  color?: string;
}

interface UserIf {
  name: string;
  task: string;
}

interface Link {
  link: string;
}

interface ProjectData {
  name?: string;
  description?: string;
}

const Wizard = ({ handleSubmit, close, wizard }: Wizard) => {
  const [currentStep, setCurrentStep] = useState(1);

  //Projektadatok
  const [projectData, setProjectData] = useState<any | never[]>([]);
  const [userData, setUserData] = useState<never[] | [UserIf]>([]);
  const [linksData, setLinksData] = useState<never[] | [Link]>([]);

  //Végleges formadatok
  const [formData, setFormData] = useState<Projects | never[]>([]);

  //Validáció, hogy az űrlap továbbmehet-e
  const [validate, setValidate] = useState(false);

  const steps = ["Projekt információk", "Felhasználók", "Linkek"];

  const displayStep = (step: number) => {
    if (step == 1) return <Project setValidate={setValidate} />;
    if (step == 2) return <User />;
    if (step == 3) return <Links />;
  };

  const handleClick = (e: any, direction: string) => {
    e.preventDefault();
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  useEffect(() => {
    setFormData({
      name: projectData.name,
      description: projectData.description,
      users: userData,
      links: linksData,
    });
  }, [projectData, userData, linksData]);

  useEffect(() => {
    setValidate(validate);
  }, [validate]);

  function handleThisClick() {
    close(wizard);
  }

  return (
    <div
      className='mx-auto rounded-2xl w-2/3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      style={{ boxShadow: "rgba(0, 0, 0, 0.65) 0px 0px 0px 300vmax" }}
    >
      <div className='w-full realtive'>
        <button
          className='absolute right-3 text-3xl text-red-500'
          onClick={handleThisClick}
        >
          &times;
        </button>
      </div>
      {/**@ts-ignore */}
      <form onSubmit={(event) => handleSubmit(event, formData)}>
        <div className='mt-5'>
          {/** Számok */}
          <Stepper steps={steps} currentStep={currentStep} />

          {/** Tartalom renderelés */}
          <div className='p-10'>
            <StepperContext.Provider
              value={{
                projectData,
                setProjectData,
                userData,
                setUserData,
                linksData,
                setLinksData,
              }}
            >
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
        </div>

        {/** Léptetőgombok */}
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          validate={validate}
        />
      </form>
    </div>
  );
};

export default Wizard;
