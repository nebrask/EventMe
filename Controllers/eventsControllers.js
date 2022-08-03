exports.eventsController = (req, res) => {
    var events_results
    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("b359869224e1b318f8e968a9c58e0e41d98816f6f410b340b2f4c51ef5734590");
    
    const params = {
      engine: "google_events",
      q: "Events in Austin",
      hl: "en",
      gl: "us"
    };
    const callback = function(data) {
       events_results = data["events_results"];
       res.json({
        eventsList: [events_results]
    })
    };
    
    // Show result as JSON
    search.json(params, callback);
    //lol = require("searchData");
    
}