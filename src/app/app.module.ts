import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Topnavbar} from "./components/topnavbar/topnavbar.component";
import {Navigation} from "./components/navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {AgentComponent} from "./pages/agent/agent.component";
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { DefaultComponent } from './components/default/default.component';
import { PlatformService } from './services/platform.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { GroupService } from './services/group.service';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CloneUserComponent } from './components/clone-user/clone-user.component';
import { CreateCampaingComponent } from './components/create-campaing/create-campaing.component';
import { ShowCampaingComponent } from './components/show-campaing/show-campaing.component';
import { UpdateCampaingComponent } from './components/update-campaing/update-campaing.component';
import { CloneCampaingComponent } from './components/clone-campaing/clone-campaing.component';
import { CampaingService } from './services/campaing.service';
import { UiSwitchModule } from 'ngx-ui-switch';
import { AngularMultiSelectModule } from 'angular4-multiselect-dropdown/angular4-multiselect-dropdown';
import { GroupComponent } from './components/group/group.component';
import { DashboardService } from './services/dashboard.service';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { ServeyComponent } from './components/servey/servey.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { ExportService } from './services/export.service';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { HomeComponent } from './pages/home/home.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { AgentService } from './services/agent.service';
import { LeadsComponent } from './components/leads/leads.component';
import { ShowLeadsComponent } from './components/show-leads/show-leads.component';
import { StatusComponent } from './components/create-status/status.component';
import { BreakTypeComponent } from './components/breaktype/breaktype.component';
import { ShowBreakTyoesComponent } from './components/show-breakTypes/show-breakTypes.component';
 

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    AgentComponent,
    WhatsappComponent,
    LoginComponent,
    ReportingComponent,
    CreateUserComponent,
    ShowUsersComponent,
    DefaultComponent,
    UpdateUserComponent,
    CloneUserComponent,
    CreateCampaingComponent,
    ShowCampaingComponent,
    UpdateCampaingComponent,
    LeadsComponent,
    ShowLeadsComponent,
    StatusComponent,
    CloneCampaingComponent,
    GroupComponent,
    ServeyComponent,
    ShowBreakTyoesComponent,
    BreakTypeComponent,
    UpdateGroupComponent
  ],
  imports: [
    BrowserModule,
    AngularDateTimePickerModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiSwitchModule,
    AngularMultiSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlatformService,ExportService,AuthService,AgentService,UserService,GroupService,CampaingService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
