import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesFiltersComponent } from './movies-filters/movies-filters.component';
import { NavBarSocialComponent } from './nav-bar-social/nav-bar-social.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { PremieresComponent } from './premieres/premieres.component';
import { SlidesComponent } from './slides/slides.component';
import { WeeklyFilmBoardComponent } from './weekly-film-board/weekly-film-board.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent,
      CarouselComponent,
      FooterComponent,
      MoviesFiltersComponent,
      NavBarSocialComponent ,
      NavbarMenuComponent,
      PremieresComponent,
      SlidesComponent,
      WeeklyFilmBoardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
