class Star {
  private name: string
  private diameterKm: number

  constructor (name: string, diameterKm: number) {
    this.name = name
    this.diameterKm = diameterKm
  }

  getDiameter (): number {
    return this.diameterKm
  }

  build (sizeOrbit: number) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('star', 'objectOrbit')

    wrapper.dataset.name = this.name
    wrapper.dataset.diameterKm = this.diameterKm.toString()
    wrapper.dataset.size = sizeOrbit.toString() + 'px'

    wrapper.setAttribute('style', `--orbit:${sizeOrbit.toString()}px`)

    return wrapper.outerHTML
  }
}

export default Star
