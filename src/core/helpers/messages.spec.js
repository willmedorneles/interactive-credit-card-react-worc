import { getMessage } from './messages';

describe('UserAuthentication componetent test', () => {

  test('must return default message', () => {
    const message = getMessage();
    expect(message).toEqual('Este campo é obrigatório');
  });

  test('must return empty string when item dont exist', () => {
    const message = getMessage('cart');
    expect(message).toEqual('');
  });

  test('must return username mesage', () => {
    const message = getMessage('creditcardnumber');
    expect(message).toEqual('Número de cartão inválido');
  });

});