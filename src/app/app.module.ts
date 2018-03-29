import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';
import {GithubServiceService} from './service/github-service.service';

import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { CharteComponent } from './charte/charte.component';
import { GithubComponent } from './github/github.component';
import { ForgeComponent } from './forge/forge.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RapportComponent } from './rapport/rapport.component';
import { AppRoutingModule } from './/app-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    CharteComponent,
    GithubComponent,
    ForgeComponent,
    HomeComponent,
    LoginComponent,
    RapportComponent,
    SideBarComponent,
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
