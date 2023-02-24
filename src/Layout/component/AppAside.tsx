import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

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
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page/1">第一滴血</Link>
        </li>
        <li>
          <Link to="/page/2">星际迷航</Link>
        </li>
        <li>
          <Link to="/page/3">康熙王朝</Link>
        </li>
        <li>
          <Link to="/page/4">大明王朝</Link>
        </li>
        <li>
          <Link to="/opps">opps</Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default AppAside