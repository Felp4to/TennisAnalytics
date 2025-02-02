// script.js

import { fetchJSONData } from './loadData.js';
//import { drawHistogram } from './visualization2.js';
import { drawLineChart } from './visualizationHeight.js';
import { calculateHeightAvgForYearCourt, calculateAgeAvgForYearCourt } from './dataAnalysis.js';


document.addEventListener("DOMContentLoaded", async () => {

    try {
        var matches = await fetchJSONData('../data/matches/data.json');

        // calculate average age for year and surface
        const avgAgesForSurface = calculateAgeAvgForYearCourt(matches);

        // calculate average height for year and surface
        const avgHeightForSurface = calculateHeightAvgForYearCourt(matches);

        drawLineChart(avgHeightForSurface);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
});