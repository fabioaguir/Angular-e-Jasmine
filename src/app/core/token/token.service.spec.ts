import { TokenService } from './token.service';

describe('O serviço de TokenService', () => {
  let token;
  let service;

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve guardar um token', () => {
    service.setToken(token);
    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBe(token);
  });

  it('deve remover um token',() => {
    service.setToken(token);
    service.removeToken();
    expect(service.hasToken()).toBeFalsy();
    expect(service.getToken()).toBeFalsy();
  });

  afterEach(() => {
    localStorage.clear();
  });

  beforeEach(() => {
    token = 'testetoken';
    service = new TokenService();
  })
})
