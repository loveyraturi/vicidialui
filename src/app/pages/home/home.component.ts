/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component, Input } from "@angular/core";
import { Login } from "app/models/login";
import { DashboardService } from "app/services/dashboard.service";
import { CampaingService } from "app/services/campaing.service";
import { UserService } from "app/services/user.service";

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
    public campaings
    public users;
    loginInfo: Login = {
        user_name: null,
    }
    constructor(private userService: UserService,private campaingService: CampaingService, private dashboardService: DashboardService) {


        // this.phonenumber=localStorage.getItem("phone_number")

    }
    ngOnInit() {

        this.username = localStorage.getItem("user_name")
        this.loginInfo.user_name = this.username;
        console.log(this.username)
        this.fetchAgentsCounts();
        this.liveAgentsCounts();
        this.pausedAgentsCounts();
        this.holdAgentsCounts();
        this.activeUsersCounts();
        this.activeCampaignsCounts();
        this.allUsersCounts();
        this.allCampaignCounts();
        this.fetchCampaing();
        this.fetchUsers();
    }
    fetchUsers() {
        this.userService.fetchUser().subscribe(
          data => {
            this.users = data
            this.users = this.users.map(item => {
              if (item.active == "Y") {
                item.enable = true
              } else {
                item.enable = false
              }
              return item
            })
            console.log(this.users)
    
          })
      }

    fetchCampaing() {
        this.campaingService.fetchCampaing().subscribe(
            data => {
                this.campaings = data
                this.campaings = this.campaings.map(item => {
                    if (item.active == "Y") {
                        item.enable = true
                    } else {
                        item.enable = false
                    }
                    return item
                })
                console.log(this.campaings)

            })
    }

    fetchAgentsCounts() {
        this.dashboardService.fetchAgentsCounts().subscribe(
            data => {
                console.log("hello")
                this.agentscount = data[0].count
                console.log("agents areeeeee", this.agentscount)
            })
    }

    liveAgentsCounts() {
        this.dashboardService.liveAgentsCounts().subscribe(data => {
            this.liveagents = data[0].count
        })
    }
    pausedAgentsCounts() {
        this.dashboardService.pausedAgentsCounts().subscribe(data => {
            this.pausedagents = data[0].count
        })
    }
    holdAgentsCounts() {
        this.dashboardService.holdAgentsCounts().subscribe(data => {
            this.holdagents = data[0].count
        })
    }
    activeUsersCounts() {
        this.dashboardService.activeUsersCounts().subscribe(data => {
            this.activeusers = data[0].count
        })
    }
    activeCampaignsCounts() {
        this.dashboardService.activeCampaignCounts().subscribe(data => {
            this.activecampaigns = data[0].count
        })
    }

    allUsersCounts() {
        this.dashboardService.allUsersCounts().subscribe(data => {
            this.allUsersCounts = data[0].count
        })
    }

    allCampaignCounts() {
        this.dashboardService.allCampaignCounts().subscribe(data => {
            this.allCampaignCounts = data[0].count
        })
    }
}