import {useState,useEffect} from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [Bg_color, setBg_color] = useState();
  const [Tg_color, setTg_color] = useState();

  function checkDark() {
    if (currentTheme == "dark") {
      console.log('is dark');
      setBg_color("#151515");
      setTg_color("#F7F7F8");
    } else {
      console.log('is light');
      setBg_color("#F7F7F8");
      setTg_color("#151515");
    }
  }

  useEffect(() => {
    checkDark();
    return () => {
    }
  }, [])
  

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: Bg_color,
          },
          opacity: 1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            connect: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: Tg_color,
          },
          links: {
            color: Tg_color,
            distance: 150,
            enable: false,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
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
            value: 200,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
