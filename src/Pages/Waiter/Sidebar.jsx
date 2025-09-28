import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Sidebar.module.css'
import { useSidebar } from '../../store/SidebarToggleContext.jsx'

export default function Sidebar() {
  const {isOpen, toggleSidebar } = useSidebar();
  const [collapse, setCollapse] = useState(false);
  console.log("isOpen: ", isOpen);
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
          <NavLink to="/worker/dashboard" end>
            {({isActive}) =><li className={isActive ? style.active: ""}><i className="ri-dashboard-2-line"></i> Dashboard</li>}
          </NavLink>
          
          <NavLink to="/worker/dashboard/available-hires">
            {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-team-fill"></i> Available Hires</li>}
            </NavLink>
          <NavLink to="/worker/dashboard/ratings-reviews">
            {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-pass-valid-fill"></i> My Ratings & Review</li>}
            </NavLink>
            <NavLink to="/worker/dashboard/profile">
            {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-user-line"></i> Profile</li>}
            </NavLink>
           <NavLink to="/worker/dashboard/settings">
            {({isActive}) =><li className={isActive ? style.active: ""}><i class="ri-settings-3-line"></i> Settings</li>}
            </NavLink>
           <NavLink to="/worker/dashboard/need_help">
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
