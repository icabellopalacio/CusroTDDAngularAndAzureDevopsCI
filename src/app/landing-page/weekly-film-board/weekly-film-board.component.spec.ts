import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyFilmBoardComponent } from './weekly-film-board.component';

describe('WeeklyFilmBoardComponent', () => {
  let component: WeeklyFilmBoardComponent;
  let fixture: ComponentFixture<WeeklyFilmBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyFilmBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyFilmBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
