/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component, Input, ViewContainerRef } from "@angular/core";
import { Login } from "app/models/login";
import { DashboardService } from "app/services/dashboard.service";
import { CampaingService } from "app/services/campaing.service";
import { UserService } from "app/services/user.service";
// import { NotifierService } from "angular-notifier";
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
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
    public modelClass2 = "modal2";
    public usersbycampaing;
    public usersbycampaingempty
    public ActiveLeadsPerUser
    public group;
    public total;
    public online;
    // private readonly notifier: NotifierService;
    public level;
    public totaluser = [];
    public countOfLiveChannels
    public liveChannels;
    public userDetails;
    loginInfo: Login = {
        user_name: null,
    }
    constructor(private userService: UserService, private campaingService: CampaingService, private dashboardService: DashboardService) {
        // this.notifier=notifierService
        //  this.openNewDialog();
        // this.phonenumber=localStorage.getItem("phone_number")

    }

    ngOnInit() {

        this.username = localStorage.getItem("user_name")
        this.group = localStorage.getItem("group")
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
        } else {
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
    // public showNotification( type: string, message: string ): void {
    // 	// this.notifier.notify( 'success', 'Notification successfully opened.' );
    // }
    fetchLiveChannelCount() {
        this.dashboardService.fetchLiveChannelCount().subscribe(resp => {
            this.countOfLiveChannels = resp[0].count
        })
    }
    fetchLiveChannel() {
        this.dashboardService.fetchLiveChannel().subscribe(resp => {
            this.liveChannels = resp
            console.log(this.liveChannels, "#####HAHHAHAH")
        })
    }
    fetchLiveUserFromCampaing(id) {
        this.userService.fetchUserFromCampaing(id).subscribe(
            data => {
                if (data.length == 0) {
                    this.usersbycampaingempty = false
                } else {
                    this.usersbycampaingempty = true
                    this.usersbycampaing = data
                }
                console.log("$$$$", this.totaluser)
            })
    }
    fetchTotalLeads() {
        this.campaingService.fetchActiveLeads().subscribe(response => {
            // this.fetchLeadsCountAssignedToUser()
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
    modelClick(campaingName) {
        console.log("model id is ", campaingName)
        // this.fetchLiveUserFromCampaing(id);
        this.usersbycampaing = this.userDetails[campaingName]
        console.log(this.usersbycampaing, "############@@@@@@@@@@@@############")
        this.usersbycampaingempty = this.usersbycampaing.length > 0 ? true : false

        this.modelClass = "modalDisplay"

    }

    modelClick1() {
        // this.fetchLiveUserFromCampaing(id);
        this.modelClass1 = "modalDisplay1"

    }
    closeModal() {
        this.modelClass = "modal"
    }
    closeModal1() {
        this.modelClass1 = "modal1"
    }

    modelClick2() {
        this.modelClass2 = "modalDisplay2"
    }
    closeModal2() {
        this.modelClass2 = "modal2"
    }

    fetchActiveCampaing() {
        this.campaingService.fetchActiveCampaing().subscribe(
            data => {
                var campaingNames = []
                console.log(data, "############DATA", this.group)
                this.campaings = data
                // if (this.level == 7) {
                this.campaings = this.campaings.filter(item => {
                    console.log(item.name == this.group)
                    if (item.name == this.group) {
                        return item
                    }
                })
                this.campaings = this.campaings.map(item => {
                    if (item.active == "Y") {
                        item.enable = true
                    } else {
                        item.enable = false
                    }
                    campaingNames.push(item.name)
                    return item
                })
                //       }else{
                //     this.campaings = this.campaings.map(item => {
                //         if (item.active == "Y") {
                //             item.enable = true
                //         } else {
                //             item.enable = false
                //         }
                //         campaingNames.push(item.name)
                //         return item
                //     })
                // }  

                this.campaingService.fetchActiveUserByCampaingName(campaingNames).subscribe(
                    respp => {
                        console.log(respp, "######RERSRRS")
                        this.userDetails = respp

                        this.campaings = this.campaings.map(item => {
                            var onlineuser = 0;
                            var key = item.name

                            var usersByCampaing = this.userDetails[key]
                            console.log(usersByCampaing, "#usersByCampaing")
                            usersByCampaing.forEach(element => {
                                if (element != null) {
                                    onlineuser = onlineuser + parseInt(element.online, 10)
                                }
                                console.log(onlineuser, "#ONLINE")
                            });
                            item.count = usersByCampaing.length;
                            item.online = onlineuser
                            return item;
                        })
                        // this.userDetails)
                        this.campaingService.fetchActiveLeads().subscribe(response => {

                            this.campaings= this.campaings.map(element => {
                                console.log(response[element.name],"#@#@#@#@@elelememen####",element.name)

                                if (response[element.name] != undefined) {
                                    element["totalActiveLeads"] = response[element.name]
                                }
                                console.log(element,"@#$#@$#@")
                                return element;
                            })
                            console.log(response,"#@#@#@#@@PPEAVEENNBN####",this.campaings)
                        })
                        this.campaingService.fetchTotalLeads().subscribe(response => {

                            this.campaings= this.campaings.map(element => {
                                console.log(response[element.name],"#@#@#@#@@elelememen####",element.name)

                                if (response[element.name] != undefined) {
                                    element["totalLeads"] = response[element.name]
                                }
                                console.log(element,"@#$#@$#@")
                                return element;
                            })
                            console.log(response,"#@#@#@#@@PPEAVEENNBN####",this.campaings)
                        })
                    })

            })
    }
    fetchActiveleadsPerUser(campaingName){
        console.log("##CALALAHAH")
        this.campaingService.fetchLeadsCountAssignedToUser(campaingName).subscribe(response => {
        console.log("CALLALLWLLED",response)
        this.ActiveLeadsPerUser=response
        this.modelClick2();
        })
    }
    logout(username) {
        this.dashboardService.logoutUser(username).subscribe(
            data => {
                console.log("Successfully LoggedOut")
                this.usersbycampaing = this.usersbycampaing.filter(item => {
                    return item.username != username
                })
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