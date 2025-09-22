import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Header.module.css"

export default function Header() {
  const [toggle, setToggle] = useState(false)
  // Example: Replace with your actual cart state
  const [cartCount, setCartCount] = useState(2) // Number of waiters added

  const toggleProfile = () => {
    setToggle(prev => !prev)
  }

  return (
    <div className={style.Header}>
      <p className='m-0 text-white'>Welcome worker</p>
      <div className='d-flex align-items-center gap-4 position-relative'>
        {/* <div className="position-relative">
          <i className="text-white fs-5 ri-shopping-cart-2-line"></i>
          {cartCount > 0 && (
            <span className={style.cartPill}>
              {cartCount}
            </span>
          )}
        </div> */}
        <div className={style.profileBox} onClick={toggleProfile}>
          <p className='m-0 fw-bold'>HY</p>
        </div>
      </div>
      {
        toggle &&
        <ul className={style.profile}>
          <li><Link><i className="ri-user-6-fill"></i> Edit profile</Link></li>
          <li><Link><i className="ri-settings-4-line"></i> Settings</Link></li>
          <li><Link><i className="ri-logout-circle-line"></i> Logout</Link></li>
        </ul>
      }
    </div>
  )
}