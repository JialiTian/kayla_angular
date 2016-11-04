import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/index';
import { AuthenticationService, AuthenticationGuard } from './services/authentication/index';
import { HttpClientService } from './services/http-client/index';
import { CookieService } from 'angular2-cookie/core';
import { DashboardComponent } from './dashboard/index';
import { PlannerComponent } from './planner/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PlannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, AuthenticationGuard, HttpClientService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
