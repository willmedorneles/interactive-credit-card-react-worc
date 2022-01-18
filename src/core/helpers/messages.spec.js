import { getMessage } from './messages';

describe('getMessage componetent test', () => {

  test('must return default message', () => {
    const message = getMessage();
    expect(message).toEqual('Este campo é obrigatório');
  });

  test('must return empty string when item dont exist', () => {
    const message = getMessage('cart');
    expect(message).toEqual('');
  });

  test('must return username mesage', () => {
    const message = getMessage('cardnumber');
    expect(message).toEqual('Número de cartão inválido');
  });

});