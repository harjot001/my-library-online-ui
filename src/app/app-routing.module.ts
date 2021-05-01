import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { BrowseComponent } from './browse/browse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: DashboardComponent },
  { path: 'about', component: InfoComponent },
  { path: 'getLibraryCard', component: InfoComponent },
  { path: 'libraryPolicies', component: InfoComponent },
  { path: 'contactUs', component: InfoComponent },
  { path: 'resourceDetails/:resourceId', component: ResourceDetailsComponent },
  { path: 'searchResults/:criterion/:searchKeyword', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }