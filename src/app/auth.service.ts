import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false

  constructor(private http:HttpClient) { }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }
  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username,password){
    //post these details to Api/Http server return user if correct
    return this.http.post<myData>('http://localhost:1234/auth.php',{
      username,
      password
    })
  }
}
