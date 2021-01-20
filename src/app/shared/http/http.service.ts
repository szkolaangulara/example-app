import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {RequestConfig} from '../request.config';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private httpClient: HttpClient) {
    }

    public request<T>(requestConfig: RequestConfig): Observable<T> {
        return this.httpClient.request<T>(requestConfig.httpMethod, `${environment.baseUrl}${requestConfig.url}`)
            .pipe(
                catchError((errorResponse: HttpErrorResponse) => throwError(errorResponse))
            );
    }
}
