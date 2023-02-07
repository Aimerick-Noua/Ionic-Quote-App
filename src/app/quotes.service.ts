import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = "https://api.quotable.io";
@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }
  getQuotes(limit:any, skip:any) {
    return this.http.get(API_URL + "/quotes/?limit=" + limit + "&skip=" + skip);
  }
}
