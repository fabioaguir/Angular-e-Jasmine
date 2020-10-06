import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('O serviço UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [UserService]
    });

    service = TestBed.get(UserService);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve, através de um token, recuperar as informações de usuário', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwMjAyNTczOCwiZXhwIjoxNjAyMTEyMTM4fQ.R3TbvXEvhTnTvgeHI0C8FxBapZkzvfGdBPYsYNU7MfY';
    service.setToken(token);
    expect(service.isLogged).toBeTruthy();
    expect(service.getUserName()).toBe('flavio');
    service.getUser().subscribe(user => {
      expect(user.name).toBe('flavio');
    });
  });

  it('deve limpar as informações no logout', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwMjAyNTczOCwiZXhwIjoxNjAyMTEyMTM4fQ.R3TbvXEvhTnTvgeHI0C8FxBapZkzvfGdBPYsYNU7MfY';
    service.setToken(token);
    service.logout();
    expect(service.isLogged()).toBeFalsy();
    expect(service.getUserName()).toBeFalsy();
  });
})
