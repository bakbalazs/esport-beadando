import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CocPlayerModel} from "./models/coc-player-model";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CocService} from "./services/coc-service";
import {CocApiError} from "./models/coc-api-error";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup | undefined;
  isLoading: boolean = false;
  cocPlayerModel: CocPlayerModel | undefined;
  backendError: boolean = false;
  backendErrorText: String | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private cocService: CocService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      player_tag: ['', Validators.required]
    })
  }

  get playerTag(): AbstractControl {
    // @ts-ignore
    return this.formGroup.get('player_tag');
  }

  getData() {
    this.isLoading = true;
    this.cocService.getCocPlayerInfo(this.formGroup?.value)
      .subscribe((cocPlayerModel: CocPlayerModel) => {
        this.isLoading = false;
        this.backendError = false;
        this.cocPlayerModel = cocPlayerModel;
        console.log(cocPlayerModel);
      }, (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.backendError = true;
        let cocApiError: CocApiError = error.error;
        this.backendErrorText = cocApiError.reason;
      })
  }
}
