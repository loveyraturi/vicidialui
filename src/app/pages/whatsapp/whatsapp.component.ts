/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component, Input, ViewContainerRef } from "@angular/core";
import { Login } from "app/models/login";
import { DashboardService } from "app/services/dashboard.service";
import { CampaingService } from "app/services/campaing.service";
import { UserService } from "app/services/user.service";
// import { Builder, By, Key, webdriver, until } from ('selenium-webdriver');

@Component({
    selector: 'whatsapp',
    templateUrl: './whatsapp.component.html'
})
export class WhatsappComponent implements OnInit {
    public username;
    public group;
    public level;
    public numbers;
    public message;
    public driver;
    public flag = false;

    constructor(private userService: UserService, private campaingService: CampaingService, private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.userService.openBrowser().subscribe(
            data => {
            })
    }

    sendMessage() {

        var arrayOfLines = this.numbers.split('\n');
        arrayOfLines.forEach(element => {
            this.userService.initWhatsapp(element, this.message).subscribe(
                data => {
                    console.log(data)
                })
            this.userService.initWhatsapp(element, this.message).subscribe(
                data => {
                    console.log(data)
                })
        });
        console.log(arrayOfLines)
        console.log(this.message)

    }
}

