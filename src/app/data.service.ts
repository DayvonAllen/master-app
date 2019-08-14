import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  results = [{
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectHiragana: [],
    count: 0
  }]

  getAllData(){
    return this.http.get("http://localhost:3000/basic")
  }
  

  getResults(){
    return this.results;
  }

}
