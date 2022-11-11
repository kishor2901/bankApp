import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//login name display
currentuser:any

//login acno
currentacno:any

  userDetails:any={//object of objects
    1000:{acno:1000,username:'kishor',password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,username:'akhil',password:1001,balance:3000,transaction:[]},
    1002:{acno:1002,username:'adarsh',password:1002,balance:2000,transaction:[]}
  }

  constructor() { }
  register(acno:any,username:any,password:any){
    var userDetails=this.userDetails;
    if(acno in localStorage){
      return false;
    }
    else{
      userDetails[acno]={acno,username,password,balance:0,transaction:[]}
      console.log(userDetails);
      return true
    }
  }

  login(acno:any,pswd:any){
    var userDetails=this.userDetails
      if(acno in userDetails){
        if(pswd==userDetails[acno]['password']){
        this.currentuser=userDetails[acno]['username']
        this.currentacno=acno
          return true;
        }
        else{
          return false
        }
      }
      else{
        return false;
      }
  }

  deposit(acno:any,pswd:any,amt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amt) //-->parseint used to convert string to intiger since amount is in string form
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount;
        userDetails[acno]['transaction'].push({type:'credit',amount});
        console.log(userDetails);
        
        return userDetails[acno]['balance']
      }
      else{
        alert('invalid password')
        return false
      }
    }
    else{
      alert('invalid user details')
      return false
    }
  }


  withdraw(acno:any,pswd:any,amt:any){
    let  userDetails=this.userDetails;
    var amount=parseInt(amt);
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        if(userDetails[acno]['balance']>=amount){
          userDetails[acno]['balance']-=amount;
          userDetails[acno]['transaction'].push({type:'debit',amount})
          console.log(userDetails);
          return userDetails[acno]['balance'];
        }
        else{
    
          alert('insufficient balance')
          return false
        }
      }
      else{
    
        alert('incorrect password')
        return false
      }
    }
    else{

      alert('invalid user details')
      return false
    }
     
  }
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
}
