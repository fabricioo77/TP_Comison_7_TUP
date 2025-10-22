import "../../styles/Header.css"
import perfil from "../../assets/FOTO PERFIL.jpg"

const Header = () => {



  return (
    <div>
      <div className="contenedorIMG">
        <img src={perfil} alt="perfil" className="imagen" />
        <br />
        <h2>Soy Chocobar Matias Sebastian</h2>
        <br /><br />
        <h3>Desarrollador Web Jr</h3>
      </div>
    </div>
  )
}

export default Header
