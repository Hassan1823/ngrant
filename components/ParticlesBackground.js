'use client'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particlesbackground = () => {
  const Particlesinit = async (main) => {
    // console.log(main);
    await loadFull(main);
  };
  return (
    <div className="h-[30vh]">
      <Particles
        init={Particlesinit}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#2f1313",
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 0,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: [],
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: false,
                mode: "trail",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: {
                delay: 0.8,
                enable: true,
              },
            },
            modes: {
              trail: {
                delay: 0.005,
                pauseOnStop: true,
                quantity: 5,
                particles: {
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: true,
                      speed: 800,
                      sync: true,
                    },
                  },
                  collisions: {
                    enable: true,
                  },
                  links: {
                    enable: true,
                  },
                  move: {
                    outModes: {
                      default: "destroy",
                    },
                    speed: 2,
                  },
                  size: {
                    value: 5,
                    animation: {
                      enable: true,
                      speed: 5,
                      minimumValue: 1,
                      sync: true,
                      startValue: "min",
                      destroy: "max",
                    },
                  },
                },
              },
              attract: {
                distance: 50,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 500,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
                mix: true,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: true,
                  selectors: [],
                },
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: true,
                  consent: true,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              absorb: {
                speed: 2,
              },
              bounce: {
                horizontal: {
                  random: {
                    enable: true,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: true,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: true,
              maxSpeed: 50,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#ff0000",
              animation: {
                h: {
                  count: 0,
                  enable: true,
                  offset: 0,
                  speed: 1,
                  delay: 0,
                  decay: 0,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: true,
                  offset: 0,
                  speed: 1,
                  delay: 0,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: true,
                  offset: 0,
                  speed: 1,
                  delay: 0,
                  decay: 0,
                  sync: true,
                },
              },
            },
            groups: {},
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: true,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 2,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fill: {},
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              limit: 0,
              value: 100,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.3,
              },
              value: {
                min: 0.3,
                max: 0.8,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 0.5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
                minimumValue: 0.3,
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              close: true,
              fill: true,
              options: {},
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: {
                min: 5,
                max: 8,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 3,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
                minimumValue: 1,
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 3,
                },
                rate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
                particles: {},
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
              backColor: {
                value: "#5e1c1c",
              },
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10,
              },
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: "random",
              },
              consent: false,
              distance: 100,
              enable: true,
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          emitters: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
        }}
      />
    </div>
  );
};

export default Particlesbackground;
