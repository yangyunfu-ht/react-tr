import React from 'react';
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


// export interface RouteRecord {
//   path: string,
//   element: JSX.Element,
//   name: string,
//   title: string,
//   children?: Array<RouteRecord>
// }

// const RouteRecordList: RouteRecord[] = [
//   {
//     path: '/',
//     element: 'ef',
//     name: 'hello',
//     title: 'hello',
//   }
// ]