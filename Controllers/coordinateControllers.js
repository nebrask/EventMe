const axios = require("axios");
exports.coordinateController = async(req, res) => {
    const API_KEY = "WtFBT6SAHRZqbwGb2Ioom8I9yAQoTu7B";
    const getCoordinates = async (searchQuery) =>
    {
        searchQuery = searchQuery.replaceAll(" ", "%20");
        searchQuery = searchQuery.replaceAll(" ", "%2C");
        let searchURL = `https://api.tomtom.com/search/2/geocode/${searchQuery}.json?&key=${API_KEY}`; 
        console.log(searchURL);
        const response = await axios.get(searchURL);
        let latitude = response.data.results[0].position.lat;
        let longitude = response.data.results[0].position.lon;
        coordinates = [longitude, latitude];
        return coordinates;
        
    }
    const eventsName = ["15505 I-35 BUILDING CAustin, TX",
        '8509 Burleson RdAustin, TX',
        " 7000 Comanche TrailAustin, TX"]
  //      "The Long Center for the Performing Arts, 701 W Riverside DrAustin, TX",
  //      "ACL Live, 310 W Willie Nelson BlvdAustin, TX",
 //       "Stubb's Bar-B-Q, 801 Red River StAustin, TX"];
    var coordsAndAddresses = [];
   
    for (let i = 0; i < eventsName.length; i++) {
        let latlong = await getCoordinates(eventsName[i]);
        dict = {"coords": latlong, "address":eventsName[i]};
        coordsAndAddresses.push(dict);
    }
    
    res.json({
        coordinateList : coordsAndAddresses
    })
    

}