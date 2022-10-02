import { useState, useEffect } from "react";

import ProjectInformation from "../components/ProjectInformation";
import uuid from "react-uuid";

import { constProjects } from "../constants/constProject";

import Navbar from "../components/Navbar";
import Wizard from "../components/Wizard";

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

const Home: React.FC = () => {
  const [projects, setProjects] = useState<[Projects] | Projects[] | never[]>(
    //@ts-ignore
    constProjects
  );

  const LOCAL_STORAGE_PROJECT_KEY = "projectInfo.project";

  // Konstans tartalom behívása, és tárolása localStorage-ban
  useEffect(() => {
    const storedProjects = JSON.parse(
      // @ts-ignore
      localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)
    );
    if (storedProjects) setProjects(storedProjects);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  }, [projects]);

  // Projekt törlése
  function handleClear(id: string | number) {
    const remainProjects = projects.filter((project) => project.id != id);
    setProjects(remainProjects);
  }

  const [newProj, setNewProj] = useState(false);
  // Új projekt "modal" megjeleítése
  function handleClick(wizard: boolean) {
    setNewProj(!wizard);
  }
  // Hexa kód generálás a különböző színekhez
  const [color, setColor] = useState("000000");

  const getRgb = () => Math.floor(Math.random() * 256);

  const rgbToHex = (r: number, g: number, b: number) =>
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");
  const handleGenerate = () => {
    const colorba = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };
    setColor(rgbToHex(colorba.r, colorba.g, colorba.b));
  };

  useEffect(() => {
    handleGenerate();
  }, [newProj]);

  // Hexa vége ---------------

  function handleSubmit(
    event: any,
    object: {
      name: string;
      description?: string;
      users?: [{ name: string; task: string }];
      links: [{ link: string }];
    }
  ) {
    event.preventDefault();

    handleClick(newProj);
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        {
          id: uuid(),
          name: object.name,
          description: object.description,
          users: object.users,
          links: object.links,
          color: color,
        },
      ];
    });
  }

  return (
    <>
      <div className=''>
        <Navbar handleClick={handleClick} wizard={newProj} />

        <ProjectInformation array={projects} handleClear={handleClear} />

        {newProj ? (
          <Wizard
            handleSubmit={handleSubmit}
            close={handleClick}
            wizard={newProj}
          />
        ) : null}
      </div>
    </>
  );
};

export default Home;
