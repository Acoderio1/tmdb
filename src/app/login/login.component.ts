import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  constructor(private router: Router) { }

  userEmail="alendennis77@gmail.com"
  userPassword="Alendennis1@"
  isUserLoggedIn: boolean = false;

  userForm = new FormGroup({
    emailId: new FormControl('',[Validators.required, Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required, Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
  })

  loginUser(){
    let uEmail = this.userForm.value.emailId || ''
    console.log(uEmail);
    let upass = this.userForm.value.password
    console.log(upass)
    let x = localStorage.getItem(uEmail)
    console.log(x);
    if(uEmail in localStorage && upass == localStorage.getItem(uEmail)){
      this.isUserLoggedIn = true;
      let data = [uEmail,'true']
      sessionStorage.setItem("userdata",JSON.stringify(data));
      console.log("userlogged in")
      this.router.navigate(['/homepage']);
    }
    else{
      alert("invalid User details")
      this.userForm.reset();
    }
  }

  get emailId(){
    return this.userForm.get('emailId')
  }

  get password(){
    return this.userForm.get('password')
  }
  setValue() {
    console.log(this.userForm.value); // input value retrieved
  }

}
