import { Component, OnInit } from '@angular/core';
import { SiteJsonService } from '../home/site-json.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

	features:any = [];
  title:string;
  description:string;

  constructor(private sjs:SiteJsonService) { 
  	this.sjs.getFeaturesPageData().subscribe((data)=> {

  		this.features = data.features
      console.log(this.features)

  	})

  }

  ngOnInit() {
  }

}
