import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesWebComponentComponent } from './habilidades-web-component.component';

describe('HabilidadesWebComponentComponent', () => {
  let component: HabilidadesWebComponentComponent;
  let fixture: ComponentFixture<HabilidadesWebComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesWebComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
