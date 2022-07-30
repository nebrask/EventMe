import React from "react"
import { useEffect, useRef } from "react"
import markers from "./data/markers.json"
import * as tt from "@tomtom-international/web-sdk-maps"
import "@tomtom-international/web-sdk-maps/dist/maps.css"
import SearchBar from "./components/SearchBar.js"
import "./styles.css"

function EventList(){
  const event = [
    {
      "id": 121434, 
      "name": "Tim Hortons", 
      "location": "645 spadina", 
      "image": "https://dynl.mktgcdn.com/p/iPtg_H1oKh-P9fi_XQ6yd30k3tsk4vAKDOjLeGDH5bs/619x619.png" 
    },
    {
      "id": 121434, 
      "name": "Starbucks", 
      "location": "177 Emerson", 
      "image": "https://newsviews.thuraswiss.com/wp-content/uploads/2019/10/Starbucks-postpones-Myanmar-entry.jpg" 
    }
  ]
    const listItems = event.map(
      (element) => {
          return (
            <div class = "events">     
                <b>{element.name}</b>
                <br></br>
                {element.location}
                <br></br>
                <img class = "events-img" src={element.image} alt=""/>
                <div class = "spacer"/>
            </div>
          )
      }
  )
  return (
      <div>
          {listItems}
      </div>
  )
}

function App() {
  const API_KEY = "WtFBT6SAHRZqbwGb2Ioom8I9yAQoTu7B"
  const userLocation = {lon: -73.9857, lat: 40.748}
  const map = useRef()
  const mapContainer = useRef()

  
  useEffect(() => {
    map.current = tt.map({
      key: API_KEY,
      container: mapContainer.current.id,
      center: userLocation,
      zoom: 5,
      language: "en-GB",
    })
    

    map.current.addControl(new tt.FullscreenControl())
    map.current.addControl(new tt.NavigationControl())

    markers.map((marker) => {
      const address = marker?.address
      const location = marker?.coordinates
      return new tt.Marker()
        .setLngLat(location)
        .setPopup(new tt.Popup({ offset: 35 }).setHTML(address))
        .addTo(map.current)
    })

    return () => {
      map.current.remove()
    }
    //eslint-disable-next-line
    
  }, [])
  
  return (
    <div className="">
      <div class="container">
        <div class="row">
          <div>
             <h1 class="header-style"> Events App</h1>
             <h3 class="subheading">Finding events has never been easier!</h3>
          </div>
        <SearchBar/>
        <EventList/> 
        </div>
        <div ref={mapContainer} className="map" id="map" />
      </div> 
    </div>    
  )
}

export default App;
