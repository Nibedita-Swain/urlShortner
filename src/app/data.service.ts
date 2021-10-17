import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, public router:Router) { }

  shortUrl(longUrl : any)
  {
    let api = "https://mockapi.io/clone/616aea4816e7120017fa113c/generateurl";
    let postData = {
      "longurl" : longUrl
    };
    return this.http.post(api, postData);
  }

  registerUser(formData : any)
  {
    let api = "https://mockapi.io/clone/616aea4816e7120017fa113c/register";
    return this.http.post(api, formData);
  }

  login(formData : any)
  {
    let api = "https://mockapi.io/clone/616aea4816e7120017fa113c/users";
    return this.http.post(api, formData);
  }


}
