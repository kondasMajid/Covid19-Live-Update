import { HeaderComponent } from './routes/header/header.component';
import { AllCountriesComponent } from './routes/all-countries/all-countries.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {  CovidService } from './shared/covid.service';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'all-countries', component: AllCountriesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AllCountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule],
  providers: [CovidService,
    //  {provide: HTTP_INTERCEPTORS,
    //  useClass:GitHubHttpInterceptor,
    // multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
