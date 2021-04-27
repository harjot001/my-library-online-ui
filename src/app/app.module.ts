import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseComponent } from './browse/browse.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    BrowseComponent,
    ResourceDetailsComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
