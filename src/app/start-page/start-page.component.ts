import { Component, OnInit ,Inject,Output,EventEmitter,AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { DOCUMENT } from '@angular/platform-browser';
import { HostListener } from '@angular/core';

import { LoginService } from '../login.service';
import { LoginPopup } from '../LoginPopup';





@Component({
  selector: 'app-start',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartComponent implements OnInit,AfterViewInit {
  height:number = 50;
  width:number = 50;
  startPage:boolean = false;
  navbar:string ='fadeInDown' ;
  start:string ;
  visibility:string = 'hidden';
  navbarCl:string='';
  scroll:number =10;

  view:boolean = true;

  loginForm:FormGroup;

  loginPopups:any [];

  response:string = '';

  loginCog:boolean = false;
  loginFalse:boolean = false;

  


  @Output() navbarH =  new EventEmitter();
  @ViewChild('navbarr') el:ElementRef;

  container:any;
  navHeight:number=0;


  constructor(@Inject(DOCUMENT) private document: Document,
              private formbldr:FormBuilder,
              private loginService:LoginService
             

              ) { 

    }

ngOnInit() {

  this.onResize();
  this.initForm();

}

@HostListener('window:resize', ['$event'])
ngAfterViewInit(){

  this.onResize();
  
}


onResize() {
  this.width = window.innerWidth;
  //this.width -= (this.width * .013);
  this.height = window.innerHeight;
}




@HostListener("window:scroll", ['$event'])
onWindowScroll() {


  let number = this.scrollbarYPos();

  if (number > 100) {
    this.navbarCl = 'fixed-theme';


  } else if (number < 10) {
    this.navbarCl = ''

  }

  console.log(this.navbarCl)





}


onLogin(){
  this.loginCog= true;
            this.loginFalse = false;

   this.loginService.postLogin(this.loginForm.value)
   .subscribe(data => {
     this.loginPopups = data.data;
     this.response = 'has-success';
        },err => {

          this.response = 'has-error'
          this.loginFalse = true;
          this.loginCog = false;


     console.log(err);

   });



    

    
  
  
  

}

initForm(){
  this.loginForm = this.formbldr.group({
      username: ["" , Validators.required],
      password: ["" , Validators.required ]
    });
}




loginRedirect(loginPopup){
  this.loginService.writeCookie(loginPopup);
}


 private scrollbarYPos(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }



}
