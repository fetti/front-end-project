import { useContext, useEffect } from "react";
import { StepperContext } from "../../../context/StepperContext";

const Project = ({
  setValidate,
}: {
  setValidate: (boolean: boolean) => void;
}) => {
  const { projectData, setProjectData }: any = useContext(StepperContext);

  //Validáció az elemekhez
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
    setValidate(true);

    if (name === "name" && value === "") {
      return setValidate(false);
    }

    if (name === "description" && value.length > 50 && value.length < 500) {
      setValidate(true);
    }

    if (name === "description" && value !== "") {
      setValidate(false);
    }
  };

  useEffect(() => {
    if (projectData.name === "") setValidate(false);
  }, [projectData]);

  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Projekt megnevezése
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            onChange={handleChange}
            value={projectData["name"] || ""}
            name='name'
            required
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Projekt leírása
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <textarea
            onChange={handleChange}
            value={projectData["description"] || ""}
            name='description'
            minLength={50}
            maxLength={500}
            className='p-1 px-2 mr-8 appearance-none outline-none w-full text-gray-800'
          />
          <p className='text-xs text-gray-300'>
            Nem kötelező! <br /> Minimum 50 maximum 500 karakter!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
