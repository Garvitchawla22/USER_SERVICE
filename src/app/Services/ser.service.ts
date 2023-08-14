import { Injectable } from "@angular/core"
import { LoggerService } from "./logger.service"

@Injectable()
export class USerService{

    constructor(private Logger:LoggerService){}
    users=[
    {
        name:"John",status:"Active"
    },
    {
        name:"Mark",status:"InActive"
    },
    {
        name:"Doe",status:"Active"
    }
]

AddUser(name:string,status:string){
        this.users.push({name:name,status:status})
        this.Logger.LogMessage(name,status);
}

}
