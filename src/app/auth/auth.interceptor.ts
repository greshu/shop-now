import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

export class AuthInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('Intercpted!!', request)
        //Actual request cannot be edited as they are immutable
        
        // var coppiedReq = request.clone({headers: request.headers.append/set})
        var coppiedReq = request.clone({params: request.params.set('auth', 'token')})
        return next.handle(coppiedReq)
    }

}