import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  exportAs:'ngForm'
})
export class RegisterComponent implements OnInit {

  constructor(private svc:DataService, private router : Router) { }

  ngOnInit(): void {
  }

  signUp(formData : any)
  {
    this.svc.registerUser(formData).subscribe( (status:any) => {
      if(status.message == "User Created!")
        this.router.navigate(['/login']);
    });
  }
}
