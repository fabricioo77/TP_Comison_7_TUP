import React from 'react'
import foto from '../assets/foto.jpeg'

const Header = () => {
  return (
    <div>
    <header>
        <img src={foto} alt="foto personal" id='imgPersonal'/>
        <h1>Nahuel Osores</h1>
    </header>
    </div>
  )
}

export default Header