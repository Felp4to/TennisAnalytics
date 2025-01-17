// loadData.js

import Match from './match.js';


export function mapJson(jsonUrl)
{
    // Funzione per caricare e mappare il JSON
    fetch(jsonUrl)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();                             // Parse the JSON from the response
    })
    .then(data => {
        //var matches = mapMatches(data);               // Mappa i dati JSON nelle istanze di Match
        //console.log(matches);                         // Stampa l'array di oggetti 
        return data;
    })
    .catch(error => {
    console.error('Error fetching the JSON file:', error);
    });
}

// Funzione per mappare il JSON in un array di istanze Match
function mapMatches(jsonData)
{
    const matches = jsonData.map(item => {
        let match = new Match({
            tourney_id: item.tourney_id,
            tourney_name: item.tourney_name,
            surface: item.surface,
            draw_size: item.draw_size,
            tourney_level: item.tourney_level,
            tourney_date: item.tourney_date,
            match_num: item.match_num,
            winner_id: item.winner_id,
            winner_seed: item.winner_seed,
            winner_entry: item.winner_entry,
            winner_name: item.winner_name,
            winner_hand: item.winner_hand,
            winner_ht: item.winner_ht,
            winner_ioc: item.winner_ioc,
            winner_age: item.winner_age,
            loser_id: item.loser_id,
            loser_seed: item.loser_seed,
            loser_entry: item.loser_entry,
            loser_name: item.loser_name,
            loser_hand: item.loser_hand,
            loser_ht: item.loser_ht,
            loser_ioc: item.loser_ioc,
            loser_age: item.loser_age,
            score: item.score,
            best_of: item.best_of,
            round: item.round,
            minutes: item.minutes,
            w_ace: item.w_ace,
            w_df: item.w_df,
            w_svpt: item.w_svpt,
            w_1stIn: item.w_1stIn,
            w_1stWon: item.w_1stWon,
            w_2ndWon: item.w_2ndWon,
            w_SvGms: item.w_SvGms,
            w_bpSaved: item.w_bpSaved,
            w_bpFaced: item.w_bpFaced,
            l_ace: item.l_ace,
            l_df: item.l_df,
            l_svpt: item.l_svpt,
            l_1stIn: item.l_1stIn,
            l_1stWon: item.l_1stWon,
            l_2ndWon: item.l_2ndWon,
            l_SvGms: item.l_SvGms,
            l_bpSaved: item.l_bpSaved,
            l_bpFaced: item.l_bpFaced,
            winner_rank: item.winner_rank,
            winner_rank_points: item.winner_rank_points,
            loser_rank: item.loser_rank,
            loser_rank_points: item.loser_rank_points
        });
        
        return match;
    });

    return matches;
}

export async function fetchJSONData(url)
{
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Errore nel caricamento dei dati: ${response.statusText}`);
        }
        const data = await response.json();
        const matches = mapMatches(data);
        return matches;
    } catch (error) {
        console.error(error);
        return null;
    }
}
