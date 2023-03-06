import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionComponentComponent } from './educacion-component.component';

describe('EducacionComponentComponent', () => {
  let component: EducacionComponentComponent;
  let fixture: ComponentFixture<EducacionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
