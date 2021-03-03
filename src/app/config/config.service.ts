import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
}

)
export class ConfigService {
configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse, value) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

getConfig(): Observable<object>{
return this.http.get('https://admin.myjolieplanet.com/api/collections/get/categorie?token=8239152105c18d3d8e2282f747d183');
}
getConfig1(): Observable<object>{
  return this.http.get('https://admin.myjolieplanet.com/api/collections/get/type_de_relation?token=8239152105c18d3d8e2282f747d183');
  }
getConfig2(): Observable<object>{
    return this.http.get('https://admin.myjolieplanet.com/api/collections/get/type_de_ressource?token=8239152105c18d3d8e2282f747d183');
    }
addUser(user): Observable<Object>{
  return this.http.post('https://admin.myjolieplanet.com/api/collections/save/user?token=8239152105c18d3d8e2282f747d183', user)
  .pipe(
    catchError(this.handleError)
  );
}
}