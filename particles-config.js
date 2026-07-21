particlesJS("particles-js", {
  particles: {
    number: {
      value: 50
    },
    color: {
      value: "#007bff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
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
      color: "#007bff",
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