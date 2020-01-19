import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionEntrComponent } from './description-entr.component';

describe('DescriptionEntrComponent', () => {
  let component: DescriptionEntrComponent;
  let fixture: ComponentFixture<DescriptionEntrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionEntrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionEntrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
