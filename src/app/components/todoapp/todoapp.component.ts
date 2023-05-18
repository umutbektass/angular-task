import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Model,  TodoList, TodoTask } from 'src/app/model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import {faCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {
  circleIcon = faCircle;

  constructor(private dateAdapter: DateAdapter<any>) {
  }
  ngOnInit() {
    this.dateAdapter.setLocale('tr');
  }
  
  date:Date |null=null;
  date1:Date |null=null;
  formatDate(date:any,date1:any): string{ 
    const  timeDiff = Math.abs(date1.getTime() - date.getTime());
    console.log(timeDiff)
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    console.log(daysDiff)
    return daysDiff.toString();
  }
  result:string;
 
  formatDate1(date2:any,date3:any,task:{name:any},i:number): string{ 
     const  timeDiff = Math.abs(date3.getTime() - date2.getTime());
      console.log(timeDiff)
     const daysDiff1 = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    console.log(daysDiff1)
      this.result=daysDiff1.toString();
      this.addStarted(task,this.result);
      this.myArray.splice(i,1);
      this.date=null;
      this.date1=null;
      this.closeModal();
    return this.result.toString();
       
  }
  modal:boolean=false;
openModal(){
  this.modal=true;
}
closeModal(){
  this.modal=false
}
clearDate(){
  this.date=new Date();
  this.date1=new Date();

}





taskForm = new FormGroup({
  name : new FormControl(""),
  task : new FormControl("")
})

onSubmit(){
   this.addItem1(this.taskForm.value);
   this.taskForm.reset();
 }

 started:any[]=[

 ]

 addStarted(item:{},result:string){
    this.started.push({...item,result})
    console.log(this.started);
 }
 myArray: any[] = [
  {name:"Responsive Tasarım", task:"Umut bektaş",durum:"Atama bekliyor"},
  {name:"Tablet Tasarım", task:"Umut bektaş",durum:"Atama bekliyor"},
 ];
 addItem1(item: any) {
  this.myArray.unshift({...item,durum:"Atama bekliyor"});
}
}

