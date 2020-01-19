import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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
  API_URL = 'http://localhost:5000/api/';

  private tags: BehaviorSubject<Tag>;

  constructor(private httpClient: HttpClient) { }

  public getAvailableTags(): BehaviorSubject<Tag> {
    return this.tags;
  }
}
