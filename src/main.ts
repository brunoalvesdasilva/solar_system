import { SolarSystem } from './solar-system'
import { Planet } from './solar-system/planet'
import { Star } from './solar-system/star'
SolarSystem
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

// Sol
const star = new Star('Sol', 1_392_700)
const solarSystem = new SolarSystem(star)

// Planetas
const planets: Planet[] = []
planets.push(new Planet('Mercúrio', 4_880, 57_910_000, '#e7e8ec', 88))
planets.push(new Planet('Vênus ', 12_204, 108_800_000, '#f8e2b0', 225))
planets.push(new Planet('Terra', 12_256, 149_900_000, '#6b93d6', 365))
planets.push(new Planet('Marte', 6_694, 227_740_000, '#f0e7e7', 687))
planets.push(new Planet('Júpiter', 142_284, 778_830_000, '#ebf3f6', 4380))
planets.push(new Planet('Saturno', 120_036, 1_129_900_000, '#ead6b8', 10585))
planets.push(new Planet('Urano', 51_118, 2_270_090_000, '#e1eeee', 30660))
planets.push(new Planet('Netuno', 49_932, 4_404_400_000, '#3399CC', 60225))

planets.forEach(planet => solarSystem.addPlanet(planet))

app.innerHTML = solarSystem.build()
