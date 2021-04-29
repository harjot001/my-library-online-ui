import { Component, OnInit } from '@angular/core';
import { Resource } from '../Resource';
import { ResourceService } from '../resource.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private location: Location) { }

  ngOnInit(): void {
    this.searchResources();
  }

  resources : Resource[] = [];



  searchResources(): void {
    console.log("Search REsources called")
    const criterion = this.route.snapshot.paramMap.get('criterion');
    const searchKeyWord = this.route.snapshot.paramMap.get('searchKeyword');
    this.resourceService.searchResource(criterion, searchKeyWord).subscribe(resources => this.resources = resources.resourceList);
  }

}
