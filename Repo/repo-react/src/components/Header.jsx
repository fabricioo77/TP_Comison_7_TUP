import {useState} from "react"
import "../styles/header.css"

const Header = () => {
//useState es un hook que nos permite tener estado en un componente funcional
    // const estador =useState("matias")
    // console.log(estador
 const [nombre,setNombre] = useState("Matias")

console.log("nombre en Header ",nombre)

const cambiar = () =>{
    setNombre("Miguel")
    console.log("nombre cambiado a ",nombre)
}
console.log("renderizando Header", nombre)
  return (
    <div>
      <h2>Hola soy Header</h2>
      <button className="boton" onClick={cambiar}>Cambiar Nombre</button>
    </div>
  )
}

export default Header
