/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Must show allert with correct filled information", () => {
    cy.get("#cardNumber").type("5265053135948576");
    cy.get("#cardHolder").type("Testing Test");
    cy.get("#creditCardCCV").type("111");
    cy.get("#Month").select("01");
    cy.get("#Year").select("2023");
    cy.get("button").should("not.be.disabled");
    cy.get("button").click();
    cy.on('window:alert',(txt)=>{
      expect(txt).equal(
        JSON.stringify(
          {
            creditCardInformation:
            {
              type:"mastercard",
              number:"5265 0531 3594 8576",
              holder:"Testing Test",
              expirationMonth:"01",
              expirationYear:"2023",
              cvv:"111"
            }
          }
        )
        );
   })
  });
});
