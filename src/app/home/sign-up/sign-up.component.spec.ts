import { of, throwError } from 'rxjs';
import { VMessageModule } from 'src/app/shared/componets/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignUpService } from './signup.service';
import { SignUpComponent } from './signup.component';
import { async, TestBed } from '@angular/core/testing';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

describe('O formulário de SignUp', () => {

  let component: SignUpComponent;
  let router: Router;
  let service: SignUpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SignUpService, UserNotTakenValidatorService],
      declarations: [SignUpComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        VMessageModule
      ],
    }).compileComponents;
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    service = TestBed.get(SignUpService);

    const fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve cadastrar um usuário', () => {
    const navigateSpy = spyOn(router, 'navigate');
    spyOn(service, 'signup').and.returnValue(of(null));

    component.signupForm.get('email').setValue('alvaro@alvaro.com');
    component.signupForm.get('fullName').setValue('Alvaro');
    component.signupForm.get('userName').setValue('alvaro');
    component.signupForm.get('password').setValue('123');
    component.signUp();

    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('deve realizar o log caso ocorra algum erro', () => {
    spyOn(service, 'signup').and.returnValue(
      throwError("Erro de Servidor")
    );
    const spyLog = spyOn(console, "log");

    component.signupForm.get('email').setValue('alvaro@alvaro.com');
    component.signupForm.get('fullName').setValue('Alvaro');
    component.signupForm.get('userName').setValue('alvaro');
    component.signupForm.get('password').setValue('123');
    component.signUp();

    expect(spyLog).toHaveBeenCalledWith("Erro de Servidor");
  });
})
