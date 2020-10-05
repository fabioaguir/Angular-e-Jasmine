import { isLowerCase } from "./lower-case.validator";

describe('A função isLowerCase', () => {
  it('deve confirmar quando recebe um texto em caixa baixa', () => {
    const valor = 'mario';
    const resultado = isLowerCase(valor);
    expect(resultado).toBeTruthy();
  });

  it('deve validar se o texto não é caixa baixa', () => {
    expect(isLowerCase('Mario')).toBeFalsy();
  });

  it('deve retornar verdadeiro caso o valor tenha letras maiúsculas', function (){
    expect('Gabriel'.toUpperCase()).toBeTruthy();
  });
});
