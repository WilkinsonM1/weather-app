const request = require('request')

const apikey = "d4b693d843f9b93d20786aae043796d4"

const {promisify} = require('util')

const promisifiedRequest = promisify(request)

const getWeather = async () => {
    try {
        let data = await promisifiedRequest({url:`https://api.darksky.net/forecast/${apikey}/37.8267,-122.4233`, 
    json: true })
    console.log(data.body.currently.temperature)
    } catch (error) {
        console.log("oops there's been a problem")
        
    }
}




module.exports = {
    getWeather
}