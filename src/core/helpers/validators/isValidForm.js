function isValidForm(
  creditCardNumber,
  creditCardHolder,
  creditCardExpirationDateMonth,
  creditCardExpirationDateYear,
  creditCardCvv
) {
  return (
    creditCardNumber.error === "" &&
    creditCardNumber.value !== "" &&
    creditCardHolder.error === "" &&
    creditCardHolder.value !== "" &&
    creditCardExpirationDateMonth.error === "" &&
    creditCardExpirationDateMonth.value !== "" &&
    creditCardExpirationDateYear.error === "" &&
    creditCardExpirationDateYear.value !== "" &&
    creditCardCvv.error === "" &&
    creditCardCvv.value !== ""
  );
}

export { isValidForm };
