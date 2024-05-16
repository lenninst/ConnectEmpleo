import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPagesComponent } from './intro-pages.component';

describe('IntroPagesComponent', () => {
  let component: IntroPagesComponent;
  let fixture: ComponentFixture<IntroPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
