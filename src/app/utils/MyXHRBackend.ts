import { Http, XHRBackend, Request, XHRConnection, Response, BrowserXhr, ResponseOptions, XSRFStrategy, RequestOptions, ConnectionBackend, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import {Injectable} from '@angular/core';

/**
 * @author srini
 */

@Injectable()
export class MyXHRBackend extends Http {


  constructor(backend: XHRBackend, defaultOptions: RequestOptions,  private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch((error: Response) => {
        
            this.processResponse(error);
            return Observable.throw(error);
        });
  }    

  /*constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: MyXHRBackend) {
    return (res: Response) => {
      this.processResponse(res)
      return Observable.throw(res);
    };
  }*/


    processResponse(response) {
        switch (response.status) {
            case 401:
                this.router.navigate(['hello']);
                // You could redirect to login page here
                return Observable.throw('your custom error here');
            case 403:
                this.router.navigate(['hello']);
                // You could redirect to forbidden page here
                return Observable.throw('your custom error here');
            case 404:
                this.router.navigate(['hello']);
                // You could redirect to 404 page here
                return Observable.throw('your custom error here');
            default:
                return Observable.throw(response);
        }
    }
}
