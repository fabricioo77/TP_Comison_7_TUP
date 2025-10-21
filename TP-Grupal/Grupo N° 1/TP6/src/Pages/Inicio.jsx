import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Login from "../Components/FormLogin";
import NavBar from "../Components/navBar";
function IniciarSesion() {
    return(
         <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #2c3e50)",
      }}
    >
        <Login />
      </div>
    )
}

export default IniciarSesion;