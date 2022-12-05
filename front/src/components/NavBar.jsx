import React from 'react'
import Form from './Form'
import Users from './Users'
import style from '../styles/navBar.module.css'

const NavBar = () => {
  return (
    <div className={style.container}>
        <Form/>
        <Users/>
    </div>
  )
}

export default NavBar