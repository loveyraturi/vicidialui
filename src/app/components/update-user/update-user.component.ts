import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  public name;
  public phonenumber;
  public status;
  public password;
  public level;
  public groupId;
  public id;
  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  public groupName;
  public groupsById;
  constructor(private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.fetchGroups()
    this.fetchusersByName(localStorage.getItem("update_name"));
  }
  ngOnInit() {
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.updateForm();
  }
  update(value: any) {
    console.log(value,"#$@$@#$#$")
    this.userService.updateUser(value).subscribe(
      data => {
        console.log(data)
        if(data.status){
        this.router.navigateByUrl("/showUser")
        }
      })
  }

  fetchGroups(){
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups=data
        console.log("groupdata###############3333",data)

      })
  }

  fetchusersByName(name) {
    this.userService.fetchusersByName(name).subscribe(
      data => {
            var user=data[0]
            console.log("DATATTAT####",user)
            // this.groupsById=data[0]
            // console.log(this.groupsById,"####################33")
            this.id=user.id
            this.name = user.username
            // this.phonenumber =this.groupsById.phone_login
            this.status =user.status
            this.level =user.level
            this.groupId=user.usergroup
            // console.log(this.name,this.phonenumber,this.status,this.level,this.groupId)
      })
  }

  private updateForm(): void {
    this.registerform = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      group: new FormControl('', Validators.required),
      // phonenumber: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confpass: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
  }
  submit({ value }: any): void {
    console.log(value)
    var createUser={
      id:value.id,
      fullname: value.name,
      level: value.level,
      password: value.password,
      username: value.name,
      usergroup: value.group,
      status: value.status
    }
    var userGroupMapping={
       groupname: value.group,
       username: value.name
    }
    
    this.userService.updateUser(createUser).subscribe(
      data => {
        if (data.status) {
          this.userService.updateAssignUserToGroup(userGroupMapping).subscribe(
            data => {
              if (data.status) {
                this.router.navigateByUrl('/showUser');
      
              }
      
            })
          this.router.navigateByUrl('/showUser');

        }

      })
    // this.update(value);
    
  }
}
