import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Todo } from 'src/app/models/Todo';
import { TodoappRepository } from './todoapp.repository';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {
  circleIcon = faCircle;

  todos:Todo[]=[];
  started:Todo[]=[]
  todosRepository:TodoappRepository;

  constructor(private dateAdapter: DateAdapter<any>) {
    this.todosRepository = new TodoappRepository();
    this.todos = this.todosRepository.getTodos();
    this.started = this.todosRepository.getStarted();
  }

  ngOnInit() {
    this.dateAdapter.setLocale('tr');
  }

  date: Date | null = null;
  date1: Date | null = null;
  formatDate(date: any, date1: any): string {
    const timeDiff = Math.abs(date1.getTime() - date.getTime());
    console.log(timeDiff)
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(daysDiff)
    return daysDiff.toString();
  }
  result: string;

  formatDate1(date2: any, date3: any, task: { name: String }, i: number): string {
    const timeDiff = Math.abs(date3.getTime() - date2.getTime());
    console.log(timeDiff)
    const daysDiff1 = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(daysDiff1)
    this.result = daysDiff1.toString();
    // this.addStarted(task, this.result);
    this.todos.splice(i, 1);
    this.date = null;
    this.date1 = null;
    this.closeModal();
    return this.result.toString();

  }
  modal: boolean = false;
  openModal() {
    this.modal = true;
  }
  closeModal() {
    this.modal = false
  }
  clearDate() {
    this.date = new Date();
    this.date1 = new Date();

  }

  taskForm = new FormGroup({
    name: new FormControl(""),
    task: new FormControl("")
  })
  msg:string;

  onSubmit() {
    const newTodo:Todo = {id:this.todos.length+1,description:this.taskForm.value.task as string,personel:"Umut Bektaş",startDate:null,endDate:null,status:"Atama"}
    if(this.taskForm.value.name && this.taskForm.value.task){
    return this.todosRepository.addTodos(newTodo) , this.msg = "Başarılı";
    this.taskForm.reset();
    }
    else{
      return this.msg ="Görev ve atanan kişiyi doldurunuz."
    }
    
  }

 
  // addStarted(item: {}, result: string) {
  //   this.started.push({ ...item, result })
  //   console.log(this.started);
  // }
 
}

