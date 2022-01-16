import { useState } from "react";
import { isNotEmptyString, getMessage } from '../helpers';

/**
 * Custom Hook que abstraí as funções de genreciamento e atualização do estado de um campo input;
 * Parâmetro initialValue é os valores iniciais do input;
 * Retorna um objeto com todos os dados do input e os métodos para manipular o estado;
 * @param { label?: string, name?: string, value: string, error: string, validator?: function, mask?: function } initialValue 
 * 
 */
const useFormField = initialValue => {
  const [formField, setFormField] = useState(initialValue);

  /**
   * Recebe o valor do input, aplica máscara, caso tenha sido passado uma 'mask' no initialState
   * e atualiza o 'value' no estado
   * @param {string} rawValue 
   */
  const update = (rawValue) => {
    const value = formField.mask ? formField.mask(rawValue) : rawValue;
    setFormField({ ...formField, value });
  }

  /**
   * Recebe o valor do input e faz a validação, caso tenha sido passado um 'validator' no initialState,
   * e atualiza o 'error' no estado;
   * @param {string} value 
   */
  const validate = (value) => {
    let error = !isNotEmptyString(value) ? getMessage() : '';

    if(formField.validator && !formField.validator(value)) {
      error = getMessage(formField.name);
    }
      
    setFormField({ ...formField, error: error });
  }

  /**
   * Repassa o 'value' para o método update
   * @param {InputEvent} event 
   */
  const handleChange = (event) => update(event.target.value);

  /**
   * Repassa o 'value' para o método validate
   * @param {InputEvent} event 
   */
  const handleBlur = (event) => validate(event.target.value);

  const { value, name, label, error, type, required, options } = formField;

  return {
    value, 
    name, 
    label, 
    error,
    type,
    required,
    options,
    onChange: handleChange,
    onBlur: handleBlur,
    reset: () => setFormField(initialValue),
    setState: (value) =>  setFormField({ ...formField, ...value }),
    validate
  }
};

export {
  useFormField
}