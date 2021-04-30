import { Injectable } from '@angular/core';
import { Resource } from './Resource';
import {RESOURCES} from './mock-resources';
import {Observable, of} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private resourcesURL = 'http://ec2-54-160-113-120.compute-1.amazonaws.com:5008/resources/browseResources';
  private resourcesDetailsURL = 'http://ec2-54-160-113-120.compute-1.amazonaws.com:5008/resources/getResourceDetails/';
  private searchResourceURL = 'http://ec2-54-160-113-120.compute-1.amazonaws.com:5008/resources/searchResource/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Ths function get list of all resources available
   * @returns 
   */
  getResources(): Observable<any> {
    return this.http.get<any>(this.resourcesURL)
  }

  /**
   * This function returns details of the given resource 
   * @param resourceId 
   * @returns 
   */
  getResource(resourceId: number): Observable<any> {
    return this.http.get<any>(this.resourcesDetailsURL + resourceId)
  }

  /**
   * This function returns the list fo resources which match the search criteria
   * @param criterion 
   * @param searchKeyword 
   * @returns 
   */
  searchResource(criterion: string, searchKeyword:string):Observable<any>{
    return this.http.get<any>(this.searchResourceURL + criterion + '/' + searchKeyword)
  }

}
