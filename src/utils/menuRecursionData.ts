export interface Tree {
  name: string;
  path: string;
  children?: Tree[];
}

export const menuRecursionList: Tree[] = [
  {
    name: '1',
    path: '/1',
    children: [
      {
        name: '1-1',
        path: '1/1',
        children: [
          {
            name: '1-1-1',
            path: '1/1/1',
          },
        ],
      },
    ],
  },
  {
    name: '2',
    path: '/2',
  },
  {
    name: '3',
    path: '/3',
    children: [
      { 
        name: '3-1',
        path: '3/1',
        children: [
          {
            name: '3-1-1',
            path: '3/1/1',
          }
        ]
       }
    ],
  },
];
