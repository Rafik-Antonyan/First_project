import React from "react";
import HomePage from "./index";

describe("Loading", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", (req) => {
      req.reply({ fixture: "post.json", delay: 3000 });
      req.alias = "loadingRequest";
    });
    cy.mount(<HomePage />);
  });

  it("loading is working good", () => {
    cy.wait("@loadingRequest").then(() => {
      cy.get("[data-testid='loading-test']").should("exist");
    });
  });
});

describe("Error", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", (req) => {
      req.reply({ fixture: "error.json", statusCode: 400 });
      req.alias = "failedRequest";
    });
    cy.mount(<HomePage />);
  });

  it("show error page", () => {
    cy.wait("@failedRequest").then(() => {
      cy.get("[data-testid='error-test']").should("exist");
    });
  });
});

describe("success", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", (req) => {
      req.reply({ fixture: "post.json", status: 200 });
      req.alias = "succeedRequest";
    });
    cy.mount(<HomePage />);
  });

  it("succeed_table", () => {
    cy.wait("@succeedRequest").then((req) => {
      let row_length = req.response.body.length;
      cy.get("[data-testid='succeed-table'] tbody tr")
        .should("exist")
        .should("have.length", row_length);
    });
  });

  it("putting minus if field is empty", () => {
    cy.wait("@succeedRequest").then((req) => {
      cy.get("[data-testid='succeed-table'] thead tr th").each(
        ($field, colIndex) => {
          if ($field.text().toLowerCase() === "name") {
            const rowIndex = req.response.body.findIndex((elm) => !elm.name);
            cy.get("[data-testid='succeed-table'] tbody tr")
              .eq(rowIndex)
              .children()
              .eq(colIndex)
              .should("contain", "-");
          }
        }
      );
    });
  });

  it("hovering is working successfully", () => {
    cy.wait("@succeedRequest").then((req) => {
      cy.get("[data-testid='succeed-table'] tbody tr")
        .eq(1)
        .should("have.attr", "style", "background: transparent;");
      cy.get("[data-testid='succeed-table'] tbody tr")
        .eq(1)
        .then((elm) => cy.hover(elm));
      cy.get("[data-testid='succeed-table'] tbody tr")
        .eq(1)
        .should("have.attr", "style", "background: rgb(204, 204, 204);");
    });
  });
});
