import React, { useState, useContext } from 'react'

import { Link, NavLink } from 'react-router-dom'
import style from './Sidebar.module.css'
import { useSidebar } from '../../store/SidebarToggleContext.jsx'

export default function Sidebar() {
  const {isOpen, toggleSidebar } = useSidebar();
  const [collapse, setCollapse] = useState(false);

  console.log("Sidebar isOpen:", isOpen);
  const SidebarCollapse = () => {
    setCollapse(prev => !prev)
  }
  return (
    <div className={`${style.Sidebar} ${collapse ? `${style.collapse}` : ''} ${isOpen ? `${style.hide}` : ''}`} >
      <div className={`${style.navbrand} d-flex align-items-center}`}>
        <h3><i class="ri-team-fill"></i>PLENTY<span>EVENTS</span></h3>
        <i onClick={toggleSidebar} class="ri-close-line"></i>
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
