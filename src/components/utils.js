import React from 'react'
import numeral from 'numeral'
import { Circle,Popup } from 'leaflet';

const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      mulitiplier: 800,
    },
  
    recovered: {
      hex: "#7DD71D",
      mulitiplier: 1200,
    },
  
    deaths: {
      hex: "#C0C0C0",
      mulitiplier: 2000,
    },
  };


export const sortData=(data)=>{
    const sortedData=[...data]

    sortedData.sort((firstCountry,secondCountry)=>{
        if(firstCountry.cases>secondCountry.cases){
            return -1;
        }

        else{
            return 1;
        }
    })

    return sortedData
}

export const showDataOnMap = (data,casesType="cases") =>

    data.map ((country) => (
      <Circle 
      center={[country.countryInfo.lat,country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
      >

      <Popup>
        <h1>I am a PopUp</h1>
      </Popup>
      </Circle>
  ))



