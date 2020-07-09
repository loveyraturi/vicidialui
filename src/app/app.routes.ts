import {AgentComponent} from "./pages/agent/agent.component";
import { LoginComponent } from "./components/login/login.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { ShowUsersComponent } from "./components/show-users/show-users.component";
import { UpdateUserComponent } from "./components/update-user/update-user.component";
import { CloneUserComponent } from "./components/clone-user/clone-user.component";
import { ShowCampaingComponent } from "./components/show-campaing/show-campaing.component";
import { CreateCampaingComponent } from "./components/create-campaing/create-campaing.component";
import { CloneCampaingComponent } from "./components/clone-campaing/clone-campaing.component";
import { UpdateCampaingComponent } from "./components/update-campaing/update-campaing.component";
import { GroupComponent } from "./components/group/group.component";
import { UpdateGroupComponent } from "./components/update-group/update-group.component";
import { ServeyComponent } from "./components/servey/servey.component";
import { ReportingComponent } from "./components/reporting/reporting.component";
import { HomeComponent } from "./pages/home/home.component";
import { WhatsappComponent } from "./pages/whatsapp/whatsapp.component";
import { LeadsComponent } from "./components/leads/leads.component";
import { ShowLeadsComponent } from "./components/show-leads/show-leads.component";
import { StatusComponent } from "./components/create-status/status.component";
import { FormComponent } from "./components/form/form.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'agent',
        component: AgentComponent
    },
    {
        path: 'whatsapp',
        component: WhatsappComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'createUser',
        component: CreateUserComponent
    },
    {
        path: 'createStatus',
        component: StatusComponent
    },
    {
        path: 'leads',
        component: LeadsComponent
    },
    {
        path: 'showleads',
        component: ShowLeadsComponent
    },
    {
        path: 'cloneUser',
        component: CloneUserComponent
    },
    {
        path: 'form',
        component:  FormComponent
    },
    {
        path: 'updateUser',
        component: UpdateUserComponent
    },
    {
        path: 'showUser',
        component: ShowUsersComponent
    },
    {
        path: 'misReport',
        component: ReportingComponent
    },
    {
        path: 'createCampaing',
        component: CreateCampaingComponent
    },
    {
        path: 'surveyCampaing',
        component: ServeyComponent
    },
    {
        path: 'showCampaing',
        component: ShowCampaingComponent
    },
    {
        path: 'showGroups',
        component: GroupComponent
    },
    {
        path: 'cloneCampaing',
        component: CloneCampaingComponent
    },
    {
        path: 'updateCampaing',
        component: UpdateCampaingComponent
    },
    {
        path: 'updateGroup',
        component: UpdateGroupComponent
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
  
];