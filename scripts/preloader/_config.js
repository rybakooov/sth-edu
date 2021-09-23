export default {
  classNames: {
    elements: {
      preloader: 'preloader',
      progress: 'preloader__progress',
      canvas: 'preloader__canvas',
      value: 'preloader__value'
    },
    modifiers: {
      run: 'preloader--running',
      complete: 'preloader--complete',
      empty: 'preloader--empty'
    }
  },
  fluid: {
    // SPLAT_RADIUS: 0.03,
    // SPLAT_FORCE: 5000,
    // PRESSURE_ITERATIONS: 10,
    // DENSITY_DISSIPATION: 0.5,
    // VELOCITY_DISSIPATION: 0.6,
    // CURL: 20,
    // PRESSURE: 0,
    // SUNRAYS: false
    PRESSURE_ITERATIONS: 10,
    DENSITY_DISSIPATION: 0.5,
    VELOCITY_DISSIPATION: 0.6,
    SPLAT_RADIUS: 0.02,
    SPLAT_FORCE: 5400,
    SHADING: false,
    CURL: 15,
    PRESSURE: 0,
    SUNRAYS: false
  },
  pointers: [
    {
      id: 0,
      position: { X: -15, Y: 0 },
      destination: { X: -15, Y: 0 },
      margin: { X: -10, Y: 0 },
      speed: 0.01,
      direction: -1,
      options: { color: { r: 0.25, g: 0.35, b: 0 } },
      sin: 5
    },
    {
      id: 1,
      position: { X: -15, Y: 0 },
      destination: { X: -15, Y: 0 },
      margin: { X: 0, Y: 0 },
      speed: 0.01,
      direction: 1,
      options: { color: { r: 0.25, g: 0.15, b: 0 } },
      sin: 8
    }
  ]
}
