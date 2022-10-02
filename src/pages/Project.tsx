import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectInfo } from "../hooks/getProjectInfo";
import blankProfile from "../assets/blank_profile.png";

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

const Project: React.FC = () => {
  const { id } = useParams();
  const [projectInfo, setProjectInfo] = useState<[Projects] | any[]>([]);

  const LOCAL_STORAGE_PROJECT_KEY = "projectInfo.project";

  const [projects, setProjects] = useState<string[]>([]);

  // Projektek behívása localStorageból
  useEffect(() => {
    const storedProjects = JSON.parse(
      // @ts-ignore
      localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)
    );
    if (storedProjects) setProjects(storedProjects);
  }, []);

  // ID alapján a megfelelő projekt kiváalsztása
  useEffect(() => {
    getProjectInfo(projects).then((data) => {
      const currentProject = data.filter((project) => eval(project).id === id);
      setProjectInfo(currentProject);
    });
  }, [projects]);

  return (
    <>
      {projectInfo.map((project) => (
        <div
          key={project.id}
          className='max-w-2xl mx-auto flex flex-col shadow-xl rounded-lg'
        >
          <div className='relative after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-t after:from-gray-600 after:to-transparent after:-z-0'>
            <img
              src='https://picsum.photos/1920/500'
              className='relatuive -z-10 object-cover rounded-t-lg'
            />
            <h1 className='absolute bottom-9 left-9 text-5xl font-semibold text-white z-10'>
              {project.name}
            </h1>
          </div>
          <div className='bg-white rounded-b-lg p-12'>
            <h2 className='uppercase text-gray-300 font-semibold text-xs'>
              Azonosító:
            </h2>
            <p className='mb-12'>{project.id}</p>
            {project.description ? (
              <div className='rounded-lg p-4 bg-slate-100 flex items-center gap-4'>
                <div className='rounded-full w-14 h-12 flex items-center justify-center bg-blue-200'>
                  <svg
                    className='h-7 '
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 508.016 508.016'
                  >
                    <g>
                      <path
                        d='M487.19,99.922l-79.6-79.7c-38.2-38.2-83.4-12.9-96.3,0l-259.6,260c-1.9,1.9-3.2,4.2-3.8,6.8l-47.5,203.7
			c-1.1,4.8,0.3,9.7,3.8,13.2c3.9,3.9,9.3,4.6,13.2,3.8l203.4-47.7c2.6-0.6,4.9-1.9,6.8-3.8l259.6-260
			C499.99,183.422,526.79,139.622,487.19,99.922z M281.49,90.022l58,58.1l-181.3,181.6c-3.5-13.4-10.6-26.4-21.2-36.9
			c-10.5-10.6-23.4-17.8-36.8-21.2L281.49,90.022z M32.99,475.122l11-46.9c14.5,9,26.9,21.4,35.9,35.9L32.99,475.122z
			 M209.39,433.822l-101,23.6c-13-24.5-33.3-44.9-57.8-57.8l23.6-101.2c14.3-3.1,30.7,2.3,42.8,14.4c13.2,13.2,18.5,31.6,13.5,46.8
			c-1.7,5.1-0.4,10.6,3.4,14.4s9.3,5.1,14.4,3.4c15.1-5,33.5,0.2,46.7,13.5C207.09,403.022,212.49,419.422,209.39,433.822z
			 M236.19,407.822c-3.5-13.4-10.6-26.3-21.2-36.9c-10.6-10.6-23.4-17.7-36.9-21.2l181.4-181.7l58,58.1L236.19,407.822z
			 M467.19,176.322l-29.8,29.9l-136-136.2l29.8-29.9c7.5-7.5,33.4-23.1,56.4,0l79.6,79.7
			C492.19,144.822,474.69,168.822,467.19,176.322z'
                      />
                    </g>
                  </svg>
                </div>
                <div className='w-full'>
                  <h2 className='text-2xl'>Leírás</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className='mt-12'>
              <h2 className='uppercase text-gray-300 font-semibold text-xs'>
                Tagok:
              </h2>
              <div className='flex flex-col'>
                {project.users.map(
                  (user: { name: string; task: string }, index: number) => (
                    <div
                      key={index}
                      className='flex justify-between items-center py-4'
                    >
                      <div className='text-lg font-semibold flex items-center gap-4'>
                        <img
                          src={blankProfile}
                          className='w-12 h-12 rounded-full'
                        />
                        {user.name}
                      </div>
                      <div className='font-semibold text-gray-300'>
                        {user.task}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className='mt-12'>
              <h2 className='uppercase text-gray-300 font-semibold text-xs'>
                Linkek:
              </h2>
              <div className='flex flex-col'>
                {project.links.map((link: { link: string }, index: number) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-4'
                  >
                    <div className='text-lg font-semibold flex items-center gap-4'>
                      <a
                        href={link.link}
                        className='text-blue-500 visited:text-purple-900'
                      >
                        {link.link}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
