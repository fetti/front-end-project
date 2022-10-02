import uuid from "react-uuid";

interface Projects {
  id?: string;
  name: string;
  description?: string;
  users?: User[];
  links: Link[];
  color?: string;
}

interface User {
  name: string;
  task: string;
}

interface Link {
  link: string;
}

//Első futtatáskor betöltődő projekt

export const constProjects: [Projects] | never[] = [
  {
    id: "507b42c-afc8-614b-c8fb-a44e83ff63b",
    name: "Front-end Projekt - Ponte",
    description:
      "Ezt a projektet készítettem el a megadott adatok alapján. Nem tökéletes, de az idő, és a tanulás mindent jobbá tesz 😊",
    users: [
      { name: "Fetter Dávid", task: "Fejlesztő" },
      { name: "Teszt Elek", task: "Tester" },
      { name: "Példa Géza", task: "Design" },
    ],
    links: [{ link: "https://drive.google.com/" }],
    color: "006cd1",
  },
];
