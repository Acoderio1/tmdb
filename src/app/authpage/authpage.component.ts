import { Component} from'@angular/core';  
import {FormGroup, Validators, FormControl} from'@angular/forms';  
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent{
  constructor(private router: Router){}
  userData = []

  userEmail=""
  userPassword=""
  userForm = new FormGroup({
    emailId: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
  })

  signupUser(data: any){
    localStorage.setItem(data.emailId,data.password);
    alert("You have successfully Signed UP, Please Login")
    this.router.navigate(['/homepage',this.emailId]);
    console.log("data set")
    this.userForm.reset()
  }

  get emailId(){
    return this.userForm.get('emailId')
  }

  get password(){
    return this.userForm.get('password')
  }
  

}
