import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'results', component: SearchResultsComponent },
  { path: 'profile/:id', component: CandidateProfileComponent },
  { path: 'upload', component: UploadResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
