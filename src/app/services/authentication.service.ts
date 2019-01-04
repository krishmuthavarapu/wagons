import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string){
    return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
    .pipe(map(user =>{
      //login if there is jwt tokin here
      if(user && user.token){
        //to store jwt tokin in ocal storage 
        localStorage.setItem('currentUser',JSON.stringify(user));
      }
      return user;
    }));
  }
  logout(){
    //to remove user from storage
    localStorage.removeItem('currentUser');
  }
}
