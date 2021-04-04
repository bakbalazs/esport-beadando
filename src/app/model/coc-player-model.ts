import {CocPlayerItemLevel} from "./coc-player-item-level";
import {CocPlayerClan} from "./coc-player-clan";
import {CocPlayerLegendStatistics} from "./coc-player-legend-statistics";
import {CocPlayerAchievementProgress} from "./coc-player-achievement-progress";
import {CocLeague} from "./coc-league";

export interface CocPlayerModel {
  tag: string;
  name: string;
  role: string;
  attackWins: number;
  defenseWins: number;
  townHallLevel: number;
  townHallWeaponLevel: number;
  versusBattleWins: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  donations: number;
  donationsReceived: number;
  builderHallLevel: number;
  versusTrophies: number;
  bestVersusTrophies: number;
  warStars: number;
  versusBattleWinCount: number;
  troops: CocPlayerItemLevel[];
  heroes: CocPlayerItemLevel[];
  spells: CocPlayerItemLevel[];
  clan: CocPlayerClan;
  legendStatistics: CocPlayerLegendStatistics;
  achievements: CocPlayerAchievementProgress[];
  league: CocLeague;
}
