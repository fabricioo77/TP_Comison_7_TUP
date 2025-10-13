
import './App.css'
import HomePage from "./pages/HomePage"

function App() {

  // const nombre = "Miguel"
  // console.log(`Hola ${nombre}`)
  //pasamos nombre por props a HomePage


  // const persona = [{nombre: "Miguel", edad: 30, ciudad: "Madrid",
  //   Estudios:[{titulo:"Ingenieria Informatica", año:2020},
  //      {titulo:"Master en React", año:2021}]},{nombre: "Ana", edad: 25, ciudad: "Barcelona",
  //   Estudios:[{titulo:"Ingenieria de Telecomunicaciones", año:2019},
  //      {titulo:"Master en Vue", año:2020}]}]

  //      console.log("Estudios de personas = ",persona[0].Estudios[1].titulo )

  return (
    <>
    {/* {persona.map((a,i)=><li key={i}>{a.nombre} - {a.edad} - {a.ciudad}
    <ul>
      {a.Estudios.map((e,j)=><li key={j}>{e.titulo} - {e.año}</li>)}
    </ul>
    </li>)} */}
    <HomePage />
    </>
  )
}

export default App
