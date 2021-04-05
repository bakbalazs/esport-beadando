import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (environment.apiKey) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + environment.apiKey),
      });
      return next.handle(authReq);
    }

    req.headers.set('Content-Type', 'application/json');

    return next.handle(req);
  }
}
