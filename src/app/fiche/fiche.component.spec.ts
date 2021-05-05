import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FicheComponent } from './fiche.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('FicheComponent', () => {
  let component: FicheComponent;
  let fixture: ComponentFixture<FicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
