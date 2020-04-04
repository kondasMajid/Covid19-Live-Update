import { ICountry } from "./../shared/country.model";
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren
} from "@angular/core";
import { CovidService } from "../shared/covid.service";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  CoronaCase: any;
  Error;
  input: FormControl;
  constructor(private covidService: CovidService) {
    this.input = new FormControl();
  }

  country; cases; todayCases; deaths;
  todayDeaths;  recovered;  active;  critical;
  casesPerOneMillion;  deathsPerOneMillion;  updated;

  searchCountry = this.covidService.countryInput;
  CoronaCaseCountry =[];
  CoronaCaseSummary;
  Data;
  ngOnInit() {
    // this.getData();
    this.getContry()
    this.getDataSummary()
 
  }

  // getData(){
  //   return  this.covidService.getData(this.searchCountry).subscribe(res => {
  //     this.CoronaCase =  res;
  //     console.log(this.CoronaCase);
  //   })
  // }
  getData() {
    this.covidService.getData(this.searchCountry).subscribe(
      res => {
      this.CoronaCase = res;

     
    if(this.CoronaCase === ' '){
      alert('please enter country')
    }
       console.log(this.CoronaCase);
      // return
    } , err => {
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
       console.log(' countries',this.CoronaCaseCountry);
      }, err => {
        this.Error = err;
        console.log(Error)
      })
  }

  getDataSummary() {
    this.covidService.getAllRecords().subscribe(
      res => {
      this.CoronaCaseSummary = res;
       console.log(this.CoronaCaseSummary);
    })
  }
}
