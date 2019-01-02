import { Injectable } from '@angular/core';
import {User} from './user';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Details} from './results/result';
import {Citi} from './citi';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    private _url:string="/assets/data/user.json"
    private _url2:string="/assets/data/kiddos.json"
    private _url3:string="https://api.github.com/users/hadley/orgs"
  constructor(private http:HttpClient) { }
  getUser():Observable<User[]>{
    return this.http.get<User[]>(this._url)
    .pipe(catchError(this.errorHandler))

  }
    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "server Error")
    }
    getResult():Observable<Details[]>{
      return this.http.get<Details[]>(this._url2)
      .pipe(catchError(this.errorHandler))
    }
    getBike():Observable<Citi[]>{
      return this.http.get<Citi[]>(this._url3)
      .pipe(catchError(this.errorHandler))
    }
    
}
