import { Component } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

loadMore(event:any) {
  this.skip = this.skip+10;
  if(this.skip == 2000){
    event.target.disabled = true;
  }
  this.loadQuotes(event)
}
  quotes:any=[];
  limit=10;
  skip=0;

  constructor(public quoteService:QuotesService) {
this.loadQuotes(event);
  }
  loadQuotes(event:any){
     this.quoteService.getQuotes(this.limit,this.skip).subscribe(
      (q:any )=> {
        this.quotes = this.quotes.concat(q["results"]);
        console.log(this.quotes);

        if(event){
          event.target.complete();
        }
      }
    )
  }

}
