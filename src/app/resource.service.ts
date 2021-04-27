import { Injectable } from '@angular/core';
import { Resource } from './Resource';
import {RESOURCES} from './mock-resources';
import {Observable, of} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private resourcesURL = 'http://localhost:5008/resources/browseResources';
  private resourcesDetailsURL = 'http://localhost:5008/resources/getResourceDetails/';

  constructor(
    private http: HttpClient
  ) { }

  // getResources(): Observable<Resource[]> {
  //   const resources = of(RESOURCES);
  //   return resources;
  // }

  getResources(): Observable<any> {
    return this.http.get<any>(this.resourcesURL)
  }

  getResource(resourceId: number): Observable<any> {
    return this.http.get<any>(this.resourcesDetailsURL + resourceId)
  }

  // getResource(id: number): Observable<Resource> {
  //   const resource = RESOURCES.find(r => r.id === id) as Resource;
  //   // this.messageService.add(`ResourceService: fetched resource id=${id}`);
  //   return of(resource);
  // }
}
