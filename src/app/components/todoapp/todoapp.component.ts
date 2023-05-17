import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Model,  TodoList, TodoTask } from 'src/app/model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';



@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {

  constructor(private dateAdapter: DateAdapter<any>) {
  }
  ngOnInit() {
    this.dateAdapter.setLocale('tr');
  }
  
  date:Date;
  date1:Date;
  formatDate(date:any,date1:any): string{
    const pipe = new DatePipe('en-US'); 
     pipe.transform(date, 'dd/MM/yyyy'); 
    const pipe1 = new DatePipe('en-US'); 
    pipe1.transform(date1, 'dd/MM/yyyy'); 
    const  timeDiff = Math.abs(date1.getTime() - date.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return daysDiff.toString();
  }



taskForm = new FormGroup({
  name : new FormControl(""),
  task : new FormControl("")
})

onSubmit(){
   this.addItem1(this.taskForm.value);
   this.taskForm.reset();
 }
 
 myArray: any[] = [];
 addItem1(item: any) {
  this.myArray.push(item);
}
}

