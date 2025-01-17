// class Match

class Match {
  constructor({
    tourney_id,
    tourney_name,
    surface,
    draw_size,
    tourney_level,
    tourney_date,
    match_num,
    winner_id,
    winner_seed,
    winner_entry,
    winner_name,
    winner_hand,
    winner_ht,
    winner_ioc,
    winner_age,
    loser_id,
    loser_seed,
    loser_entry,
    loser_name,
    loser_hand,
    loser_ht,
    loser_ioc,
    loser_age,
    score,
    best_of,
    round,
    minutes,
    w_ace,
    w_df,
    w_svpt,
    w_1stIn,
    w_1stWon,
    w_2ndWon,
    w_SvGms,
    w_bpSaved,
    w_bpFaced,
    l_ace,
    l_df,
    l_svpt,
    l_1stIn,
    l_1stWon,
    l_2ndWon,
    l_SvGms,
    l_bpSaved,
    l_bpFaced,
    winner_rank,
    winner_rank_points,
    loser_rank,
    loser_rank_points
  }) {
    this.tourney_id = tourney_id;
    this.tourney_name = tourney_name;
    this.surface = surface;
    this.draw_size = draw_size;
    this.tourney_level = tourney_level;
    this.tourney_date = tourney_date;
    this.match_num = match_num;
    this.winner_id = winner_id;
    this.winner_seed = winner_seed || ''; // Default to empty if not provided
    this.winner_entry = winner_entry || '';
    this.winner_name = winner_name;
    this.winner_hand = winner_hand;
    this.winner_ht = winner_ht || null; // Default to null if not provided
    this.winner_ioc = winner_ioc;
    this.winner_age = winner_age || null; // Default to null if not provided
    this.loser_id = loser_id;
    this.loser_seed = loser_seed || '';
    this.loser_entry = loser_entry || '';
    this.loser_name = loser_name;
    this.loser_hand = loser_hand;
    this.loser_ht = loser_ht || null; // Default to null if not provided
    this.loser_ioc = loser_ioc;
    this.loser_age = loser_age || null; // Default to null if not provided
    this.score = score;
    this.best_of = best_of;
    this.round = round;
    this.minutes = minutes || null; // Default to null if not provided
    this.w_ace = w_ace || '';
    this.w_df = w_df || '';
    this.w_svpt = w_svpt || '';
    this.w_1stIn = w_1stIn || '';
    this.w_1stWon = w_1stWon || '';
    this.w_2ndWon = w_2ndWon || '';
    this.w_SvGms = w_SvGms || '';
    this.w_bpSaved = w_bpSaved || '';
    this.w_bpFaced = w_bpFaced || '';
    this.l_ace = l_ace || '';
    this.l_df = l_df || '';
    this.l_svpt = l_svpt || '';
    this.l_1stIn = l_1stIn || '';
    this.l_1stWon = l_1stWon || '';
    this.l_2ndWon = l_2ndWon || '';
    this.l_SvGms = l_SvGms || '';
    this.l_bpSaved = l_bpSaved || '';
    this.l_bpFaced = l_bpFaced || '';
    this.winner_rank = winner_rank || '';
    this.winner_rank_points = winner_rank_points || '';
    this.loser_rank = loser_rank || '';
    this.loser_rank_points = loser_rank_points || '';
  }

  // Metodi get per ogni proprietà
  getTourneyId() {
    return this.tourney_id;
  }

  getTourneyName() {
    return this.tourney_name;
  }

  getSurface() {
    return this.surface;
  }

  getDrawSize() {
    return this.draw_size;
  }

  getTourneyLevel() {
    return this.tourney_level;
  }

  getTourneyDate() {
    return this.tourney_date;
  }

  getMatchNum() {
    return this.match_num;
  }

  getWinnerId() {
    return this.winner_id;
  }

  getWinnerSeed() {
    return this.winner_seed;
  }

  getWinnerEntry() {
    return this.winner_entry;
  }

  getWinnerName() {
    return this.winner_name;
  }

  getWinnerHand() {
    return this.winner_hand;
  }

  getWinnerHt() {
    return this.winner_ht;
  }

  getWinnerIoc() {
    return this.winner_ioc;
  }

  getWinnerAge() {
    return this.winner_age;
  }

  getLoserId() {
    return this.loser_id;
  }

  getLoserSeed() {
    return this.loser_seed;
  }

  getLoserEntry() {
    return this.loser_entry;
  }

  getLoserName() {
    return this.loser_name;
  }

  getLoserHand() {
    return this.loser_hand;
  }

  getLoserHt() {
    return this.loser_ht;
  }

  getLoserIoc() {
    return this.loser_ioc;
  }

  getLoserAge() {
    return this.loser_age;
  }

  getScore() {
    return this.score;
  }

  getBestOf() {
    return this.best_of;
  }

  getRound() {
    return this.round;
  }

  getMinutes() {
    return this.minutes;
  }

  getWAce() {
    return this.w_ace;
  }

  getWdf() {
    return this.w_df;
  }

  getWSvpt() {
    return this.w_svpt;
  }

  getW1stIn() {
    return this.w_1stIn;
  }

  getW1stWon() {
    return this.w_1stWon;
  }

  getW2ndWon() {
    return this.w_2ndWon;
  }

  getWSvGms() {
    return this.w_SvGms;
  }

  getWBpSaved() {
    return this.w_bpSaved;
  }

  getWBpFaced() {
    return this.w_bpFaced;
  }

  getLAce() {
    return this.l_ace;
  }

  getLdf() {
    return this.l_df;
  }

  getLSvpt() {
    return this.l_svpt;
  }

  getL1stIn() {
    return this.l_1stIn;
  }

  getL1stWon() {
    return this.l_1stWon;
  }

  getL2ndWon() {
    return this.l_2ndWon;
  }

  getLSvGms() {
    return this.l_SvGms;
  }

  getLBpSaved() {
    return this.l_bpSaved;
  }

  getLBpFaced() {
    return this.l_bpFaced;
  }

  getWinnerRank() {
    return this.winner_rank;
  }

  getWinnerRankPoints() {
    return this.winner_rank_points;
  }

  getLoserRank() {
    return this.loser_rank;
  }

  getLoserRankPoints() {
    return this.loser_rank_points;
  }

  // Metodo per stampare tutti i campi su una sola riga
  print() {
    console.log(
      `${this.tourney_id} ${this.tourney_name} ${this.surface} ${this.draw_size} ${this.tourney_level} ${this.tourney_date} ${this.match_num} ` +
      `${this.winner_id} ${this.winner_seed} ${this.winner_entry} ${this.winner_name} ${this.winner_hand} ${this.winner_ht} ${this.winner_ioc} ${this.winner_age} ` +
      `${this.loser_id} ${this.loser_seed} ${this.loser_entry} ${this.loser_name} ${this.loser_hand} ${this.loser_ht} ${this.loser_ioc} ${this.loser_age} ` +
      `${this.score} ${this.best_of} ${this.round} ${this.minutes} ${this.w_ace} ${this.w_df} ${this.w_svpt} ${this.w_1stIn} ${this.w_1stWon} ${this.w_2ndWon} ${this.w_SvGms} ` +
      `${this.w_bpSaved} ${this.w_bpFaced} ${this.l_ace} ${this.l_df} ${this.l_svpt} ${this.l_1stIn} ${this.l_1stWon} ${this.l_2ndWon} ${this.l_SvGms} ${this.l_bpSaved} ` +
      `${this.l_bpFaced} ${this.winner_rank} ${this.winner_rank_points} ${this.loser_rank} ${this.loser_rank_points}`
    );
  }
}


export default Match; 