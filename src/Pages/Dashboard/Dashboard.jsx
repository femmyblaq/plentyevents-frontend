import React from 'react'
import style from "../Dashboard/Dashboard.module.css"
import Sidebar from './Sidebar'
import Header from './Header'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <main className={style.Main}>
        <Header />
        <div style={{ padding: '20px' }} className={`${style.mainBody} h-100 text-white`} >

          <Outlet />
        </div>

        <div className={style.footerBar}>
          <div className={style.navlinks}>
            <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem'}}>
              <NavLink to="/dashboard" end>
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="ri-dashboard-2-line"></i></li>}
              </NavLink>

              <NavLink to="/dashboard/fund_transfer">
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="ri-send-plane-fill"></i></li>}
              </NavLink>
              <NavLink to="/dashboard/loans">
                {({ isActive }) => <li className={isActive ? style.active : ""}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M349-144q-85 0-145-60t-60-145q0-35 11.5-68t32.5-60l130-165-72-174h468l-73 174 131 165q21 27 32.5 60t11.5 68q0 85-60 145t-145 60H349Zm131-180q-35 0-59.5-24.5T396-408q0-35 24.5-59.5T480-492q35 0 59.5 24.5T564-408q0 35-24.5 59.5T480-324Zm-96-348h192l30-72H354l30 72Zm-35 456h262q55 0 94-39t39-94q0-23-7.5-44T715-432L583-600H377L245-432q-14 18-21.5 39t-7.5 44q0 55 39 94t94 39Z" /></svg></li>}
              </NavLink>
              <NavLink to="/dashboard/setpin">
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="ri-hand-coin-line"></i></li>}
              </NavLink>
              <NavLink to="/dashboard/need_help">
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="ri-question-line"></i></li>}
              </NavLink>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}