import {CocLegendLeagueTournamentSeasonResult} from "./coc-legend-league-tournament-season-result";

export interface CocPlayerLegendStatistics {
  previousSeason: CocLegendLeagueTournamentSeasonResult;
  previousVersusSeason: CocLegendLeagueTournamentSeasonResult;
  currentSeason: CocLegendLeagueTournamentSeasonResult;
  bestVersusSeason: CocLegendLeagueTournamentSeasonResult;
  legendTrophies: number;
  bestSeason: CocLegendLeagueTournamentSeasonResult;
}
