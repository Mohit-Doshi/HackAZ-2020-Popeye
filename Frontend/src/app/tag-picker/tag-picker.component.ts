import { Component, OnInit, EventEmitter } from '@angular/core';
import { WeightedTag, ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-tag-picker',
  templateUrl: './tag-picker.component.html',
  styleUrls: ['./tag-picker.component.styl']
})
export class TagPickerComponent implements OnInit {
  tagsSelected: EventEmitter<WeightedTag[]> = new EventEmitter();
  tags: WeightedTag[] = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.getAvailableTags().subscribe(tags => {
      for (var tag of tags) {
        this.tags.push(new WeightedTag(tag, 0));
      }
    });
  }

}
