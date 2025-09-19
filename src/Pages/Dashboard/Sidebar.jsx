import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../Dashboard/Sidebar.module.css'

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);
  const SidebarCollapse = () => {
    setCollapse(prev => !prev)
  }
  return (
    <div className={`${style.Sidebar} ${collapse ? `${style.collapse}` : ''}`} >
      <div className={style.navbrand}>
        <h3><i className="ri-wallet-3-fill"></i>PLENTY<span>EVENTS</span></h3>
      </div>
      <div className={style.navlinks}>
        <ul className={`${collapse ? `${style.remove}` : ''}`}>
          <NavLink to="/dashboard" end>
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-dashboard-2-line"></i> Dashboard</li>}
          </NavLink>
          
          <NavLink to="/dashboard/waiters">
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-send-plane-fill"></i> Waiters</li>}
            </NavLink>
          <NavLink to="/dashboard/bookings">
            {({isActive}) =><li className={isActive ? style.active: ""}> Bookings</li>}
            </NavLink>
           <NavLink to="/dashboard/profile">
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-hand-coin-line"></i> Profile</li>}
            </NavLink>
           <NavLink to="/dashboard/need_help">
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
