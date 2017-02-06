import { Component, OnInit } from '@angular/core';
import { SiteJsonService } from '../home/site-json.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	contactPageData:any = [];

  constructor(private sjs:SiteJsonService) { 
  	this.sjs.getContactPageData().subscribe((data) => {
  		this.contactPageData = data;
  	})

  }

  ngOnInit() {
  }

}
