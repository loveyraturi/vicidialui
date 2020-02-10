/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component, Input, ViewContainerRef } from "@angular/core";
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
    public actionButtons;
    public modelClass = "modal";
    public modelClass1 = "modal1";
    public usersbycampaing;
    public usersbycampaingempty
    public group;
    public level;
    public totaluser=[];
    public countOfLiveChannels
    public liveChannels;
    loginInfo: Login = {
        user_name: null,
    }
    constructor(private userService: UserService, private campaingService: CampaingService, private dashboardService: DashboardService) {

        //  this.openNewDialog();
        // this.phonenumber=localStorage.getItem("phone_number")

    }

    ngOnInit() {

        this.username = localStorage.getItem("user_name")
        this.group=localStorage.getItem("group")
        this.level = localStorage.getItem("level")
        
        this.loginInfo.user_name = this.username;
        console.log(this.username)
        if (this.level == 7) {
        this.fetchAgentsCounts();
        this.liveAgentsCounts();
        this.pausedAgentsCounts();
        this.holdAgentsCounts();
        this.activeUsersCounts();
        this.activeCampaignsCounts();
        this.allUsersCounts();
        this.allCampaignCounts();
        this.fetchActiveCampaing();
        this.fetchUsers();
        this.fetchLiveChannelCount();
        this.fetchLiveChannel();
        }else{
            this.fetchAgentsCounts();
            this.liveAgentsCounts();
            this.pausedAgentsCounts();
            this.holdAgentsCounts();
            this.activeUsersCounts();
            this.activeCampaignsCounts();
            this.allUsersCounts();
            this.allCampaignCounts();
            this.fetchActiveCampaing();
            this.fetchUsers();
            this.fetchLiveChannelCount();
            this.fetchLiveChannel();  
        }
    }
    fetchLiveChannelCount(){
        this.dashboardService.fetchLiveChannelCount().subscribe(resp=>{
            this.countOfLiveChannels=resp[0].count
        })
    }
    fetchLiveChannel(){
        this.dashboardService.fetchLiveChannel().subscribe(resp=>{
            this.liveChannels=resp
            console.log(this.liveChannels,"#####HAHHAHAH")
        })
    }
    fetchLiveUserFromCampaing(id) {
        this.userService.fetchUserFromCampaing(id).subscribe(
            data => {
                if(data.length==0){
                    this.usersbycampaingempty=false
                }else{
                this.usersbycampaingempty=true
                this.usersbycampaing = data               
                }
                console.log("$$$$",this.totaluser)
            })
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
    modelClick(id) {
        console.log("model id is ", id)
        this.fetchLiveUserFromCampaing(id);
        this.modelClass = "modalDisplay"

    }

    modelClick1(id) {
        console.log("model id is ", id)
        // this.fetchLiveUserFromCampaing(id);
        this.modelClass1 = "modalDisplay1"

    }
    closeModal() {
        this.modelClass = "modal"
    }
    closeModal1() {
        this.modelClass1 = "modal1"
    }
    
    fetchActiveCampaing() {
        this.campaingService.fetchActiveCampaing().subscribe(
            data => {
               
                console.log(data,"############DATA",this.group)
                this.campaings = data
                if (this.level == 7) {
                    this.campaings = this.campaings.filter(item => {
                      console.log(item.user_group == this.group)
                      if (item.user_group == this.group) {
                        return item
                      }
                    })
                    this.campaings = this.campaings.map(item => {
                      if (item.active == "Y") {
                        item.enable = true
                      } else {
                        item.enable = false
                      }

                      return item
                    })
                  }else{
                this.campaings = this.campaings.map(item => {
                    if (item.active == "Y") {
                        item.enable = true
                    } else {
                        item.enable = false
                    }
                    return item
                })
                console.log()
            }
            
             
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