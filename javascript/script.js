// script.js

import { fetchJSONData } from './loadData.js';
import { drawHistogram } from './visualization2.js';
import { calculateHeightAvgForYearCourt, calculateAgeAvgForYearCourt, countMatchesCountry } from './dataAnalysis.js';


document.addEventListener("DOMContentLoaded", async () => {

    try {
        var matches = await fetchJSONData('../data/matches/data.json');

        // calculate average age for year and surface
        const avgAgesForSurface = calculateAgeAvgForYearCourt(matches);

        // calculate average height for year and surface
        const avgHeightForSurface = calculateHeightAvgForYearCourt(matches);

        drawHistogram(avgHeightForSurface, avgAgesForSurface);

        
        // calculate matches won for earch year and country
        const matchesWonCountryYear = countMatchesCountry(matches);
        //alert(matchesWonCountryYear);
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
});