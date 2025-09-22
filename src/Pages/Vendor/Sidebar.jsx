import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Sidebar.module.css'

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);
  const SidebarCollapse = () => {
    setCollapse(prev => !prev)
  }
  return (
    <div className={`${style.Sidebar} ${collapse ? `${style.collapse}` : ''}`} >
      <div className={style.navbrand}>
        <h3><i class="ri-team-fill"></i>PLENTY<span>EVENTS</span></h3>
      </div>
      <div className={style.navlinks}>
        <ul className={`${collapse ? `${style.remove}` : ''}`}>
          <NavLink to="/vendor/dashboard" end>
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-dashboard-2-line"></i> Dashboard</li>}
          </NavLink>
          
          <NavLink to="/vendor/dashboard/waiters">
            {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-team-fill"></i> Waiters</li>}
            </NavLink>
          <NavLink to="/vendor/dashboard/bookings">
            {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-pass-valid-fill"></i> Bookings</li>}
            </NavLink>
           <NavLink to="/vendor/dashboard/profile">
            {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-edit-circle-fill"></i> Profile</li>}
            </NavLink>
           <NavLink to="/vendor/dashboard/need_help">
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-question-line"></i> Need Help?</li>}
            </NavLink>
        </ul>
      </div>
      <div className={style.footer}>
        <i className="ri-logout-circle-line"></i>
        <i onClick={SidebarCollapse} className="ri-arrow-left-s-line"></i>
      </div>
    </div>
  )
}
