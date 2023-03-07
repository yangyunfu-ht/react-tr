import HomePage from '@/views/HomePage'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuRecursion from '@/components/MenuRecursion'
import { menuRecursionList } from '@/utils/menuRecursionData'
interface AppRouterList {
  path: string,
  name: string,
  author: boolean,
  children?: Array<AppRouterList>,
  element?: JSX.Element
}

const AppRouterList: Array<AppRouterList> = [
  {
    path: '/',
    name: '首页',
    author: true,
  },
  {
    path: '/page/1',
    name: '星际迷航',
    author: true,
  },
  {
    path: '/page/2',
    name: '哥斯拉大战金刚',
    author: true,
  },
  {
    path: '/page/3',
    name: '阿凡达',
    author: true,
  },
  {
    path: '/page/4',
    name: '康熙王朝Opps',
    author: true,
  },
  {
    path: '/opps',
    name: '雍正王朝',
    author: true,
  },
  {
    path: '/editor',
    name: '富文本编辑器',
    author: true,
  }
]


function AppAside() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Fragment>
      <div className="searchInput">
        <input
          type="search"
          value={searchValue} onChange={e => setSearchValue(e.target.value)}
          placeholder="search something..."
        />
      </div>
      <ul>
        {
          AppRouterList.map(router => {
            return <li key={router.name}>
              <Link to={router.path}>{router.name}</Link>
            </li>
          })
        }
      </ul>
      <MenuRecursion menu={menuRecursionList}></MenuRecursion>
    </Fragment>
  )
}

export default AppAside