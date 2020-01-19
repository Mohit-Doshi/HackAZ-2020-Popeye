import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'overview', component: OverviewComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'GitHub', component: GitHubComponent },
  // { path: 'resume', component: ResumeComponent },
  // { path: 'timeline', component: TimelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
