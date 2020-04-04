import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {  CovidService } from './shared/covid.service';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [CovidService,
    //  {provide: HTTP_INTERCEPTORS,
    //  useClass:GitHubHttpInterceptor,
    // multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
