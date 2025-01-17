// dataAnalysis.js

import * as Constants from './constants.js';


// filter matches by court surface
function filterMatchesByCourt(matches, court)
{
    return matches.filter(match => match['surface'] === court);
}

// filter matches by year
function filterMatchesByYear(matches, year) {
    return matches.filter(match => 
        match['tourney_id'].slice(0, 4) === year && match['surface'] != "Carpet" && match['surface'] != ""
    );
}

// return min year as string
export function getMinYear(matches) {
    const earliestMatch = matches.reduce((earliest, match) => {
        const matchYear = parseInt(match['tourney_id'].slice(0, 4));  // Estrai i primi 4 caratteri e convertili in numero
        const earliestYear = parseInt(earliest['tourney_id'].slice(0, 4)); // Estrai e converte l'anno di earliest

        return matchYear < earliestYear ? match : earliest;
    });

    // Restituisci l'anno come stringa
    return earliestMatch['tourney_id'].slice(0, 4);
}

// return max year as string
export function getMaxYear(matches) {
    const latestMatch = matches.reduce((latest, match) => {
        const matchYear = parseInt(match['tourney_id'].slice(0, 4));  // Estrai i primi 4 caratteri e convertili in numero
        const latestYear = parseInt(latest['tourney_id'].slice(0, 4)); // Estrai e converte l'anno di latest

        return matchYear > latestYear ? match : latest;
    });

    // Restituisci l'anno come stringa
    return latestMatch['tourney_id'].slice(0, 4);
}

// calculate average height for each year and surface
export function calculateHeightAvgForYearCourt(matches)
{
    const avgHeightForSurface = {
        Hard: [],
        Grass: [],
        Clay: []
    }; 
    var indexStart = getMinYear(matches);
    var indexStop = getMaxYear(matches);
    Constants.SURFACES.forEach(surface => {
        for (let year = indexStart; year <= indexStop; year++)
        {
            let sumHeights = 0;
            let numMatches = 0;
            const filtered_matches = filterMatchesByCourt(filterMatchesByYear(matches, String(year)), surface);
            filtered_matches.forEach(element => {
                if(element.getWinnerHt())
                {
                    sumHeights += Number(element.getWinnerHt());
                    numMatches++;
                }
            });
            
            const avgHeight = numMatches > 0 ? sumHeights / numMatches : 0;
            avgHeightForSurface[surface].push(avgHeight);
        }
    });

    return avgHeightForSurface;
}

// calculate average age for each year and surface
export function calculateAgeAvgForYearCourt(matches)
{
    const avgAgesForSurface = {
        Hard: [],
        Grass: [],
        Clay: []
    };
    Constants.SURFACES.forEach(surface => {
        for (let year = 1970; year <= 2024; year++)
        {
            let sumAges = 0;
            let numMatches = 0;
            const filtered_matches = filterMatchesByCourt(filterMatchesByYear(matches, String(year)), surface);
            filtered_matches.forEach(element => {
                if(element.getWinnerAge())
                {
                    sumAges += Number(element.getWinnerAge());
                    numMatches++;
                }
            });
            
            const avgAges = numMatches > 0 ? sumAges / numMatches : 0;
            avgAgesForSurface[surface].push(avgAges);
        }
    });

    return avgAgesForSurface;
}

// get all countries from matches
export function getAllCountries(matches)
{
    let countries = new Set();

    // Popola il Set con i paesi
    matches.forEach(element => {
        if (element.getLoserIoc()) {
            countries.add(element.getLoserIoc());
        }
    });

    // Trasforma il Set in un dizionario con valori null
    let countryDictionary = {};
    countries.forEach(country => {
        countryDictionary[country] = 0;
    });

    return countryDictionary;
}

// count matches won for each country and for year
export function countMatchesCountryForYear(matches, year, court)
{
    var filtered_matches = filterMatchesByYear(matches, String(year));
    if(court != null)
        filtered_matches = filterMatchesByCourt(filtered_matches, court);
    var countryDictionary = getAllCountries(matches);
    filtered_matches.forEach(match => {
        countryDictionary[match.getWinnerIoc()] += 1;
    });
    
    return countryDictionary;
}

// return count of matches for country and year
export function countMatchesCountry(matches, court=null)
{
    var startIndex = getMinYear(matches);
    var stopIndex = getMaxYear(matches);

    const arrayYears = new Array(stopIndex-startIndex).fill(null);

    for(let i=0; i <= stopIndex-startIndex; i++)
    {
        arrayYears[i] = countMatchesCountryForYear(matches, i+Number(startIndex), court);
    }

    return arrayYears;
}


// return total matches for each year
export function countMatchesForEveryYear(matches)
{
    var numMatches = [];
    // Itera su ogni oggetto
    matches.forEach(element => {
        // Calcola la somma dei valori nell'oggetto corrente
        numMatches.push(Object.values(element)
            .filter(valore => typeof valore === 'number' && !isNaN(valore))
            .reduce((acc, valore) => acc + valore, 0));
    });

    return numMatches;
}
