import { TestBed } from '@angular/core/testing';
import { ConfigService } from '../config/config.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RessourceComponent', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  let configService: ConfigService;
  beforeEach(() => configService = TestBed.inject(ConfigService));

  let httpTestingController: HttpTestingController;
  beforeEach(() => httpTestingController = TestBed.inject(HttpTestingController));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('test le nombre de ressource', () => {
    let number: any;
    const id = '6046076032636223fb000166';
    configService.getDetailRessource(id).subscribe( data => {
      number = data['entries'].length;
    })
    const req = httpTestingController.expectOne({method:'POST', url:'https://admin.myjolieplanet.com/api/collections/get/ressource?token=8239152105c18d3d8e2282f747d183'});

    req.flush({ entries: [
      {
        name: 1
      }
    ]});

    expect(number).toBe(1);
  });
});
