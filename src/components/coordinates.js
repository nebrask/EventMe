 import React, {useState, useEffect} from "react";
 import * as tt from "@tomtom-international/web-sdk-maps"

/* function Coordinates() {
    const [coordinates, setCoordinates] = useState([]);
    useEffect( () => {
        fetch("/coordinates/")
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => setCoordinates(jsonRes.coordinateList))
        
    }   
    )
  //  console.log(coordinates);
    return (<div>
       {coordinates.map(dict => (<li>{dict.coords}</li>))}
    </div>)
    
    
} 
*/
function Coordinates(map) {
const [coordinates, setCoordinates] = useState([]);
    useEffect( () => {
        fetch("/coordinates/")
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => setCoordinates(jsonRes.coordinateList))
        
    }   
    )
    return ( coordinates.map(item => new tt.Marker()
      .setLngLat(item.coords)
      .setPopup(new tt.Popup({ offset: 35 }).setHTML(item.address)) // could change this to website link of event
      .addTo(map.current)
    )
    )
}
export default Coordinates;