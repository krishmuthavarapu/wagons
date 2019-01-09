import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'

import {Log} from './logphp';

@Injectable({
  providedIn: 'root'
})
export class LogphpService {
logs: Log[];
  private baseUrl2: string = "http://localhost/logs/api/"
  constructor(private http: HttpClient) { }
}
