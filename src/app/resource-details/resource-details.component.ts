import { Component, OnInit, Input } from '@angular/core';
import {Resource} from '../Resource';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private location: Location) { }

  @Input() resource: Resource;

  ngOnInit(): void {
    this.getResource()
  }

  getResource(): void {
    const id = Number(this.route.snapshot.paramMap.get('resourceId'));
    this.resourceService.getResource(id)
      .subscribe(resourceResult => this.resource = resourceResult.resource);
  }

  goBack(): void {
    this.location.back();
  }

}
