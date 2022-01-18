/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Must display complete form", () => {
    cy.get("input").should("have.length", 3);
    cy.get("select").should("have.length", 2);
    cy.get("button").should("have.length", 1);
    cy.get("button").should("be.disabled");
  });

  it("Credit card number must have red borders when invalid value", () => {
    cy.get("#cardNumber").type("1111111");
    cy.get(".atom-card").click();
    cy.get("#cardNumber").should(
      "have.css",
      "border",
      "1px solid rgb(255, 0, 0)"
    );
    cy.get("button").should("be.disabled");
  });

  it("Credit card number must have green borders when valid value", () => {
    cy.get("#cardNumber").type("5265053135948576");
    cy.get(".atom-card").click();
    cy.get("#cardNumber").should(
      "have.css",
      "border",
      "1px solid rgb(82, 255, 47)"
    );
    cy.get("button").should("be.disabled");
  });

  it("Credit card holder must have grey borders when invalid value", () => {
    cy.get("#cardHolder").type("1");
    cy.get("#cardHolder").clear();
    cy.get(".atom-card").click();
    cy.get("#cardHolder").should(
      "have.css",
      "border",
      "1px solid rgb(206, 214, 224)"
    );
    cy.get("button").should("be.disabled");
  });

  it("Credit card holder must have green borders when invalid value", () => {
    cy.get("#cardHolder").type("Testing Test");
    cy.get(".atom-card").click();
    cy.get("#cardHolder").should(
      "have.css",
      "border",
      "1px solid rgb(82, 255, 47)"
    );
    cy.get("button").should("be.disabled");
  });

  it("Credit card cvv must have red borders when invalid value", () => {
    cy.get("#creditCardCCV").type("1");
    cy.get(".atom-card").click();
    cy.get("#creditCardCCV").should(
      "have.css",
      "border",
      "1px solid rgb(255, 0, 0)"
    );
    cy.get("button").should("be.disabled");
  });

  it("Credit cvv must have green borders when invalid value", () => {
    cy.get("#creditCardCCV").type("111");
    cy.get(".atom-card").click();
    cy.get("#creditCardCCV").should(
      "have.css",
      "border",
      "1px solid rgb(82, 255, 47)"
    );
    cy.get("button").should("be.disabled");
  });

  it("Must enable button when form correctly filled", () => {
    cy.get("#cardNumber").type("5265053135948576");
    cy.get("#cardHolder").type("Testing Test");
    cy.get("#creditCardCCV").type("111");
    cy.get("#Month").select("01");
    cy.get("#Year").select("2023");
    cy.get("button").should("not.be.disabled");
  });
});
