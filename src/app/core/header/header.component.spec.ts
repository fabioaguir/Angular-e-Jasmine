import { of } from 'rxjs';
import { LoadingModule } from './../../shared/componets/loading/loading.module';
import { AlertModule } from './../../shared/componets/alert/alert.module';
import { MenuModule } from './../../shared/componets/menu/menu.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './../user/user.service';
import { HeaderComponent } from "./header.component"
import { Router } from '@angular/router';

describe('O component header', () => {

  let component: HeaderComponent;
  let userService: UserService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        MenuModule,
        AlertModule,
        LoadingModule
      ],
    }).compileComponents;
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);

    spyOn(userService, 'getUser').and.returnValue(of({
      email: 'alvaro@alvaro.com',
      name: 'Alvaro',
      id: 1
    }));

    const fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve realizar o logout', () => {
    const spy = spyOn(userService, 'logout').and.returnValue(null);
    const navigateSpy = spyOn(router, 'navigate');
    component.logout();
    expect(spy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  })
})
