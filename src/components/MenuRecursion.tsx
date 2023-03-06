import React from 'react'

interface Tree {
  name: string;
  path: string;
  children?: Tree[];
}

interface Props {
  menu: Tree[]
}

const MenuRecursion = ({ menu }: Props) => {
  return <div>
    {
      menu.map(element => {
        return <ul key={element.path}>
          {element.name}
          {
            element.children && element.children.map(child => {
              return <li key={child.path}>{child.name}</li>
            })
          }
        </ul>
      })
    }
  </div>
}

export default MenuRecursion