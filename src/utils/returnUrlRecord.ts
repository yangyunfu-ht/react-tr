import { useLocation } from 'react-router-dom';

export const returnUrlRecord = () => {
  const { pathname } = useLocation();
  const name = 'yyf'
  const age = 23
  return {
    pathname,
    name,
    age
  }
};
