import { Component, OnInit, Input } from '@angular/core';
import { WeightedTag } from '../api-service.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.styl']
})
export class TagComponent implements OnInit {

  @Input()
  tag: WeightedTag;

  constructor() { }

  ngOnInit() {
  }

}
