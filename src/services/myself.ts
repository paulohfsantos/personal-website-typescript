import DataJSON from '../../data.json';
import { IDataJSON } from '../types/DataJSON';

export class Myself {
  public getData(): IDataJSON {
    return DataJSON;
  }
}