import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, timeout, catchError } from 'rxjs/operators'

const NHL_BASE_URL = "https://statsapi.web.nhl.com/api/v1/";

@Injectable({
  providedIn: 'root'
})
export class NhlApiService {

	constructor(private http: HttpClient) { }
	
	public getNhlSchedule = (): Observable<any> => {
		return this.http.get(NHL_BASE_URL + "schedule").pipe(
			timeout(10000),
			retry(3),
			catchError((error) => {
				return throwError(error);
			})
		);
	}

	public getNhlTeams = (): Observable<any> => {
		return this.http.get(NHL_BASE_URL + "teams").pipe(
			timeout(10000),
			retry(3),
			catchError((error) => {
				return throwError(error);
			})
		);
	}
}
