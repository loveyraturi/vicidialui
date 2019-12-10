import { Component } from '@angular/core';
import {smoothlyMenu} from "../../app.helpers";
import { Router } from '@angular/router';

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.component.html'
})
export class Topnavbar {
    constructor(private _router: Router){}
    ngOnInit() {

    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    logout() {
        localStorage.clear();
        this._router.navigateByUrl("/");
        // location.href='http://to_login_page';
    }
}