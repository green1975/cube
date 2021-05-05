import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule }from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Access-Control-Allow-Origin':'*',
    }
  )
};

@Injectable({
  providedIn: 'root'
}

)
export class ConfigService {
status:boolean;
configUrl = 'assets/config.json';
serverUrl: string = "https://admin.myjolieplanet.com/upload.php";
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
addUser(data): Observable<Object>{
  return this.http.post('https://admin.myjolieplanet.com/api/collections/save/user?token=8239152105c18d3d8e2282f747d183', data)
  .pipe(
    catchError(this.handleError)
  );
}
login(user): Observable<Object>{
  return this.http.post('https://admin.myjolieplanet.com/api/collections/get/user?token=8239152105c18d3d8e2282f747d183', user)
  .pipe(
    catchError(this.handleError)
  );
}
sendFormData(formData): Observable<Object> {
  return this.http.post<any>(this.serverUrl, formData, httpOptions);
}
postRessource(data): Observable<Object> {
  return this.http.post<any>('https://admin.myjolieplanet.com/api/collections/save/ressource?token=8239152105c18d3d8e2282f747d183', data)
  .pipe(
    catchError(this.handleError)
  );
}
getRessource(data): Observable<Object> {
  return this.http.post('https://admin.myjolieplanet.com/api/collections/get/ressource?token=8239152105c18d3d8e2282f747d183', data);
}
getDetailRessource(id): Observable<Object>{
  return this.http.post('https://admin.myjolieplanet.com/api/collections/get/ressource?token=8239152105c18d3d8e2282f747d183', id);
}
search(param): Observable<Object> {
  return this.http.post('https://admin.myjolieplanet.com/api/collections/get/ressource?token=8239152105c18d3d8e2282f747d183', param);
}
}