import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ParticulasComponente from '../components/ParticulasComponente'; // 1. Importa el componente

function Home() {
  return (
    <>
      <ParticulasComponente /> 
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;