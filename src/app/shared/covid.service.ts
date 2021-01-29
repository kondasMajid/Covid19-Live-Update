
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ICountry } from "./country.model";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CovidService {
  ApiURL = environment.ApiUrl;
  ApiAll = environment.ApiAll;

  countryInput;
  country;
  result;
  constructor(private http: HttpClient) { }
  getData(country: string) {
    return this.http.get(this.ApiURL + country);
  }
  getCountry() {
    return this.http.get(this.ApiURL);
  }
  getAllRecords() {
    return this.http.get(this.ApiAll);
  }
}
