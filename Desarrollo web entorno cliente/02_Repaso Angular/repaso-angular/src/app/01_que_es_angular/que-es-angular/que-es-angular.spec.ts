import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsAngular } from './que-es-angular';

describe('QueEsAngular', () => {
  let component: QueEsAngular;
  let fixture: ComponentFixture<QueEsAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueEsAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsAngular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
