import { Component, OnInit ,Inject,Output,EventEmitter,AfterViewInit,ElementRef,ViewChild } from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';
import { HostListener } from '@angular/core';







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

  @Output() navbarH =  new EventEmitter();
  @ViewChild('navbar') el:ElementRef;

  container:any;
  navHeight:number=0;


  constructor(@Inject(DOCUMENT) private document: Document) { }

ngOnInit() {

  this.onResize();
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


  let number = this.document.body.scrollTop;
  if (number > 100) {
    this.navbarCl = 'fixed-theme';


  } else if (number < 10) {
    this.navbarCl = ''

  }





}


onLogin(){

}



}
