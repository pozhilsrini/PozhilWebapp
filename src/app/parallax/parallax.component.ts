import { Component } from '@angular/core';
//import { ng2parallax } from './parallax.directive';

@Component({
  selector: 'app-parallax',
  template:`

  <div style='width: 200; height: 2000px'>
    <div parallax speed="5" src="app/parallax/image1.jpg"></div>
  </div>
    <div>tjhis is second <div>
    <div style='width: 200; height: 1000px'>
    <div parallax speed="5" src="app/parallax/image1.jpg"></div>
  </div>

  `
  //templateUrl: './parallax.component.html',
  //styleUrls: ['./parallax.component.css']
  
  
})

export class ParallaxComponent  {
}
