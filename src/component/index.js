import React, { useState } from 'react';
import fishFarm from '../data/fishFarm'
function Profil(){
   const [Dat,setData] = useState(fishFarm);
    return <div>
      <h4>Fish Table</h4>
      {Dat.map(child=> {
        return <div class="flex-container">
                  <h5>Name...: {child.fishType} <p/> Date...: {child.entryDate.toLocaleDateString()}</h5>   
                  <h5>durationInDays....: {child.durationInDays} <p/>itemWeightInGrams....: {child.itemWeightInGrams}</h5>   
                  <h5>originCountry...: {child.originCountry} <p/> season..: {child.season}</h5>   
                  <h5>tockVolumeInKg...: {child.tockVolumeInKg} <p/>saleLocations.: {child.ssaleLocations}</h5>   
              </div> })
      }
    </div>
}
export default Profil;

// entryDate: new Date(2021, 0, 1),    // 01.01.2021
//         durationInDays: 30,
//         itemWeightInGrams: 145,
//         originCountry: "Norway", 
//         season: "Winter", 
//         stockVolumeInKg: 6500,
//         saleLocations: ["ZH", "GE", "BE", "VD"],