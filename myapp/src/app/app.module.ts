import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmplyoeeComponent } from './Serivces/emplyoee/emplyoee.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { TeachersDetailComponent } from './Routing/teachers-detail/teachers-detail.component';
import { CustomPipe } from './Pipes/pipes/customPipe';
import { LazyComponent } from './lazy-feature/lazy.component';
import { ObservableComponent } from './Observable/observable/observable.component';
import { StudentDetailsComponent } from './Routing/student-details/student-details/student-details.component';
import { StudentMarksComponent } from './Routing/student-marks/student-marks/student-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplyoeeComponent,
    PipesComponent,
    RoutingComponents,
    PageNotFoundComponent,
    TeachersDetailComponent,
    CustomPipe,
    ObservableComponent,
    StudentDetailsComponent,
    StudentMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
