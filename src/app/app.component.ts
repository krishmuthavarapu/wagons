import { Component } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner'; 
import { HttpClientModule } from '@angular/common/http'; 
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  title = 'wagons';
  public now: Date = new Date();
  constructor( private spinner:NgxSpinnerService) {

    setInterval(() => {
      this.now = new Date();
    }, 1);
}
ngOnInit(){
  
 
  this.spinner.show();
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
}, 1000);

}

}