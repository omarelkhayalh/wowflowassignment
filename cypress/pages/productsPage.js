class productsPage {

    elements = {
        categoryDress: () => cy.get('a[href*="/category_products/1"]'),
        womenDropdown: () => cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa'),
        dressesNames: () => cy.get('.features_items .productinfo p')

    }

    filterWomenDress() {
        this.elements.womenDropdown().click();
        this.elements.categoryDress().click();
    }

    verifyNumberofDresses() {
        this.elements.dressesNames().should('have.length', 3);
    }

    writeDressNameToFile(fileName) {
        this.elements.dressesNames().each(($p) => {
            const text = $p.text().trim();
            cy.writeFile(fileName, text + '\n', { flag: 'a+' });
        });
    }
}
export const productPage = new productsPage();