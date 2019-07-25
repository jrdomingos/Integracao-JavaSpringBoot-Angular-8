import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../services/task';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logo:any = '../assets/images/logo.png';

  public task:Task = new Task();
  public tasks: Task[] = new Array();

  constructor(public taskService:TaskService){};

  ngOnInit(){
    return this.findAll(); 
  }

  findAll():void{
    this.taskService.findAll().subscribe(res => {
      console.log(res);
      this.tasks = res;
    })
  }

     create():void {
          if(this.task.id){
            this.taskService.update(this.task).subscribe(res => { 
              this.task = new Task(); 
              this.findAll()} 
            );
         }else{
            this.taskService
              .create(this.task)
              .subscribe(response => {
                this.task = new Task();
                return this.findAll(); 
              })
           }
         
     } 

      delete(id): void {      
      this.taskService.delete(id).subscribe(response => {
      return this.findAll(); 
         });
    }

    
    update(task): void {
      this.task = task;      
    }


}

