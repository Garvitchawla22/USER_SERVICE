import { Component, OnInit } from '@angular/core';
import { USerService } from '../Services/ser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  // providers:[USerService]
})
export class AdduserComponent implements OnInit{

  username:string='';
  status:string='active';

  constructor(private us:USerService){

  }

  ngOnInit(){
    
   
  }

AddNewUser(){
  this.us.AddUser(this.username,this.status);
  // console.log(this.us.users);
}

}
