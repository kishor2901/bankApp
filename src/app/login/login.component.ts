import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd exicute
  //properties
  aim="ur perfect banking partner"

  accounts='enter ur account number here'

acno="";
pswd="";


  //user defined fcns-4th exicute
  login(){
    var acno=this.acno
    var pswd=this.pswd
    const result=this.ds.login(acno,pswd);
    if(result){
      alert('login successful');
      this.router.navigateByUrl('dashBoard')
    }
    else{
      alert('login failed')
    }
  }

  //router-variable of login
  //Router-it is a class of 'navigateByUrl'


  // login(a:any,p:any){
  //   var acno=a.value
  //   var pswd=p.value
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('login successful')
  //     }
  //     else{
  //       alert('invalid password')
  //     }
  //   }
  //   else{
  //     alert('invalid user details')
  //   }
  // }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }

  userDetails:any={//object of objects
    1000:{acno:1000,username:'kishor',password:1000,balance:5000},
    1001:{acno:1001,username:'akhil',password:1001,balance:3000},
    1002:{acno:1002,username:'adarsh',password:1002,balance:2000}
  }

  constructor(private router:Router,private ds:DataService) { } // 1st exicute-special member fcn.automatically invokes when an obj is created

  ngOnInit(): void {// 2nd exicute -lifrcycle hooks of angular-initial process of component initilization
  }

}
