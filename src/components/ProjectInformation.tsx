import React, { useEffect, useState } from "react";
import { getProjectInfo } from "../hooks/getProjectInfo";
import Card from "./Card";

interface Projects {
  id: string;
  name: string;
  description?: string;
  users?: User[];
  links: Link[];
  color: string;
}

interface User {
  name: string;
  task: string;
}

interface Link {
  link: string;
}

interface HandleArray {
  array: [Projects] | Projects[] | never[];
  handleClear: (id: string | number) => void;
}

// Async szimuláció
const ProjectInformation = ({ array, handleClear }: HandleArray) => {
  const [projectInfo, setProjectInfo] = useState<any[]>([]);
  useEffect(() => {
    getProjectInfo(array).then((data) => setProjectInfo(data));
  }, [array]);

  return (
    <div className='w-[90%] mx-auto'>
      <h2 className='uppercase text-gray-300 font-semibold text-xs mb-4'>
        Projektek:
      </h2>
      <div className='grid xl:grid-cols-2 gap-12 w-full'>
        {projectInfo.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            color={project.color}
            name={project.name}
            description={project.description}
            handleClear={handleClear}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectInformation;
