import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignThumbComponent } from './design-thumb.component';

describe('DesignThumbComponent', () => {
  let component: DesignThumbComponent;
  let fixture: ComponentFixture<DesignThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignThumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
