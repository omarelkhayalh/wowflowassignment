import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { mainpage } from "@pages/mainPage";

Given("A user is in the home page", () => {
    cy.visit("/");
});
Then("user verify count number of products are 34", () => {

    mainpage.getNumberOfProducts().should('eq', 34);

});
Then("user verify brand list count is 34", () => {

    mainpage.getBrandCount().should('eq', 34);

});

