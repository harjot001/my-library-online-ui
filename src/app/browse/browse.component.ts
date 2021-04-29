import { Component, OnInit } from '@angular/core';
import { Resource } from '../Resource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private resourceService:ResourceService) { 
  }

  resources : Resource[] = [];

  getResources(): void {
    this.resourceService.getResources().subscribe(resources => this.resources = resources.resourceList);
  }

ngOnInit(): void {
  this.getResources();
}

}
