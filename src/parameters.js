import seedrandom from 'seedrandom'
import SimplexNoise from 'simplex-noise'

export const mapParameters = {
  pdsMaxDistance: 4,
  width: 700,
  height: 700,
  seed: '1337',
  //seed: new Date().getTime(),
  exportPng: false,
  seaLevel: 0.2,
  elevation: {
    octavation: {
      apply: true,
      iterations: 10,
      persistence: 0.5,
      lacunarity: 2,
      frequency: 2,
      standardRatio: 1,
      billowedRatio: 0,
      ridgedRatio: 0
    },
    sculpting: {
      apply: true,
      amount: 2
    },
    islandMask: {
      apply: true,
      margin: 5
    },
    plates: {
      apply: true,
      maxDistance: 125
    },
    normalize: {
      apply: true
    },
    step: {
      apply: true
    }
  },
  render: {
    shapeRendering: 'crispEdges', // auto, optimizeSpeed, crispEdges, geometricPrecision
    polygon: {
      useStepInsteadOfElevation: false,
      color: 'colorized' // greyscale, featureType, colorized
    },
    drawCoastline: true,
    drawTriangles: false,
    plates: {
      draw: false,
      drawForce: true
    }
  }
}

seedrandom(mapParameters.seed, { global: true })

export const simplex = new SimplexNoise(Math.random)
