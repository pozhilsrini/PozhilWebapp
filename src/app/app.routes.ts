import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
   { path: 'app', component: AppComponent },
   { path: 'hello', component: HelloComponent }
  
];

//export const appRoutingProviders: any[] = [
//];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);