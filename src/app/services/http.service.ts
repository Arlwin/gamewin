import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  headers = new HttpHeaders({
    'Content-Type': 'text/plain',
    'x-api-key': environment.apiKey,
  });

  constructor(private http: HttpClient) {}

  post<T>(endpoint: string, body: string): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}/${endpoint}`, body, {
      headers: this.headers,
    });
    // .pipe(tap((result) => console.log(result)));
  }
}
