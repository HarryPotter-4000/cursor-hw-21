import React from "react";
import {
  Link,
  NavLink,
} from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import headerStyles from "./Header.module.css"

function Header() {
  const getClassName = ({ isActive }) => isActive ? headerStyles.active : ''
  return (
    <div className={headerStyles.navigation}>
      <Link className={ headerStyles.logo }to='/home'><img src={logo} alt=""/></Link>
      <ul className={ headerStyles.list }>
        <li><NavLink to='/' className={ getClassName}>Home</NavLink></li>
        <li><NavLink to='/starwars' className={ getClassName}>Cards</NavLink></li>
        <li><NavLink to='/gallery' className={ getClassName}>Photo</NavLink></li>
        <li><NavLink to='/contacts' className={ getClassName}>Contacts</NavLink></li>
      </ul>
    </div>
    
  )
}

export default Header;