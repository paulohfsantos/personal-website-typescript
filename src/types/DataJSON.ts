export interface IDataJSON {
  me: {
    name: string;
    email: string;
    about: string;
    links: ILinks[];
    skills: string[];
    experience: IExperience[];
    projects: IProject[];
  }
}
export interface ILinks {
  name: string;
  url: string;
}
export interface IExperience {
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  city: string;
  country: string;
}
export interface IProject {
  id: number;
  name: string;
  techs: string[];
  src: string;
}