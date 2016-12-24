import { Component, OnInit } from '@angular/core';
import { Changelog } from './changeLog';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.css']
})
export class ChangeLogComponent implements OnInit {

  
  date:Date;
  changeLogs:Changelog[] 
  constructor() { 
    this.date = new Date();
     this.changeLogs = [new Changelog('Meeting',  'Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.','http://localhost:4200/#',this.date,'fa-briefcase'),
                new Changelog ('Decision',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",'http://localhost:4200/#',this.date,'fa-file-text'),
                new Changelog ('Decision',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",'http://localhost:4200/#',this.date,'fa-file-text'),
                 new Changelog ('Decision',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",'http://localhost:4200/#',this.date,'fa-file-text'),

                ];

  	console.log(this.date.setDate(this.date.getDate() - 1));
  	}

  ngOnInit() {
  }

}
