import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

//login display name
user="";

  //deposit properties
  acno="";
  pswd="";
  amount="";

  //withdraw properties
  acno1="";
  pswd1="";
  amount1="";

  constructor(private ds:DataService) {this.user=this.ds.currentuser }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amount;
    const result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(`${amount} credited to your account----balance: ${result}`)
    }

  }

  withdraw(){
    var acno=this.acno1;
    var pswd=this.pswd1;
    var amount=this.amount1;
    const result=this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(`${amount} debited from your account----balance: ${result}`)
    }
    
  }

}
