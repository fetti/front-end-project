import React from "react";

interface Projects {
  id: string;
  name: string;
  description?: string;
  users: User[];
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

//Async szimulálása

export function getProjectInfo<Projects>(array: Projects | never[]) {
  return new Promise<Projects | never[]>((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 500);
  });
}
