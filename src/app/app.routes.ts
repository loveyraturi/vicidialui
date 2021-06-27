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
import { BreakTypeComponent } from "./components/breaktype/breaktype.component";
import { ShowBreakTyoesComponent } from "./components/show-breakTypes/show-breakTypes.component";
import { RecordingComponent } from "./components/recording/recording.component";
import { AttendanceComponent } from "./components/attendance/attendance.component";
import { ShowRecordingComponent } from "./components/show-recording/show-recording.component";
import { EditBreakTypeComponent } from "./components/edit_breaktype/edit_breaktype.component";
import { CloneBreakTypeComponent } from "./components/clone_breaktype/clone_breaktype.component";
import { RechargeComponent } from "./components/recharge/recharge.component";
import { RechargingComponent } from "./components/recharging/recharging.component";
import { SetPricingComponent } from "./components/setPricing/setPricing.component";
import { ScheduleEmailComponent } from "./components/scheduleEmail/scheduleEmail.component";
import { EmailMessageComponent } from "./components/emailMessage/emailMessage.component";
import { DndFilterComponent } from "./components/dnd_filter/dnd_filter.component";
import { EmailUploadComponent } from "./components/email_upload/email_upload.component";
import { ShowEmailComponent } from "./components/show-email/show-email.component";
import { ShowEmailDataComponent } from "./components/show_email_data/show_email_data.component";
import { DNDUploadComponent } from "./components/dnd_upload/dnd_upload.component";

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
        path: 'dnd',
        component: DndFilterComponent
    },
    {
        path: 'dndUpload',
        component: DNDUploadComponent
    },
    {
        path: 'show_emails',
        component: ShowEmailComponent
    },
    {
        path: 'emailUpload',
        component: EmailUploadComponent
    },
    {
        path: 'agent',
        component: AgentComponent
    },
    {
        path: 'emailMessage',
        component: EmailMessageComponent
    },
    {
        path: 'schedule',
        component: ScheduleEmailComponent
    },
    {
        path: 'recharging',
        component: RechargingComponent
    },
    {
        path: 'setPricing',
        component: SetPricingComponent
    },
    {
        path: 'whatsapp',
        component: WhatsappComponent
    },
    {
        path: 'recharge',
        component: RechargeComponent
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
        path: 'recording',
        component: RecordingComponent
    },
    {
        path: 'attendance',
        component: AttendanceComponent
    },
        {
        path: 'showRecordings',
        component: ShowRecordingComponent
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
        path: 'breaktype',
        component:  BreakTypeComponent
    },
    {
        path: 'editbreaktype',
        component:  EditBreakTypeComponent
    },
    {
        path: 'showEmailData',
        component:  ShowEmailDataComponent
    },
    {
        path: 'clonebreaktype',
        component:  CloneBreakTypeComponent
    },
    {
        path: 'showBreaktype',
        component:  ShowBreakTyoesComponent
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