import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
    private headers: Headers;
    private options: RequestOptions;
  constructor(private http:Http) {
    this.headers = new Headers({'Content-type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers});
   }
 
   create(task: Task): Observable<Task>{
    return this.http
               .post('http://localhost:8080/tasks', JSON.stringify(task), this.options)
               .map((res: Response) => res.json());
 }

  findAll():Observable<Task[]> {
    return this.http.get('http://localhost:8080/tasks')
                    .map((res:Response) =>  res.json());
  } 
   
   
  delete(id): Observable<Task> {
    return this.http.delete('http://localhost:8080/tasks/'+ id).map(( res: Response) => res.json());
  }      


  update(task) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/tasks/' + task.id, task, { headers }).map(res => res.json());
  }
   
   

}