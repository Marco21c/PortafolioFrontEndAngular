import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesHySComponentComponent } from './habilidades-hy-scomponent.component';

describe('HabilidadesHySComponentComponent', () => {
  let component: HabilidadesHySComponentComponent;
  let fixture: ComponentFixture<HabilidadesHySComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesHySComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesHySComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
