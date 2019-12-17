/**
 * Created by andrew.yang on 5/18/2017.
 */
import {OnInit, Component, Input} from "@angular/core";
import { Login } from "app/models/login";
import { DashboardService } from "app/services/dashboard.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public username;
    public agentscount;
    public liveagents;
    public pausedagents;
    public holdagents;
    public activeusers;
    public activecampaigns;
    public alluserscounts;
    public allcampaignscounts;

    loginInfo:Login={user_name:null,
  }
    constructor(private dashboardService: DashboardService) { 
      
     
     // this.phonenumber=localStorage.getItem("phone_number")
      
    }
    ngOnInit() {
       
        this.username= localStorage.getItem("user_name")
        this.loginInfo.user_name=this.username;
        console.log(this.username)
       // this.fetchAgentsCounts();
    }

    fetchAgentsCounts() {
        this.dashboardService.fetchAgentsCounts().subscribe(
          data => {
              console.log("hello")
            this.agentscount = data
    console.log("agents areeeeee", this.agentscount)
          })
      }

      liveAgentsCounts() {
          this.dashboardService.liveAgentsCounts().subscribe(data=>{
              this.liveagents= data
          })
      }
      usedAgentsCounts() {
        this.dashboardService.pausedAgentsCounts().subscribe(data=>{
            this.pausedagents= data
        })
    }
    oldAgentsCounts() {
        this.dashboardService.holdAgentsCounts().subscribe(data=>{
            this.holdagents= data
        })
    }
    activeUsersCounts() {
        this.dashboardService.activeUsersCounts().subscribe(data=>{
            this.activeusers= data
        })
    }
    activeCampaignsCounts() {
        this.dashboardService.activeCampaignCounts().subscribe(data=>{
            this.activecampaigns= data
        })
    }

    allUsersCounts() {
        this.dashboardService.allUsersCounts().subscribe(data=>{
            this.allUsersCounts= data
        })
    }

    allCampaignCounts() {
        this.dashboardService.allCampaignCounts().subscribe(data=>{
            this.allCampaignCounts= data
        })
    }
}