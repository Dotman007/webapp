import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { event } from './models/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  eventList : event[] =[];
  city: string = "";
  price :number = 0;
  
  constructor(private http: HttpClient){

  }
  ngOnInit():void{
    this.http.get<event[]>('./assets/event.json').subscribe((response)=>{
      this.eventList = response;
      console.log(this.eventList);
    })
  }

  ngSearch():any{
    this.http.get<event[]>('./assets/event.json').subscribe((response)=>{
      this.eventList.length =0;
      this.eventList = response.filter(e=>e.city === this.city || e.price == this.price);
      console.log("Search "+JSON.stringify(this.eventList));
    })
  }
}
