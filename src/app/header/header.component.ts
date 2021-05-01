import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

interface SearchCriteria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.selectedCriterion = "authorName";
    this.searchText = "";
   }

  criteria: SearchCriteria[] = [
    {value: 'authorName', viewValue: 'Search By Author'},
    {value: 'description', viewValue: 'Search By Description'}
  ];

  selectedCriterion = "authorName";
  searchText = "";

  
  
  ngOnInit(): void {
    console.log(this.route.snapshot)
    // this.selectedCriterion = this.route.snapshot.paramMap.get('criterion');
    // this.searchText = this.route.snapshot.paramMap.get('searchKeyword');
    console.log(this.selectedCriterion);
    console.log(this.searchText);
    // this.searchResource();
  }

  searchResource():void{
    console.log(this.selectedCriterion);
    console.log(this.searchText);
    // console.log(this.route);
    // this.router.navigate(['searchResults', this.selectedCriterion, this.searchText], {relativeTo: this.route});
    this.router.navigate(['searchResults', this.selectedCriterion, this.searchText], {relativeTo: this.route});

  }

  

}
