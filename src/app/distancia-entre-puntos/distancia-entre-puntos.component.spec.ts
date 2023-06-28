import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciaEntrePuntosComponent } from './distancia-entre-puntos.component';

describe('DistanciaEntrePuntosComponent', () => {
  let component: DistanciaEntrePuntosComponent;
  let fixture: ComponentFixture<DistanciaEntrePuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistanciaEntrePuntosComponent]
    });
    fixture = TestBed.createComponent(DistanciaEntrePuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
