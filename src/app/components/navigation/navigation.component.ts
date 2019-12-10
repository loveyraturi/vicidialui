/**
 * Created by andrew.yang on 2/6/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Login} from "../../models/login";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})
export class Navigation implements OnInit {
    @Input() loginInfo:Login;
    public username;
    constructor( private router: Router) { }

    ngOnInit() { 
        this.username=this.loginInfo.user_name;
      //  console.log(this.loginInfo)
    }
    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }
}