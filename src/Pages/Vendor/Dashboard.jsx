import React from 'react'
import style from "./Dashboard.module.css"
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
              <NavLink to="/vendor/dashboard" end>
                          {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-dashboard-2-line"></i> Dashboard</li>}
                        </NavLink>
                        
                        <NavLink to="/vendor/dashboard/waiters">
                          {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-team-fill"></i></li>}
                          </NavLink>
                        <NavLink to="/vendor/dashboard/bookings">
                          {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-pass-valid-fill"></i></li>}
                          </NavLink>
                         <NavLink to="/vendor/dashboard/profile">
                          {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-edit-circle-fill"></i></li>}
                          </NavLink>
                         <NavLink to="/vendor/dashboard/need_help">
                          {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-question-line"></i></li>}
                          </NavLink>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}