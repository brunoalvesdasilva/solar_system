import { Planet } from './planet'
import { Star } from './star'

class SolarSystem {
  private star: Star
  private sizeStar: number = 5
  private orbitEarth: number = 10
  private planets: Planet[] = []

  constructor (star: Star) {
    this.star = star
  }

  addPlanet (planet: Planet) {
    this.planets.push(planet)
  }

  /**
   * x = y1 * x2 / x1
   * @param originalDistance
   * @param finalDistance
   * @param distance
   * @returns
   */
  calculateDistancePlanet (
    originalDistance: number,
    finalDistance: number,
    distance: number
  ) {
    return (distance * finalDistance) / originalDistance
  }

  /**
   * x = y1 * x2 / x1
   * @param originalDistance
   * @param finalDistance
   * @param distance
   * @returns
   */
  calculateOrbitPlanet (
    originalOrbit: number,
    finalOrbit: number,
    distance: number
  ) {
    return (distance * finalOrbit) / originalOrbit
  }

  getMaxDiameter (planets: Planet[]): number {
    return planets.reduce((previous: number, current: Planet) => {
      const diameter = current.getDistance()
      if (previous > diameter) {
        return previous
      }

      return diameter
    }, 0)
  }

  build (): string {
    const renderHtml: string[] = []
    const maxDistance = Math.min(window.innerWidth, window.innerHeight)
    const lastDistance = maxDistance * 0.9

    renderHtml.push(this.star.build(this.sizeStar))

    const maxDistancePlanet = this.getMaxDiameter(this.planets)

    renderHtml.push(
      this.planets.reduce((html: string, planet: Planet) => {
        const distancePlanet = this.calculateDistancePlanet(
          maxDistancePlanet,
          lastDistance,
          planet.getDistance()
        )

        const orbitPlanet = this.calculateOrbitPlanet(
          365,
          this.orbitEarth,
          planet.getOrbit()
        )

        return (html += planet.build(distancePlanet, orbitPlanet))
      }, '')
    )

    return renderHtml.join('')
  }
}

export default SolarSystem
