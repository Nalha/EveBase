import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {Ng2BootstrapModule} from "ng2-bootstrap";
import { NavbarComponent } from './components/navbar/navbar.component';
import {TokenComponent} from "./components/token/token.component";
import {TokenService} from "./services/token.service";
import {CrestService} from "./services/crest.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "token",
    component: TokenComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TokenComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: [
    TokenService,
    CrestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
