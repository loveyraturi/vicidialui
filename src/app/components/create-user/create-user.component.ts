import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
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
