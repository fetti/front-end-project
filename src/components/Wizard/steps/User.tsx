import { useContext, useState } from "react";
import { StepperContext } from "../../../context/StepperContext";

const User = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const [formValues, setFormValues] = useState<
    { name: string; task: string }[]
  >(userData.length == 0 ? [{ name: "", task: "" }] : userData);

  let handleChange = (i: number, e: any) => {
    let newFormValues = [...formValues];
    /**@ts-ignore*/
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    setUserData(formValues);
  };

  let addFormFields = (e: any) => {
    e.preventDefault();
    setFormValues([...formValues, { name: "", task: "" }]);
  };

  let removeFormFields = (e: any, i: number) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    e.preventDefault();
    setFormValues(newFormValues);
    setUserData(newFormValues);
  };

  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
        {formValues.map((element, index: number) => (
          <div key={index}>
            <div className='flex'>
              <div className='flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                  Felasználó
                </div>
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    onChange={(e) => handleChange(index, e)}
                    value={element.name || ""}
                    name='name'
                    className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  />
                </div>

                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                  Feladat
                </div>
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    onChange={(e) => handleChange(index, e)}
                    value={element.task || ""}
                    name='task'
                    className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  />
                </div>
              </div>
              {index ? (
                <button
                  type='button'
                  className='rounded border-2 border-red-600 self-start px-4 py-2 my-auto mx-8'
                  onClick={(e) => removeFormFields(e, index)}
                >
                  &#x2715;
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <button
        className='rounded border-2 border-green-600 self-start px-4 py-2'
        onClick={(e) => addFormFields(e)}
      >
        További felhasználó
      </button>
    </div>
  );
};

export default User;
