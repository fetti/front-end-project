import { useContext, useState } from "react";
import { StepperContext } from "../../../context/StepperContext";

const Links = () => {
  const { linksData, setLinksData } = useContext(StepperContext);
  const [formValues, setFormValues] = useState(
    linksData.length == 0 ? [{ link: "" }] : linksData
  );

  let handleChange = (i: number, e: any) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    setLinksData(formValues);
  };

  let addFormFields = (e: any) => {
    e.preventDefault();
    setFormValues([...formValues, { link: "" }]);
  };

  let removeFormFields = (e: any, i: number) => {
    e.preventDefault();
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
    setLinksData(newFormValues);
  };

  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
        {formValues.map((element: { link: string }, index: number) => (
          <div key={index}>
            <div className='flex'>
              <div className='flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                  Link
                </div>
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    onChange={(e) => handleChange(index, e)}
                    value={element.link || ""}
                    name='link'
                    pattern='https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'
                    className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                    required
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
        Link hozzáadása
      </button>
    </div>
  );
};

export default Links;
