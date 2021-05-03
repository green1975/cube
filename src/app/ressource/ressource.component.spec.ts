import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from '../config/config.service';
import { RessourceComponent } from './ressource.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RessourceComponent', () => {
  let component: RessourceComponent;
  let fixture: ComponentFixture<RessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourceComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('test le nombre de ressource', (done) => {
    let number;
    const id = '6046076032636223fb000166';
    const configService: ConfigService = TestBed.get(ConfigService);
      configService.getDetailRessource(id).subscribe( data => {
        number = data['entries'].length;
        expect(number).toBe(1);
        done();
      })
  });
});
