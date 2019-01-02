import { Component, OnInit } from '@angular/core';
import { Register } from './formModel';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  userModel = new Register('', '', '', '', '', "+91", false);
  constructor(private Auth: AuthService,
    private router: Router) { }
    options = 'one two three'.split(' ');
    optionSelected: any;
    
  ngOnInit() {
    
  //   if (this.Auth.isLoggedIn) {
  //     this.router.navigate(['/result']);
  //  }else{
  //    return false;
  //  }

  }
  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    // this.Auth.getUserDetails(username, password)
    // console.log(username, password);
    this.Auth.getUserDetails(username, password)
      .subscribe(data => {
        if (data.success) {
          this.router.navigate(['result'])
          this.Auth.setLoggedIn(true)
        } else {
          window.alert(data.message)
        }
      })
  }
  onOption(event){
    console.log(event); //option value will be sent as event
   }
}
