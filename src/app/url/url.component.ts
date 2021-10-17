import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  shortUrl : any = "";
  constructor(private svc : DataService) { }

  ngOnInit(): void {
  }

  generateShortURL(formInput:any)
  { 
    this.svc.shortUrl(formInput.url).subscribe((data: any)=>{
      let tinyUrl : any;
      tinyUrl = "https://mockapi.io/clone/616aea4816e7120017fa113c/short/" + data.id;
      console.log(tinyUrl);
      this.shortUrl = tinyUrl;
    });
  }

}
