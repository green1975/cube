import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { ConfigService } from '../config/config.service';
import { RessourceComponent } from './ressource.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('RessourceComponent', () => {
  let component: RessourceComponent;
  let fixture: ComponentFixture<RessourceComponent>;
  const test = [{titre: "hello"},{titre:"muppets show"}];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourceComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{
          provide: ActivatedRoute,
          useValue:  {
            params: of({ data: JSON.stringify(test)})
          },
        }]
    })
    .compileComponents();
  });

  let configService: ConfigService;
  beforeEach(() => configService = TestBed.get(ConfigService));

  let httpTestingController: HttpTestingController;
  beforeEach(() => httpTestingController = TestBed.get(HttpTestingController));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('test lists contains elements', ()=> {
    component.ngOnInit();
    const number: number = component.lists.length;
    expect(number).toBe(2);
  });

  it('display title of element', () => {
    const debugElement = fixture.debugElement;
    console.log(debugElement.nativeElement.querySelector('h4').textContent);
    expect(debugElement.nativeElement.querySelector('h4').textContent).toEqual('hello');
  });

});
