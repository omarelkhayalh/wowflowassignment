import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { signupPage } from "@pages/signUpPage";

Given("A web browser is at the automation excercise login page", () => {
    cy.visit("/login");
});

When("A user enters name {string}, email {string}, and clicks signup button", (name, email) => {

    x = Math.floor(Math.random() * 1000);

    signupPage.submitSignup(name + x + "eg", email + x + "@test.com")

});

Then("The url will contain signup", () => {
    cy.url().should("contains", "/signup");
});

Then("The Enter Account Information should appear", () => {
    signupPage.checkTextExist();
});

When("A user enters choose title {string}", (title) => {
    if (title == "Mr") {
        signupPage.selectmr();
    } else {
        signupPage.selectmrs();
    }
});
When("user types password", () => {
    function passwordGenerator() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    signupPage.typePassword(passwordGenerator());

});
When("user choose day of birth", () => {
    randDay = Math.floor(Math.random() * 27);
    signupPage.selectDay(randDay + 1);
});
When("user choose month of birth", () => {
    randMonth = Math.floor(Math.random() * 11);
    signupPage.selectMonth(randMonth + 1);
});
When("user choose year of birth", () => {
    // function randYear(min, max) {
    //     difference = max - min; 
    //     rand = Math.random();
    //     rand = Math.floor( rand * difference); 
    //     rand = rand + min;   
    //     return rand;
    // }
    randYear = Math.floor(Math.random() * 120)
    signupPage.selectYear(randYear + 1);
});
When("user enter firstname {string}", (firstname) => {
    signupPage.typeFirstName(firstname);
});
When("user enter lastname {string}", (lastname) => {
    signupPage.typeLastName(lastname);
});
When("user enter company {string}", (company) => {
    signupPage.typeCompany(company);
});
When("user enter address {string}", (address) => {
    signupPage.typeAddress(address);
});
When("user select country", () => {
    randCountryIndex = Math.floor(Math.random() * 6);
    signupPage.selectCountry(randCountryIndex + 1);
});
When("user enter state {string}", (state) => {
    signupPage.typeState(state);
});
When("user enter city {string}", (city) => {
    signupPage.typeCity(city);
});
When("user enter zipcode {string}", (zipcode) => {
    signupPage.typeZipcode(zipcode);
});
When("user enter mobilenumber {string}", (mobilenumber) => {
    signupPage.typeMobileNumber(mobilenumber);
});
When("user clicks on create account button", () => {
    signupPage.clickCreateAccount();
});
Then("account is created message should appear", () => {
    signupPage.checkAccountCreated();
});
Then("user should click continue", () => {
    signupPage.clickContinueBtn();
});
Then("user is redirected to home page", () => {
    cy.url().should('equal', 'https://automationexercise.com/');
});
Then("logout button should exist", () => {
    signupPage.checkLogoutBtnExist();
});


