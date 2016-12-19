import { Component, OnInit } from '@angular/core';
import {UUID} from "angular2-uuid";
import {TokenService} from "../../services/token.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hasToken: boolean;

  refreshTokenSubscription: Subscription;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.refreshTokenSubscription = this.tokenService.refreshTokenSubject.subscribe((refreshtoken: string) => {
      this.hasToken = !!refreshtoken;
    });
  }

  goToLogin() {
    let uuid = UUID.UUID();
    localStorage.setItem("state", uuid);
    window.location.href = "https://login.eveonline.com/oauth/authorize" +
      "?response_type=code" +
      "&redirect_uri=" + encodeURIComponent("http://evebase-web-test.s3-website.eu-central-1.amazonaws.com/#/token") +
      "&client_id=f494ce692cfd498da673d9bfc2c77798" +
      "&scope=characterContractsRead" +
      "&state=" + uuid;
  }

}
