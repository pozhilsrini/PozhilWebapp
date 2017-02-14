import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http,HttpModule, BrowserXhr, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routes';
import { ng2parallax } from './directive/parallax.directive';

// interceptor
import { MyXHRBackend } from './utils/MyXHRBackend';
import { CORSExtBrowserXhr } from './utils/CORSExtBrowserXhr';
import { LoginService } from 'app/service/LoginService'


/**
 * @author srini
 */

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ng2parallax
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [{provide: BrowserXhr, useClass : CORSExtBrowserXhr},
              {provide: Http, useClass : MyXHRBackend},
              LoginService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
