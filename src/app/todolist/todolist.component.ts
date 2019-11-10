import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
    this.listitems=this.data.items;
  }
  remove(i){
    this.data.items.splice(i,1);
  }
  listitems=[]

}
