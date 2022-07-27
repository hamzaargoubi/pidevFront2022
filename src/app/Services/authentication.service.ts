import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Token } from '../Model/Token';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { addUser, User } from '../Model/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginUrl="http://localhost:8081/login"
  refreshUrl = ""
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  public loggedUser;


  constructor(private http: HttpClient,private userservice: UserService) {}

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  login(user:User): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, user,{
      headers: new HttpHeaders()
        .set('Content-Type', 'x-www-form-urlencoded')
    })
      .pipe(
        tap(tokens => this.doLoginUser( tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    this.doLogoutUser();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(this.refreshUrl, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Token) => {
      this.storeJwtToken(tokens.token);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(tokens: Token) {
    console.log(tokens);
    //use JWT() for decode. Not jwt-decode() !!
          let t: any;
          localStorage.setItem('currentUser', JSON.stringify(t.user));
    this.storeTokens(tokens);
  }

  private doLogoutUser() {

    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Token) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
    console.log(localStorage.getItem(this.JWT_TOKEN));
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }


}
