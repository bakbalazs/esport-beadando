import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MaterialImportsModule} from "./modules/material-imports.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CocService} from "./services/coc-service";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import { RowDataComponent } from './components/row-data/row-data.component';

@NgModule({
  declarations: [
    AppComponent,
    RowDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    CocService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
