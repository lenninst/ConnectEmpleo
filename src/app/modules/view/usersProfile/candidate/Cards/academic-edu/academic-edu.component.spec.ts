import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicEduComponent } from './academic-edu.component';

describe('AcademicEduComponent', () => {
  let component: AcademicEduComponent;
  let fixture: ComponentFixture<AcademicEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicEduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
