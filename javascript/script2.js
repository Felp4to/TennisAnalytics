// script2.js

import { fetchJSONData } from './loadData.js';
//import { drawHistogram } from './visualization2.js';
import { countMatchesCountry, countMatchesForEveryYear } from './dataAnalysis.js';


document.addEventListener("DOMContentLoaded", async () => {

    try {
        var matches = await fetchJSONData('../data/matches/data.json');
        
        // calculate matches won for earch year and country
        console.log("All courts");
        const matchesWonCountryYear = countMatchesCountry(matches, null);
        console.log(matchesWonCountryYear);
        console.log(countMatchesForEveryYear(matchesWonCountryYear));

        console.log("Clay");
        const matchesWonCountryYearClay = countMatchesCountry(matches, "Clay");
        console.log(matchesWonCountryYearClay);
        console.log(countMatchesForEveryYear(matchesWonCountryYearClay));

        console.log("Grass");
        const matchesWonCountryYearGrass = countMatchesCountry(matches, "Grass");
        console.log(matchesWonCountryYearGrass);
        console.log(countMatchesForEveryYear(matchesWonCountryYearGrass));

        console.log("Hard");
        const matchesWonCountryYearHard = countMatchesCountry(matches, "Hard");
        console.log(matchesWonCountryYearHard);
        console.log(countMatchesForEveryYear(matchesWonCountryYearHard));
        //console.log(countMatchesForYearSurface(matchesWonCountryYear, "Grass"));
                
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
});