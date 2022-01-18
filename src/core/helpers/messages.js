const MESSAGES = {
  DEFAULT: 'Este campo é obrigatório',
  CARDNUMBER: 'Número de cartão inválido',
  CARDHOLDER: 'Nome completo do titular do cartão inválido',
  CREDITCARDCCV: 'Codigo de verificação incorreto',
  MONTH: 'Data inválida',
  YEAR: 'Data inválida',
}

function getMessage(name = 'DEFAULT') {
  return MESSAGES[name.toUpperCase()] || '';
}

export {
  getMessage
}