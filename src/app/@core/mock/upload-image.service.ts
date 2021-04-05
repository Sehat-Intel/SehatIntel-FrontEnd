import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable()
export class UploadImageService {
  url = environment.api_url;

  constructor(private http: HttpClient) { }

  uploadImage(vals): Observable<any> {
    let data = vals;

    return this.http.post(
      'https://api.cloudinary.com/v1_1/imagecdntuminzee/image/upload',
      data
    );
  }
}
