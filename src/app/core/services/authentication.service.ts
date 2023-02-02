// Angular.
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RXJS.
import { Observable } from 'rxjs/Rx';

// Utils.
import { decodeToken } from './../../components/shared/utils/decode-token';

// Variables de entorno.
import { environment } from './../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  tokenKey: string  = 'key';
  urlURBE: string   = environment.apiLogin;
  
  
  constructor( private http: HttpClient ) { }

  login(body: any): Observable<HttpResponse<Object>> {
    return this.http.post(this.urlURBE, body, { observe: 'response' });
  };

  singOut(): void {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.clear();
  };

  existToken(): boolean {
    let hasToken = false;

    if (sessionStorage.getItem(this.tokenKey)) {
      hasToken = true;
    } else { 
      hasToken = false; 
    }

    return hasToken;
  };

  saveToken(token: string): void {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.setItem(this.tokenKey, token);
  };

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  };
  
  roleUser(): any {
    if (sessionStorage.getItem(this.tokenKey)) {
      const token = decodeToken(sessionStorage.getItem(this.tokenKey) as string);
      return token;
    } else {
      return undefined;
    }
  };
}
