import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()

export class CustomHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Http interceptor', req);
        const newReq = req.clone({url: "https://jsonplaceholder.typicode.com/" + req.url,
                                  headers: req.headers.set('authorization', 'testdata')});
        console.log("newReq", newReq);
        return next.handle(newReq).pipe(
            tap(
                event => {
                    console.log('Success', event)
                },
                error => {
                    console.log('error', error)
                }
            )
        )
    }

}