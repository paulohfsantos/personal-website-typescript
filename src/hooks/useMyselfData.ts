import { useContext } from 'react';
import { MyselfContext } from '../context/myContext';

export function useMyselfData() {
  return useContext(MyselfContext);
}