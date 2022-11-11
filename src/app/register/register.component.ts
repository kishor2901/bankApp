import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   uname="";
   acno="";
   pswd=""

  constructor( private fb:FormBuilder,private ds:DataService,private router:Router) { } //ds-variable of register

//register model
registerForm=this.fb.group({//group  *-->regular expression
   uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]], //array
   acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  ngOnInit(): void {
  }
register(){
  console.log(this.registerForm);
  
  var uname=this.registerForm.value.uname
  var pswd=this.registerForm.value.pswd
  var acno=this.registerForm.value.acno
  const result=this.ds.register(acno,uname,pswd);
  if(this.registerForm.valid){
  if(result){
    alert('registration completed')
    this.router.navigateByUrl('');
  }
  else{
    alert('registration failed')
    this.router.navigateByUrl('register')
  }
}
 else{
  alert('Regiser failed')
  console.log(this.registerForm.get('uname')?.errors);
  
 }
}
}
