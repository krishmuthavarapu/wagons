import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { Details } from './result';
import { OrderPipe } from 'ngx-order-pipe';
import { Users } from '../users';
import { first } from 'rxjs/operators';
// import * as drop from '/Users/LAPTOP3/Desktop/wagons in angular/wagons/src/assets/js/drop';
declare var drop: any; //adding external js file
// declare var main:any;
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  currentUser: Users;
  users: Users[] = [];
  order: string = 'detail.name';
  reverse: boolean = false;
  sortedCollection: any[];


      public details=[];
      total:number;
      status:string='';
    
  constructor(private _userService:UsersService,private orderPipe: OrderPipe) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    this.sortedCollection = orderPipe.transform(this.details, 'detail.name');
    console.log(this.sortedCollection);
    // to sort using orderpipe 
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  ngOnInit() {
  drop();
  // main();
    this._userService.getResult()
    .subscribe((data:any[])=>{this.details=data;if(this.details.length){
      for(let detail of this.details){
        let sum = 0;
        for(let i in detail.marks){
          sum += Number(detail.marks[i]);
          if(!detail.status){
            if(detail.marks[i]<20)
            detail.status='fail'
            else if(detail.marks[i]>=50)
            detail.status='topper';
          }
        }
        detail.total=sum;
        detail.status=(!detail.status)?'pass':(detail.status);
      }
    }});
    this.loadAllUsers();

      }
      deleteUser(id: number) {
        this._userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }
      private loadAllUsers() {
        this._userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
  

}
