import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


export class AuthResponseInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     return next.handle(request).do(
         event=>{
            console.log(event);
            
         }
     )
    }
}