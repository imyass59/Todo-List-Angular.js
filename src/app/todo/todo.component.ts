import { Component, OnInit } from '@angular/core';
import { Model } from './Model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Model [] = [];
  InputText:string = "";
  constructor() { }
  
  ngOnInit(): void
  {
    this.todos = [
      {
        context : 'Learn Node.js',
        completed : false
      },
      {
        context : 'Learn Angular.js',
        completed : false
      },
      {
        context : 'Learn HTML and CSS',
        completed : true
      }
    ];
  }

  toggleDone(id:number)
  {
    this.todos.map((v , i) =>
    {
      if(i == id)
      {
      v.completed = !v.completed
      }

      return v;
    })
  };

  RemoveTodo(id:number)
  {
    this.todos =this.todos.filter((v,i) => i !== id)
  }

  AddTodo()
  {
    if((this.InputText).trim() != "")
    {
      this.todos.push({context: this.InputText,completed:false});
    }

    this.InputText = "";
  };

}
