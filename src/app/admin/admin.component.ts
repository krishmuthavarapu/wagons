import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {customers} from './customers';
import {OrderPipe} from 'ngx-order-pipe';
import { RowClassArgs } from '@progress/kendo-angular-grid';
import { Citi } from '../citi';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  order: string = 'user.name';
  reverse: boolean = false;
  sortedCollection:any[];
  public users=[];
  public bike=[];
  // kendo grid

  public gridData: any[] = customers;


  constructor(private _userService:UsersService, private orderPipe:OrderPipe) {
    this.sortedCollection=orderPipe.transform(this.users,'user.name')
   }
   setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {
    this._userService.getUser()
    .subscribe(data =>this.users=data);

    this._userService.getBike()
    .subscribe(data =>this.bike=data)
  }

}
