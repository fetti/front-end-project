interface Steps {
  description: string,
  completed: boolean,
  highlighted: boolean,
  selected: boolean,
}


const Step = ({ step, index }:{step:Steps, index:number}) => {
  return (
    <>
      <div className='relative flex flex-col items-center text-blue-500'>
        <div
          className={`rounded-full transition duration-500 ease-in border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3
        ${step.selected ? " bg-green-600 text-white font-bold border border-green-600" : ""}
        `}
        >
          {index + 1}
        </div>
        <div>
          {step.description}
        </div>
      </div>
      <div className='flex-auto border-t-2 transition duration-200 ease-in-out'></div>
    </>
  );
};

export default Step;
