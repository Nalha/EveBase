import { Component, OnInit } from '@angular/core';
import {Http, RequestOptionsArgs, Headers, Response} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    let options = <RequestOptionsArgs>{
      headers: new Headers({
        "Authorization": "Bearer " + localStorage.getItem("token")
      })
    };
    this.http.get("https://login-tq.eveonline.com/oauth/token/", options).subscribe((res: Response) => {
      console.log(res.json());
    });
  }



}
