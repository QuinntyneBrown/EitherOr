import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EitherOrComponent } from './either-or.component';

describe('EitherOrComponent', () => {
  let component: EitherOrComponent;
  let fixture: ComponentFixture<EitherOrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EitherOrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EitherOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
