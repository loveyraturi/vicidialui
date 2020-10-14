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
    public level;
    public showGroup=true;
    constructor( private router: Router) { }

    ngOnInit() { 
        this.level = localStorage.getItem("level")
        this.username=this.loginInfo.user_name;

        if(this.level==7){
            this.showGroup=false
        }
      //  console.log(this.loginInfo)
    }
    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }
}