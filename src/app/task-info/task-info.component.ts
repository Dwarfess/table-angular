import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {HttpService} from '../services/http.service';
import {Task} from '../services/task';

@Component({
    selector: 'app-task-info',
    templateUrl: './task-info.component.html',
    styleUrls: ['./task-info.component.less']
})
export class TaskInfoComponent implements OnInit {
    // create table header
    displayedColumns: string[] = ['name', 'tags', 'actual_effort', 'estimated_effort', 'description', 'due_date'];
    tasks: Task[];

    inlineEdit: boolean;
    taskName: string;

    constructor(private service: HttpService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        // checks url params for define task
        this.activatedRoute.params.forEach((params: Params) => {
            let name = params['task']; // get task id(name)

            // http gets all of the tasks and find  the task
            this.service.getTasks()
                .subscribe(data => this.tasks = data.filter(x => x.name === name));
        });
    }

    // move to the page of the task list
    goBack() {
        this.router.navigate(['/'])
            .then(response => response);
    }

    edit(x, task) {
        this.inlineEdit = x;

        if (task) {
            // http put changes in the task
            let changes = {id: task.id, name: task.name};
            this.service.putChanges(changes)
                .subscribe(data => {
                    console.log(data);
                });
        }
    }
}
