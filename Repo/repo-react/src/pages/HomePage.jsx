import Header from "../components/Header"
import {Main} from "../components/Main"
import Footer from "../components/Footer"

//dentro de Pages no usar codig solo unificar componentes
//componente funcional
//los componentes funcionales son funciones que retornan codigo JSX

const HomePage = () => {
//bloque de codigo que ejecuta JS
//props es un objeto que contiene todas las props que le pasamos al componente

// console.log("estoy dentro homePage sin instanciar ",props)
// console.log("estoy dentro homePage instanciando",props.nombre)
// console.log("props ",props)
// console.log("nombre ",nombre)
// console.log("edad ",edad)
// console.log("array ",array)
// console.log("array[2] ",array[2])
  return (
    <div>
        <Header/>
        {/* <h2>Nombre props: {props.nombre}</h2> */}
        <Main />
        <Footer/>
    </div>
  )
}

export default HomePage
