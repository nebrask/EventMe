import React, {useState, useEffect} from "react";

function Events() {
    const [events, setEvents] = useState([]);
    useEffect( () => {
        fetch("/events/")
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => setEvents(jsonRes.eventsList))
        {
            console.log(events[0]);
        }

    }   
    )
    return (<div>
       {events.map(eventsArray => eventsArray.map(event => <li>{event.address}</li>))}
    </div>)
} 

export default Events;