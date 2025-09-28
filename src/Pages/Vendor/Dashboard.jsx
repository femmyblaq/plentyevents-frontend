import React from 'react'
import style from "./Dashboard.module.css"
import Sidebar from './Sidebar'
import Header from './Header'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useSidebar } from '../../store/SidebarToggleContext.jsx'
export default function Dashboard() {
  const { isOpen } = useSidebar();
  return (
    <div>
      <Sidebar />
      <main className={`${style.Main} ${isOpen ? `${style.mainWidth}` : ''}` }>
        <Header />
        <div style={{ padding: '20px' }} className={`${style.mainBody} h-100 text-white`} >

          <Outlet />
        </div>

        <div className={style.footerBar}>
          <div className={style.navlinks}>
            <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem'}}>
              <NavLink to="/vendor/dashboard" end>
                          {({isActive}) =><li className={isActive ? style.active: ""}><i className="fs-3 ri-dashboard-2-line"></i></li>}
                        </NavLink>
                        
                        <NavLink to="/vendor/dashboard/waiters">
                          {({isActive}) =><li className={isActive ? style.active: ""}><i className="fs-3 ri-team-fill"></i></li>}
                          </NavLink>
                        <NavLink to="/vendor/dashboard/bookings">
                          {({isActive}) =><li className={isActive ? style.active: ""}><i className="fs-3 ri-pass-valid-fill"></i></li>}
                          </NavLink>
                         <NavLink to="/vendor/dashboard/profile">
                          {({isActive}) =><li className={isActive ? style.active: ""}><i className="fs-3 ri-edit-circle-fill"></i></li>}
                          </NavLink>
                         <NavLink to="/vendor/dashboard/need_help">
                          {({isActive}) =><li className={isActive ? style.active: ""}><i className="fs-3 ri-question-line"></i></li>}
                          </NavLink>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}