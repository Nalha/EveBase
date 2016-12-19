import {Injectable} from "@angular/core";
import {Subject, BehaviorSubject} from "rxjs";

@Injectable()
export class TokenService {

  refreshTokenSubject: Subject<string>;

  constructor() {
    this.refreshTokenSubject = new BehaviorSubject<string>(localStorage.getItem("refreshtoken"));
  }


  hasToken() {
    if(localStorage.getItem("refreshtoken")) {
      if(Number(localStorage.getItem("tokenexpiry")) > new Date().getTime()) {
        console.log("Token expired");
      }
    }
  }
}
