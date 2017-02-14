import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from 'app/service/LoginService'
import { User } from 'app/model/User'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
	subscription:Subscription;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {

    	 this.subscription = this.loginService.getUser().subscribe(res => {
				this.user = new User(res);

			console.log(res)
      
      console.log(this.user.name);
               

			},
				err => {
					console.log(err);
				},
				() => {
					console.log('Completed!');
				});

  }

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
