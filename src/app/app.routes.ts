//import { ModuleWithProviders }  from '@angular/core';
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './component/hello/hello.component';
import { AppComponent } from './app.component';
import { ParallaxComponent } from './component/parallax/parallax.component';
import { UserComponent } from './component/user/user.component';

export const routes: Routes = [
   { path: 'app', component: AppComponent },
   { path: 'hello', component: HelloComponent },
   { path: 'parallax', component: ParallaxComponent },
    { path: 'user', component: UserComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

//export const appRoutingProviders: any[] = [
//];

export const routingComponents = [AppComponent, HelloComponent, ParallaxComponent, UserComponent];  

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);