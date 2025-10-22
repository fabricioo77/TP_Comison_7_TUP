import {Header} from "../component/Header"
import Main from "../component/Main"
import Footer from "../component/Footer"

const HomePage = (props) =>{

// console.log("props",props.nombre)
// const {nombre} = props
    return(
        <div>
         
        <Header />
        <Main/>
        <Footer/>
        </div>
    )
}

export default HomePage