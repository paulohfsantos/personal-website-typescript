export interface IDataJSON {
  me: {
    name: string;
    email: string;
    about: string;
    experience: IExperience[]
  }
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