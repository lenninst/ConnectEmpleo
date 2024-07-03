import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceAddModalComponent } from './work-experience-add-modal.component';

describe('WorkExperienceAddModalComponent', () => {
  let component: WorkExperienceAddModalComponent;
  let fixture: ComponentFixture<WorkExperienceAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceAddModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkExperienceAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
