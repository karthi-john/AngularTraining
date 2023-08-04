import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Routing/students/students.component';
import { TeachersComponent } from './Routing/teachers/teachers.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { TeachersDetailComponent } from './Routing/teachers-detail/teachers-detail.component';
import { StudentDetailsComponent } from './Routing/student-details/student-details/student-details.component';
import { StudentMarksComponent } from './Routing/student-marks/student-marks/student-marks.component';

const routes: Routes = [
  { path : '' , redirectTo : '/teachers-list' , pathMatch : 'full'},
  {
    path : 'students',
    component: StudentsComponent,
    children : [
        { path : 'details', component : StudentDetailsComponent},
        { path : 'marks' , component : StudentMarksComponent}
    ]
  },
  { path : 'teachers-list', component : TeachersComponent},
  { path : 'teachers-list/:id', component : TeachersDetailComponent},
  {
    path: 'lazy-feature',
    loadChildren: () => import('./lazy-feature/lazy-feature.module').then(m => m.LazyFeatureModule)
  },
  { path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ StudentsComponent,
                                   TeachersComponent,
                                   PageNotFoundComponent,
                                   TeachersDetailComponent,
                                   StudentDetailsComponent,
                                   StudentMarksComponent];
