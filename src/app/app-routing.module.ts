import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Program1Component } from './program1/program1.component';
import { Program2Component } from './program2/program2.component';


const routes: Routes = [
  {'path': 'program-1', component: Program1Component},
  {'path': 'program-2', component: Program2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
