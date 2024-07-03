import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiEduAddModalComponent } from './academi-edu-add-modal.component';

describe('AcademiEduAddModalComponent', () => {
  let component: AcademiEduAddModalComponent;
  let fixture: ComponentFixture<AcademiEduAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademiEduAddModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademiEduAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
