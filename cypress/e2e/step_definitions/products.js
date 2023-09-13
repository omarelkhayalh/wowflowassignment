import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { productPage } from "@pages/productsPage";

Given("user is navigated to products page", () => {
    cy.visit("/products");
});
When("User filter women dress", () => {
    productPage.filterWomenDress();
});
Then("verify that there are 3 dresses", () => {

    productPage.verifyNumberofDresses();
});

Then("write dresses names to file", () => {

    productPage.writeDressNameToFile('output.txt')
});



