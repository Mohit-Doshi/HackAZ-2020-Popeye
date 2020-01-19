import { Component, OnInit } from '@angular/core';
import { ApiServiceService, SearchResults } from '../api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {
  private matches = 0;

  constructor(private apiService: ApiServiceService) { }

  recieveSearchResults(res: SearchResults) {
    this.matches = res.searchResults.length;
  }

  ngOnInit() {
    this.apiService.searchResults.subscribe(res => {
      this.recieveSearchResults(res);
    });
  }
}
