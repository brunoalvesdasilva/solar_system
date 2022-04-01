class Planet {
  private name: string
  private diameterKm: number
  private distance: number
  private color: string
  private orbit: number

  constructor (
    name: string,
    diameterKm: number,
    distance: number,
    color: string,
    orbit: number
  ) {
    this.name = name
    this.diameterKm = diameterKm
    this.distance = distance
    this.color = color
    this.orbit = orbit
  }

  getName (): string {
    return this.name
  }

  getDiameter (): number {
    return this.diameterKm
  }

  getDistance (): number {
    return this.distance
  }

  getOrbit (): number {
    return this.orbit
  }

  build (sizeOrbit: number, timing: number) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('planet', 'objectOrbit')

    wrapper.dataset.name = this.name
    wrapper.dataset.diameterKm = this.diameterKm.toString()
    wrapper.dataset.distance = this.distance.toString()

    const style: string[] = []
    style.push(`--orbit:${sizeOrbit.toString()}px`)
    style.push(`--color:${this.color}`)
    style.push(`--timing:${timing}s`)

    wrapper.setAttribute('style', style.join(';'))

    return wrapper.outerHTML
  }
}

export default Planet
