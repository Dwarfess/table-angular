import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    public url = `/assets/data/tasks.json`;

    constructor(private http: HttpClient) {}

    // http get all the tasks
    public getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.url);
    }

    // http put changes in chosen task
    public putChanges(props): Observable<Task> {
        return this.http.put<Task>('/updateTask', props);
    }
}
