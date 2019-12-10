import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Topnavbar} from "./components/topnavbar/topnavbar.component";
import {Navigation} from "./components/navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {HomeComponent} from "./pages/home/home.component";
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { DefaultComponent } from './components/default/default.component';
import { PlatformService } from './services/platform.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
    ShowUsersComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlatformService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
