import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
	{path:'',redirectTo:'home', pathMatch: 'full' },
	{path: 'home', component: HomeComponent},
	{path: 'schedule', component: ScheduleComponent},
	{path: 'teams', component: TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
