import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
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
