import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MockApiService } from './mock-api.service';

// Advanced Candidate Explorer (ACE)

export class Tag {
  constructor(public name: string) { }
}

export class Hashtag {
  constructor(public name: string) { }
}

export class Event {
  constructor(
    public time: string,
    public name: string,
    public description: string
  ) { }
}

export class Candidate {
  constructor(
    public name: string,
    public email: string,
    public mobile: string,
    public experience: string,
    public education: string,
    public skills: Tag[],
    public hashtags: Hashtag[],
    public githubdata: GitHubData,
    public events: Event[],
    public id: string
  ) { }
}

export class SearchResult {
  constructor(
    public id: string,
    public name: string,
    public rank: string,
    public tags: Tag[]
  ) {}
}

export class SearchResults {
  constructor(
    public searchResults: SearchResult[]
  ) { }
}

export class WeightedTag {
  constructor(
    public tag: Tag,
    public weight: number
  ) { }
}

export class SearchQuery {
  constructor(
    public description: string,
    public weightedTag: WeightedTag[]
  ) { }
}

export class LanguageUsage {
  constructor(
    public language: string,
    public percentage: number
  ) { }
}

export class GitHubData {
  constructor(
    public languages: LanguageUsage[],
    public forks: number,
    public stars: number,
    public repos: number
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  API_URL = 'http://localhost:5000/api';
  public tags: BehaviorSubject<Tag[]>;
  public searchResults: BehaviorSubject<SearchResults>;

  private api(location: string): string {
    return this.API_URL + location;
  }

  constructor(
    private httpClient: HttpClient,
    private mockApi: MockApiService
  ) {
    this.tags = new BehaviorSubject<Tag[]>([]);
    this.searchResults = new BehaviorSubject<SearchResults>(new SearchResults([]));
  }

  public getAvailableTags(): BehaviorSubject<Tag[]> {
    // this.httpClient.get<Tag[]>(this.api('/tags')).subscribe(res => {
    //   this.tags.next(res);
    // });
    this.tags.next(this.mockApi.tags);
    return this.tags;
  }

  public createTag(tag: Tag) {
    this.httpClient.post(this.api('/tags'), tag);
  }

  public doSearch(searchQuery: SearchQuery): BehaviorSubject<SearchResults> {
    this.httpClient.post<SearchResults>(this.api('/search'), searchQuery).subscribe(res => {
      this.searchResults.next(res);
    });

    return this.searchResults;
  }
}
