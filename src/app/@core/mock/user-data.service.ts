import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserData } from '../data/user-data';



@Injectable({
  providedIn: 'any',
})

export class UserDataService {
  url = environment.api_url;
  flask_url = environment.flask_url;

  constructor(private http: HttpClient) { }

  sendUserData(data: UserData){
    return this.http.post(this.url + '/data', data);
  }

  getAllUserData(){
    return this.http.get(this.url + '/data');
  }

  generateReportRequestToFlask(id){
    return this.http.post(this.flask_url + '/image', id);
  }

}
