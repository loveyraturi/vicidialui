import { Component } from '@angular/core';
import {smoothlyMenu} from "../../app.helpers";
import { Router } from '@angular/router';
import { GroupService } from 'app/services/group.service';

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.component.html'
})
export class Topnavbar {
    private amount;
    constructor(private _router: Router,private groupService:GroupService){
        this.fetchBalance()
    }
    ngOnInit() {

    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    fetchBalance(){
        this.groupService.fetchBalance(localStorage.getItem("group")).subscribe(
         response=>{
             console.log(response.amount,"#############MOEMMENEY########")
         this.amount=response.amount;
            }   
        )
    }
    amountEvent() { 
        this._router.navigateByUrl("recharge");
    }
    logout() {
        localStorage.clear();
        this._router.navigateByUrl("/");
        // location.href='http://to_login_page';
    }
}