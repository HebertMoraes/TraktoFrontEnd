import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewareBackgroundPageComponent } from './courseware-background-page.component';

describe('CoursewareBackgroundPageComponent', () => {
  let component: CoursewareBackgroundPageComponent;
  let fixture: ComponentFixture<CoursewareBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursewareBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursewareBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
