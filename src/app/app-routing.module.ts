import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {//for login
    path:'',component:LoginComponent
  },

  {//for dashBoard-4200/dashBoard
    path:'dashBoard',component:DashBoardComponent
  },

  {//for reegister-4200/register
    path:'register',component:RegisterComponent

  },
  {//for transaction
  path:'transaction',component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
