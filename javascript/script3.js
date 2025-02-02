// script.js

import { fetchJSONData } from './loadData.js';
import { drawLineChart } from './visualizationAge.js';
import { calculateAgeAvgForYearCourt } from './dataAnalysis.js';


document.addEventListener("DOMContentLoaded", async () => {

    try {
        var matches = await fetchJSONData('../data/matches/data.json');

        // calculate average age for year and surface
        const avgAgesForSurface = calculateAgeAvgForYearCourt(matches);
  
        // draw line chart ages
        drawLineChart(avgAgesForSurface);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
});