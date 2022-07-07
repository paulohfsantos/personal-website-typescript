import { createContext, useState, useMemo, useReducer } from "react";
import { IChildren } from "../components/Container/types";
import { Myself } from "../services/myself";
import { IDataJSON } from '../types/DataJSON';

const myself = new Myself();
const initialData: IDataJSON = myself.getData()

export const MyselfContext = createContext<IDataJSON>(initialData);

const MyselfProvider = ({ children }: IChildren) => {
  return (
    <MyselfContext.Provider value={initialData}>
      {children}
    </MyselfContext.Provider>
  );
}

export default MyselfProvider;