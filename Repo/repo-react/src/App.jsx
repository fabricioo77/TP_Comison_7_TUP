
import './App.css'
import HomePage from "./pages/HomePage"
import { HOME } from './routers/HomePage.router.js';
import {LOGIN} from "./routers/login.router.js"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {


  return (

    <Router>// Defino el enrutador
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={HOME} element={<HomePage />} />
      </Routes>
    </Router>
  )
}


export default App
