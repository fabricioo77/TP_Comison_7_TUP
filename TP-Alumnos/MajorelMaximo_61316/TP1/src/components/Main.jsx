import React from "react";
import { Estudios } from "./Estudios";
import { SoftSkills } from "./SoftSkills";
import { Proyectos } from "./Proyectos";
import { Experiencia } from "./Experiencia";
import { Idiomas } from "./Idiomas";

export const Main = () => {
  return (
    <>
      <Estudios />
      <SoftSkills />
      <Proyectos />
      <Experiencia />
      <Idiomas />
    </>
  );
};
