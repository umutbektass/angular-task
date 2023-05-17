import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Model{
    items;
    constructor(){
        this.items=[
            new TodoList("Kitap oku",false),
            new TodoList("Angular öğren",false),
            new TodoList("React öğren",true),
        ]
    }
}

export class TodoList{
    description:string;
    action:boolean;
    constructor(description:string,action:boolean){
        this.description = description;
        this.action = action;
    }
}

export class Task{
    taskList;
    constructor(){
        this.taskList=[
            new TodoTask("Responsive Tasarım","Umut Bektaş"),
           
        ]
    }


}
export class TodoTask{
    task:string;
    personel:string;
    
    constructor( task:string,personel:string){
        this.task=task;
        this.personel=personel;
    }
}


export class model2 {
    tasks;
    constructor(){
        this.tasks=[
            new TodoList("Kitap oku",false),
            new TodoList("Angular öğren",false),
            new TodoList("React öğren",true),
        ]
    }
  }