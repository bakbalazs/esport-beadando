import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CocPlayerModel} from "./model/coc-player-model";
import {environment} from "../environments/environment";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent implements OnInit {

  formGroup: FormGroup | undefined;
  isLoading: boolean = false;
  cocPlayerModel: CocPlayerModel | undefined;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      player_tag: ['']
    })
  }

  test() {
    const headers1 = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ` + environment.apiKey,
    })
    this.isLoading = true;
    this.httpClient.get<CocPlayerModel>("/api/players/%23" + this.formGroup?.value.player_tag, {headers: headers1}
    ).subscribe((tes: CocPlayerModel) => {
      console.log(tes);
      this.cocPlayerModel = tes;
      this.isLoading = false;
    })
  }

}
