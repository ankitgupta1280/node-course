const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=f6229a5cd6d737bd71a9295a0f454ef2&query=&units=f'

// request({url: url , json: true}, (error, response)=>{
//     //console.log(error)
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log(response.body.error.info)

//     }else{
//         const temp = response.body.current.temperature;
//         const rain = response.body.current.precip
//         console.log(response.body.current.weather_descriptions[0]+'. It is currently '+temp+' degrees out . There is a '+rain+'% chance of rain ')

//     }
    
// })

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Satna.json?access_token=pk.eyJ1IjoiYW5raXRndXB0YTMwNSIsImEiOiJja3J1aG83cXowaWRmMm5vY2R4bWtrNXN6In0.KietnfSfvDzypnfLmuEegg'

request({url : url1 , json: true},(error, response)=>{
    //console.log(response.body)
    if(error){
        console.log('mapbox is not working')
    }else if(response.body.features.length===0){
        console.log('enter correct name of the place ')
    }
    else{
        const latitute = response.body.features[0].geometry.coordinates[0]
        const longitude = response.body.features[0].geometry.coordinates[1] 
        console.log(latitute +' '+ longitude)
        console.log(response.body.features[0].place_name)
    }
    
})