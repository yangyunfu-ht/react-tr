import React, { Fragment, useEffect, useState } from 'react'
import { Outlet, useLocation } from "react-router-dom"
import './AppLayout.css'

import AppAside from './component/AppAside'
import { returnUrlRecord } from "@/utils/returnUrlRecord"

function AppLayout() {
  const { pathname, name, age } = returnUrlRecord()
  const [path, setPath] = useState(pathname)
  const location = useLocation()
  // console.log(location)
  // console.log(pathname, name, age)
  useEffect(() => {
    // console.log(path)
  }, [path])
  return (
    <Fragment>
      <main style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw' }} className="app-main">
        <aside style={{ width: '200px' }} className="app-aside">
          <AppAside />
        </aside>

        <main style={{ flex: '1' }} className="app-content">
          <header style={{ height: '10vh', width: '100v', padding: '6px' }} className="app-header">
            header
          </header>

          <section style={{ flex: '1', height: "calc(90vh - 72px)", padding: '6px', overflow: 'auto' }} className="app-main">
            <Outlet />
          </section>

          <footer style={{ height: '60px',padding: '6px' }} className="app-footer">
            footer
          </footer>
        </main>
      </main>
    </Fragment>
  )
}

export default AppLayout