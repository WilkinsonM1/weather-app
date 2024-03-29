const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')
const colors = require('colors')
const figlet = require('figlet')
const {promisify} = require('util')

const promisifiedFiglet = promisify(figlet)


const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
    const celsius = Math.round((weather.temperature-32)*5/9)
    const data = await promisifiedFiglet("Weather")
    console.log(data)
    console.log(`The temperature in ${location.name.green} is ${colors.red(celsius)}°C and the probability of rain is ${colors.cyan(weather.precipProbability*100)}%`)
}
main()
