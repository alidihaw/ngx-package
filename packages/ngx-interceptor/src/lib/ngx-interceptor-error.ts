import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable()
export class NgxHttpErrorInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log("Passed through the interceptor in request");

        return next.handle(request)
            .pipe(
                map(res => {
                    console.log("Passed through the interceptor in response");
                    return res
                }),
                catchError((error: HttpErrorResponse) => {
                    let errorMsg = '';
                    if (error.error instanceof ErrorEvent) {
                        console.log('This is client side error');
                        errorMsg = `Error: ${error.error.message}`;
                    } else {
                        console.log('This is server side error');
                        this.handleServerSideError(error);
                    }
                    console.log(errorMsg);
                    return throwError(errorMsg);
                }),
            )
    }

    private handleServerSideError(error: HttpErrorResponse) {
        switch (error.status) {
            case 400: // means the request could not be understood by the server.
                console.log('Bad Request, please try again later.');
                console.log(`Error Code: ${error.status},  Message: ${error.message}`);
                break;
            case 401: // means lacks valid authentication credentials for the target resource. 
                console.log('Unauthorized, please try again later.');
                console.log(`Error Code: ${error.status},  Message: ${error.message}`);
                break;
            case 403: // means you are not allowed access to the target resource.
                console.log('Forbidden access is denied');
                console.log(`Error Code: ${error.status},  Message: ${error.message}`);
                break;
            case 500: // means there's an issue or temporary glitch with the application's programming
                console.log('Internal server error, please try again later."');
                console.log(`Error Code: ${error.status},  Message: ${error.message}`);
                break;
            default:
                console.log(`Error Code: ${error.status},  Message: ${error.message}`);
                break;
        }
    }
}