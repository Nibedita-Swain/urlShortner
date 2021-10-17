import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  exportAs:'ngForm'
})
export class LoginComponent implements OnInit {
  error = "";
  constructor(private svc : DataService, private router : Router) { }

  ngOnInit(): void {
  }

  
   loginUser(formData : any)
   {
     this.svc.login(formData).subscribe( (status:any) => {
       this.router.navigate(['/home']);
     }, (err) => {
       this.error = "Invalid Credentials!";
     });
   }
}
