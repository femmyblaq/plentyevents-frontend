import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Dashboard/Header.module.css"
import { useState } from 'react'

export default function Header() {
  const [toggle, setToggle] = useState(false)
  const toggleProfile = ()=> {
    setToggle(prev => !prev)
  }
  return (
    <div className={style.Header}>
      <p>Welcome</p>
      <div onClick={toggleProfile}>
        <p>HY</p>
      </div>
      {
        toggle &&
        <ul className={style.profile}>
        <li><Link><i class="ri-user-6-fill"></i> Edit profile</Link></li>
        <li><Link><i class="ri-settings-4-line"></i> Settings</Link></li>
        <li><Link><i class="ri-logout-circle-line"></i> Logout</Link></li>
      </ul>
      }
    </div>
  )
}