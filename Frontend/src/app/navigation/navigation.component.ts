import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  navLinks: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.navLinks = [
      {
        label: 'Overview',
        path: '/overview'
      },
      {
        label: 'Projects',
        path: '/projects'
      },
      {
        label: 'GitHub',
        path: '/GitHub'
      },
      {
        label: 'Resume',
        path: '/resume'
      },
      {
        label: 'Timeline',
        path: '/timeline'
      }
    ];
  }
}