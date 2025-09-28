import React from 'react'
import style from "./WaiterDashboard.module.css"
import Sidebar from './Sidebar'
import Header from './Header'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useSidebar } from '../../store/SidebarToggleContext'
export default function Dashboard() {
  const { isOpen } = useSidebar();
  return (
    <div>
      <Sidebar />
      <main className={`${style.Main} ${isOpen ? `${style.mainWidth}` : ''}`}>
        <Header />
        <div style={{ padding: '20px' }} className={`${style.mainBody} h-100 text-white`} >
          <Outlet />
        </div>

        <div className={style.footerBar}>
          <div className={style.navlinks}>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem' }}>
              <NavLink to="/worker/dashboard" end>
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="fs-3 ri-dashboard-2-line"></i> </li>}
              </NavLink>

              <NavLink to="/worker/dashboard/available-hires">
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="fs-3 ri-team-fill"></i></li>}
              </NavLink>
              <NavLink to="/worker/dashboard/ratings-reviews">
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="fs-3 ri-pass-valid-fill"></i></li>}
              </NavLink>
              <NavLink to="/worker/dashboard/profile">
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="fs-3 ri-user-line"></i></li>}
              </NavLink>
              <NavLink to="/worker/dashboard/settings">
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="fs-3 ri-settings-3-line"></i></li>}
              </NavLink>
              <NavLink to="/worker/dashboard/need_help">
                {({ isActive }) => <li className={isActive ? style.active : ""}><i className="fs-3 ri-question-line"></i></li>}
              </NavLink>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}