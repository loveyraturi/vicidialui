/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component, Input, ViewContainerRef } from "@angular/core";
import { Login } from "app/models/login";
import { DashboardService } from "app/services/dashboard.service";
import { CampaingService } from "app/services/campaing.service";
import { UserService } from "app/services/user.service";

@Component({
    selector: 'agent',
    templateUrl: './agent.component.html'
})
export class AgentComponent implements OnInit {
    public username;
    public group;
    public level;
    
    constructor(private userService: UserService, private campaingService: CampaingService, private dashboardService: DashboardService) {
    }

    ngOnInit() {

        this.username = localStorage.getItem("user_name")
        this.group=localStorage.getItem("group")
        this.level = localStorage.getItem("level")
        console.log(this.username)
       
    }
}