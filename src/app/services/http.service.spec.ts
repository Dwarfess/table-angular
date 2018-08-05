import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {HttpService} from './http.service';
import {Task} from './task';

describe('HttpService', () => {
    let service: HttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });

        service = TestBed.get(HttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Should retrieve from the API via GET', () => {
        const dummyPost: Task[] = [
            {
                'id': 11,
                'name': 'Today_task11',
                'creation_date': '2015-04-21T06:50:21',
                'due_date': '2015-04-22T23:59:00',
                'start_date': '2015-04-21T00:00:01',
                'is_completed': false,
                'is_archived': false,
                'is_high_priority': true,
                'estimated_effort': 5.5,
                'actual_effort': 3.3,
                'physical_progress': 60,
                'obj_status': 'active',
                'description': 'Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit',
                'project_id': 0,
                'tags': [
                    'meeting'
                ]
            }
        ];
        service.getTasks().subscribe(tasks => {
            expect(tasks.length).toBe(1);
            expect(tasks).toEqual(dummyPost);
        });

        const request = httpMock.expectOne(`${service.url}`);
        expect(request.request.method).toBe('GET');

        request.flush(dummyPost);
    });
});
