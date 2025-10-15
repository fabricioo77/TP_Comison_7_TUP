import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function ParticulasComponente() {
  const particlesInit = useCallback(async (engine) => {
    // Carga el motor de partículas
    await loadSlim(engine);
  }, []);

  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1, // Se asegura de que siempre esté en el fondo
    },
    background: {
      color: {
        value: '#1b1a2e', // El color de fondo de tu página
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#be50f4', // Tu color morado
      },
      links: {
        color: '#be50f4',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}

export default ParticulasComponente;