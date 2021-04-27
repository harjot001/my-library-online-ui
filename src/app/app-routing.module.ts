import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'resourceDetails/:resourceId', component: ResourceDetailsComponent },
  { path: 'searchResults', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }