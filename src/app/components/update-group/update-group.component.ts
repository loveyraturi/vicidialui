import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'app/services/group.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent implements OnInit {

  constructor( private router: Router, private groupService: GroupService,private formBuilder: FormBuilder) {
    this.fetchgroupById(localStorage.getItem("update_group_id"));

   }
  public registerform: any = FormGroup;

public id;
public groupResult;
public name;
public groupName;
public allowedCampaign;
  ngOnInit() {
    this.updategroupForm();
  }
  fetchgroupById(id) {
    this.id=id;
    this.groupService.fetchGroupsByUser(id).subscribe(
      data => {
          this.groupResult=data[0]
          console.log(this.groupResult,"####################33")
          this.name = this.groupResult.user_group,
          this.groupName = this.groupResult.group_name,
          this.allowedCampaign = this.groupResult.allowed_campaigns
         
  
      })
  }


  private updategroupForm(): void {
    this.registerform = this.formBuilder.group({
    
      name: new FormControl('', [Validators.required]),
      groupName: new FormControl('', Validators.required),
      allowedCampaign: new FormControl('', Validators.required),

    });
  }

  submit({ value }: any): void {
    this.update(value);
    
  }
  update(value: any) {
    console.log(value,"#$@$@#$#$")
    // this.groupService.updateGroup(value).subscribe(
    //   data => {
    //     console.log(data)
    //     if(data.status){
    //     this.router.navigateByUrl("/showUser")
    //     }
      

    //   })
  }
}
