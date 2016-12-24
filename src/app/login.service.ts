import { Injectable, EventEmitter,Output } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from '@angular/router'




import { CookieService } from 'angular2-cookie/services/cookies.service';

import { LoginPopup } from './LoginPopup';



@Injectable()
export class LoginService {

  constructor(private cookieService:CookieService,
  			  private http:Http,
  			  private router:Router) { }

   //@Output()loginStack:EventEmitter<any> = new EventEmitter();

  private loginPopups:any [] ;

  postLogin(loginDetails){


  		const headers = new Headers({
     'x-requested-with': 'XMLHttpRequest'

      

    });
  		

  		const url = 'https://api.archiveonline.se/api/authenticate';
      console.log();

  		var formData:FormData = new FormData();
  		formData.append("username", loginDetails.username);
  		formData.append("password", loginDetails.password);

  		//this.loginStack.emit(1);
  		return this.http.post(url,formData,{headers:headers})
  		.map(res => res.json())
  		
  }


  writeCookie(loginPopup){
	let date = new Date(new Date().getTime()+loginPopup.expire_at);
	this.cookieService.put('token',loginPopup.token,{expires:date})
	this.router.navigate(['admin']);
  	console.log(loginPopup)
  }

}
