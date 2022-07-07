export interface IDataJSON {
  me: {
    name: string;
    email: string;
    about: string;
    links: ILinks[];
    experience: IExperience[]
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