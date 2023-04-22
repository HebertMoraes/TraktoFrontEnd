import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDesignBackgroundPageComponent } from './all-design-background-page.component';

describe('AllDesignBackgroundPageComponent', () => {
  let component: AllDesignBackgroundPageComponent;
  let fixture: ComponentFixture<AllDesignBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDesignBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDesignBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
