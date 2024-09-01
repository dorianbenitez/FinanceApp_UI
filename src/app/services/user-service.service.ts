import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { UploadUser } from '../model/uploadUser';
import { UserLogin } from '../model/userLogin';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;
  private addUsersUrl: string;
  private userLoginUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/getUsers';
    this.addUsersUrl = 'http://localhost:8080/addUser';
    this.userLoginUrl = 'http://localhost:8080/userLogin';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: UploadUser): Observable<UploadUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<UploadUser>(this.addUsersUrl, user, { headers });
  }

  public login(user: UserLogin): Observable<UserLogin> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<UserLogin>(this.userLoginUrl, user, { headers });
  }
}