import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPagesComponent } from './jobs-pages.component';

describe('JobsPagesComponent', () => {
  let component: JobsPagesComponent;
  let fixture: ComponentFixture<JobsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
