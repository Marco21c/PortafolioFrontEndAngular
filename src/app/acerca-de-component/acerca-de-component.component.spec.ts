import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeComponentComponent } from './acerca-de-component.component';

describe('AcercaDeComponentComponent', () => {
  let component: AcercaDeComponentComponent;
  let fixture: ComponentFixture<AcercaDeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
