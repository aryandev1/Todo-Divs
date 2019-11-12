import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {todo} from './todointerface';

@Injectable({
  providedIn: 'root'
})

export class DataService{

  constructor(private http:HttpClient) {  }


  items=[]
  static count=0

  // addItem(str:String)
  // {
  //     if(str!="")
  //     {
  //         this.items.push(str);
  //         DataService.count++;
  //     }
  // }

 additem(str:String)
{
  const todo = {
    todo: str
  }
  this.http.post("http://localhost:4000/todo",todo).subscribe(()=>console.log("posted to database"));
}
  getItem()
  {
      return this.http.get<todo[]>("http://localhost:4000/todo")

  }
  
  delall()
  {
     
          while(this.items.length!=0)
          {
              this.items.pop();
              
          }
          DataService.count=0;
     
  }
  // del(i:number){
  //   this.items.splice(i,1);
  //   DataService.count--;
  // }
}