particlesJS("particles-js", {
  particles: {
    number: {
      value: 100
    },
    color: {
      value: "#9b8cc9"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 1
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#9b8cc9",
      opacity: 0.3,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 80
      }
    }
  }
});