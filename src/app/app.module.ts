import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskInfoComponent} from './task-info/task-info.component';

import {MaterialModule} from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpService} from './services/http.service';

@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        TaskInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
