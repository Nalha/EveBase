import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {TokenService} from "../../services/token.service";
import {Http, RequestOptionsArgs, Response, ResponseContentType} from "@angular/http";

@Component({
  selector: 'app-token',
  templateUrl: 'token.component.html',
  styleUrls: ['token.component.css']
})
export class TokenComponent implements OnInit {

  queryParamsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private tokenService: TokenService,
              private http: Http,
              private router: Router) { }


  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((data: {[key: string]: string}) => {
      if(data["code"] && data["state"] === localStorage.getItem("state")){
        let options: RequestOptionsArgs = {
          search: "code=" + data["code"],
          responseType: 1
        };
        this.http.get("https://944bn5xtg8.execute-api.eu-central-1.amazonaws.com/beta/token", options).subscribe((res: Response) => {
          let accesstoken: string = res.json().access_token;
          let expiry: number = (res.json().expires_in * 1000) + new Date().getTime();
          let refreshtoken: string = res.json().refresh_token;
          let tokentype: string = res.json().token_type;

          this.tokenService.refreshTokenSubject.next(refreshtoken);

          localStorage.setItem("token", accesstoken);
          localStorage.setItem("refreshtoken", refreshtoken);
          localStorage.setItem("tokenexpiry", expiry.toString());

          localStorage.removeItem("state");

          this.router.navigateByUrl("");
        });
      } else {
        this.router.navigateByUrl("");
      }
    });
  }



  sendCode() {

  }

}
