import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPublicComponent } from './movies-public.component';

describe('MoviesPublicComponent', () => {
  let component: MoviesPublicComponent;
  let fixture: ComponentFixture<MoviesPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
