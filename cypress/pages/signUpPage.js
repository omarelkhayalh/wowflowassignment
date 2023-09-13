class signUpPage {
    elements = {
        nameInput: () => cy.get('[data-qa="signup-name"]'),
        emailInput: () => cy.get('[data-qa="signup-email"]'),
        signUpBtn: () => cy.get('[data-qa="signup-button"]'),
        accountinformationText: () => cy.get(':nth-child(1) > b'),
        mrInput: () => cy.get('#id_gender1'),
        mrsInput: () => cy.get('#id_gender2'),
        passwordInput: () => cy.get('[data-qa="password"]'),
        daysInput: () => cy.get('[data-qa="days"]'),
        monthsInput: () => cy.get('[data-qa="months"]'),
        yearsInput: () => cy.get('[data-qa="years"]'),
        firstNameInput: () => cy.get('[data-qa="first_name"]'),
        lastNameInput: () => cy.get('[data-qa="last_name"]'),
        companyInput: () => cy.get('[data-qa="company"]'),
        addressInput: () => cy.get('[data-qa="address"]'),
        countryInput: () => cy.get('[data-qa="country"]'),
        stateInput: () => cy.get('[data-qa="state"]'),
        cityInput: () => cy.get('[data-qa="city"]'),
        zipcodeInput: () => cy.get('[data-qa="zipcode"]'),
        mobilenumberInput: () => cy.get('[data-qa="mobile_number"]'),
        createAccountBtn: () => cy.get('[data-qa="create-account"]'),
        accountCreatedText: () => cy.get('[data-qa="account-created"]'),
        continueBtn: () => cy.get('[data-qa="continue-button"]'),
        logoutBtn: () => cy.get('a[href*="logout"]')


    };

    typeName(name) {
        this.elements.nameInput().type(name);
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    clickSignup() {
        this.elements.signUpBtn().click();
    }

    submitSignup(name, email) {
        this.elements.nameInput().type(name);
        this.elements.emailInput().type(email);
        this.elements.signUpBtn().click();
    }
    checkTextExist() {
        this.elements.accountinformationText().should('exist');
    }
    selectmr() {
        this.elements.mrInput().click();
    }
    selectmrs() {
        this.elements.mrsInput().click();
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    selectDay(day) {
        this.elements.daysInput().select(day);
    }

    selectMonth(month) {
        this.elements.monthsInput().select(month);
    }

    selectYear(year) {
        this.elements.yearsInput().select(year);
    }

    typeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    typeCompany(company) {
        this.elements.companyInput().type(company);
    }

    typeAddress(address) {
        this.elements.addressInput().type(address);
    }

    selectCountry(country) {
        this.elements.countryInput().select(country);
    }

    typeState(state) {
        this.elements.stateInput().type(state);
    }

    typeCity(city) {
        this.elements.cityInput().type(city);
    }

    typeZipcode(zipcode) {
        this.elements.zipcodeInput().type(zipcode);
    }

    typeMobileNumber(mobilenumber) {
        this.elements.mobilenumberInput().type(mobilenumber);
    }

    clickCreateAccount() {
        this.elements.createAccountBtn().click();
    }
    checkAccountCreated() {
        this.elements.accountCreatedText().should('exist');
    }
    clickContinueBtn() {
        this.elements.continueBtn().click();
    }
    checkLogoutBtnExist() {
        this.elements.logoutBtn().should('exist');
    }
}

export const signupPage = new signUpPage();