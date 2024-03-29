import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username:String,password:String): Observable<any> {
    // Make an HTTP POST request to your backend API for login validation
    return this.http.get(baseUrl+"/login/"+username+"/"+password);
  }
}
