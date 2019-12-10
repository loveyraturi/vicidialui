/**
 * Created by andrew.yang on 5/18/2017.
 */
import {OnInit, Component} from "@angular/core";
import { Login } from "app/models/login";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    loginInfo:Login = {
        first_name:'Andrew',
        last_name:'Yang',
        avatar:'ay.jpeg',
        title:'Senior Developer'
    };
    constructor() { }

    ngOnInit() {
    }
}