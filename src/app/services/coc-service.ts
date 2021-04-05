import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CocPlayerModel} from "../models/coc-player-model";
import {PlayerTagForm} from "../models/player-tag-form";
import {Observable} from "rxjs";

@Injectable()
export class CocService {

  constructor(private httpClient: HttpClient) {
  }

  getCocPlayerInfo(playerTagForm: PlayerTagForm): Observable<any> {
    return this.httpClient.get<CocPlayerModel>("/api/players/%23" + playerTagForm.player_tag);
  }

}
