import React from "react";



const WeatherDisplay=({weather})=>{

const tempStyle={
    color:weather.temperature>20?'red':'blue'
}



return(
<div>
<p style={tempStyle}>temperature:{weather.tempearture}</p>
<p>Conditions:{weather.conditions}</p>
</div>
)
}

export default WeatherDisplay;