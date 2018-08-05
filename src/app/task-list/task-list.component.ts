import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HttpService} from '../services/http.service';
import {Task} from '../services/task';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'tags', 'actual_effort', 'estimated_effort', 'due_date'];
    tasks: Task[];

    constructor(private service: HttpService, private router: Router) {}

    ngOnInit() {
        this.getTasks();
    }

    // http get tasks
    public getTasks() {
        this.service.getTasks()
            .subscribe(data => {
                console.log(data);
                this.tasks = data.filter((x) => x.obj_status === 'active');
                console.log(this.tasks);
            });
    }

    // move to the page of the task info
    onSelect(task) {
        this.router.navigate(['/', (task.name)])
            .then(response => response);
    }
}
