// script4.js

//import * as Constants from './constants.js';
import { fetchJSONData } from './loadData.js';
import { drawStackedBarChart } from './visualizationCountries2.js';
import { getTimeSeriesCountries, calculateHeightAvgForYearCourt } from './dataAnalysis.js';



document.addEventListener("DOMContentLoaded", async () => {

    try {

        var matches = await fetchJSONData('../data/matches/data.json');
        //console.log(matches);

        // ottengo timeseries come array di istanze datapointCountries
        var timeseriesCountries = getTimeSeriesCountries(matches);

        // calculate average height for year and surface
        const avgHeightForSurface = calculateHeightAvgForYearCourt(matches);

        // draw chart
        drawStackedBarChart(timeseriesCountries, avgHeightForSurface);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
});