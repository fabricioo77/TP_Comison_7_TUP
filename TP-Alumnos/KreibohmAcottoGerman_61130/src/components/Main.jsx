import React from 'react'
import Experiencia from './Experiencia'
import Estudios from './Estudios'
import Proyectos from './Proyectos'
import Certificados from './Certificados'
import Idiomas from './Idiomas'
import SoftSkills from './SoftSkills'
import Hero from './Hero'

const Main = () => {
  return (
    <main className="">
      <Hero />
      <Experiencia />
      <Estudios />
      <Proyectos />
      <Certificados />
      <Idiomas />
      <SoftSkills />
    </main>
  )
}

export default Main
