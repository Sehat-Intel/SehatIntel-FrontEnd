import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserData } from '../data/users';


@Injectable()
export class UserDataService {
  url = environment.api_url;

  constructor(private http: HttpClient) { }

  sendUserData(data: UserData){
    return this.http.post(this.url + '/data', data);
  }
}
