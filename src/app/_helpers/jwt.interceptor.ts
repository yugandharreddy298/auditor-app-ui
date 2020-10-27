import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(){
    }
    currentUser:any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
         this.currentUser = localStorage.getItem('user')
        this.currentUser=JSON.parse(this.currentUser)
        if (this.currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.currentUser.user.role}`
                }

            });
        }

        return next.handle(request);
    }
}
