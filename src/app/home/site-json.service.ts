import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SiteJsonService {

  constructor(private http:Http) { }

  getFeaturesPageData(){
  	return this.http.get('./Json/features.json').map(res => res.json());
  }


  getChangelogPageData(){
  	return this.http.get('./Json/changelog.json').map(res => res.json());
  }


  getContactPageData(){
  	return this.http.get('./Json/contact.json').map(res => res.json());
  }



}
