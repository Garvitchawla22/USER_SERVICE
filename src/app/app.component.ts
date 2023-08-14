import { Component, OnInit } from '@angular/core';
import { USerService } from './Services/ser.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[USerService,LoggerService]
})
export class AppComponent implements OnInit{
  title = 'USER_SERVICE';
  name:string='';
  user:{name:string,status:string}[]=[];
  constructor(private us:USerService,private Logger:LoggerService){}

  ngOnInit()
{
  this.user=this.us.users;
}


}
