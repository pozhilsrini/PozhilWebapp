import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 import { AppComponent } from './app.component';
//import { HelloComponent } from './hello/hello.component';
//import { routing } from './app.routes';
import { AppRoutingModule, routingComponents } from './app.routes';
//import { ParallaxComponent } from './parallax/parallax.component';
import { ng2parallax } from './parallax/parallax.directive';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    //HelloComponent,
    //ParallaxComponent,
    ng2parallax
   // ParallaxDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
