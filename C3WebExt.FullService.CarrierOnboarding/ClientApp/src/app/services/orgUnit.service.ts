import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OrgUnitService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {}

  private readonly endpoint = this.baseUrl + '/api/orgUnits';

  handleError(error): Observable<never> {
    return throwError(error);
  }

  getAll() {
    return this.http.get(this.endpoint).pipe(
      retry(1),
      map((dat: any) => {
        if (dat.hasOwnProperty('Data')) {
          return dat.Data;
        }
        return dat.OrgUnits;
      }),
      catchError(this.handleError));
  }
}
