import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CovidService } from 'src/app/shared/covid.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor() { }

  CoronaCase: any;
  Error;
  input: FormControl;
  constructor(private covidService: CovidService) {
    this.input = new FormControl();
  }

  country; cases; todayCases; deaths;
  todayDeaths; recovered; active; critical;
  casesPerOneMillion; deathsPerOneMillion; updated;

  searchCountry = this.covidService.countryInput;
  CoronaCaseCountry = [];
  CoronaCaseSummary;
  Data;
  ngOnInit() {
    this.getContry()
    this.getDataSummary()

  }
  getData(value: string) {

    if (!value) {
      alert('no country entered, please enter a country name and search')
    } this.covidService.getData(value).subscribe(
      res => {
        this.CoronaCase = res;

        if (this.CoronaCase === ' ') {
          alert('please enter country')
        }
        console.log(this.CoronaCase);
        // return
      }, err => {
        this.Error = err;
        console.log(Error)
      })
  }

  getContry() {
    this.covidService.getCountry().subscribe(
      res => {
        this.Data = res;
        this.CoronaCaseCountry.push(this.Data);
        // retrun this.CoronaCaseCountry;
        // this.CoronaCaseCountry = res;
        //  console.log(' countries',this.CoronaCaseCountry);
      }, err => {
        this.Error = err;
        console.log(Error)
      })
  }
  getDataSummary() {
    this.covidService.getAllRecords().subscribe(
      res => {
        this.CoronaCaseSummary = res;
        //  console.log(this.CoronaCaseSummary);
      })
  }

}
