import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../login/login.component';
import { all } from '../services/all.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private service: all) { }
  value ='Login'
  ngOnInit(): void {
    let val = JSON.parse(this.service.getUser()||'{}')
    console.log(val)
    if(val[1]){
      this.value = "Signout";
    }
    else{
      this.value = 'Login'
    }
  }

  link() {
    sessionStorage.clear();
  }

  openNav() {
    (<HTMLInputElement>document.getElementById("mySidebar")).style.width = "250px";
    (<HTMLInputElement>document.getElementById("main")).style.marginLeft = "250px";
    (<HTMLInputElement>document.getElementById("openbtn")).style.display = "none";
    (<HTMLInputElement>document.getElementById("logo")).style.display = "none";

  }
  
  closeNav() {
    (<HTMLInputElement>document.getElementById("mySidebar")).style.width = "0";
    (<HTMLInputElement>document.getElementById("main")).style.marginLeft= "0";
    (<HTMLInputElement>document.getElementById("openbtn")).style.display = "block";
    (<HTMLInputElement>document.getElementById("logo")).style.display = "block";
  }


}
