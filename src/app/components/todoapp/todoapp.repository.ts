import { Todo } from "src/app/models/Todo";

export class TodoappRepository{

private todos:Todo[] = [

    {id:1 ,description:"Güzel responsive tasarım",personel:"Umut Bektaş",startDate: new Date("20-05-2023"),endDate:new Date("20-05-2023"),status:"Atama"},
]

private started:Todo[]=[
    {id:1 ,description:"Güzel responsive tasarım",personel:"Umut Bektaş",startDate: new Date("20-05-2023"),endDate:new Date("20-05-2023"),status:"Atama"}
]

getTodos(){
    return this.todos;
}
getStarted(){
    return this.started;
}
getTodosById(item:Todo){
    return this.todos.filter(todo=> todo.id===item.id)
}
addTodos(item:Todo){
    this.todos.push(item)
}

}