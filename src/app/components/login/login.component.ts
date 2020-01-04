import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { PlatformService } from 'app/services/platform.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registerform: any = FormGroup;
  public errorMsg: string = ''
  constructor(private _router: Router, private platformService: PlatformService, private formBuilder: FormBuilder, private auth: AuthService) { }
  public formValues: any;
  ngOnInit() {
    this.createForm()
  }

  submit({ value }: any): void {
    if (this.platformService.isBrowser()) {
      localStorage.setItem('isLogin', 'true');
    }
    this.login(value);

  }
  login(value: any) {
    this.auth.validateLogin(value).subscribe(
      data => {
        console.log(data,"#############")
        localStorage.setItem("user_name",data.name);
        localStorage.setItem("phone_number",data.phoneNumber);
        localStorage.setItem("level",data.level);
        if (data.status ) {
          if(data.level > 6){
            this._router.navigateByUrl('home');
          }else{
            this.errorMsg = "Invalid level"

          }

        } else {
          this.errorMsg = "Invalid Login"
        }

      })
  }
  private createForm(): void {

    this.registerform = this.formBuilder.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });

  }

}
