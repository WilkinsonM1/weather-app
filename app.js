const request = require('request')

const apikey = "d4b693d843f9b93d20786aae043796d4"

request({url:"https://api.darksky.net/forecast/d4b693d843f9b93d20786aae043796d4/37.8267,-122.4233" }, (error,response) =>{
    if(error){
        console.log(error)
    }else{
        const data = JSON.parse(response.body)
        console.log(data.currently.temperature)
    }
})