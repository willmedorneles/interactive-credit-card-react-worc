const MESSAGES = {
  DEFAULT: 'Este campo é obrigatório',
  CREDITCARDNUMBER: 'Número de cartão inválido',
  CREDITCARDNAME: 'Nome completo do titular do cartão inválido',
  CREDITCARDCCV: 'Codigo de verificação incorreto',
  CREDITCARDEXPIRATIONDATE: 'Data inválida'
}

function getMessage(name = 'DEFAULT') {
  return MESSAGES[name.toUpperCase()] || '';
}

export {
  getMessage
}