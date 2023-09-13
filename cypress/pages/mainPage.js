class mainPage {
    elements = {
        products: () => cy.get('a[href*="/product_details/"]'),
        brandList: () => cy.get('.brands-name li'),
    }

    getNumberOfProducts() {

        return this.elements.products().its('length');
    }
    getBrandCount() {
        let sum = 0;
        return this.elements.brandList().each(($li) => {
            const text = $li.find('.pull-right').text();
            const count = parseInt(text.match(/\((\d+)\)/)[1]);
            sum += count;
        }).then(() => sum);
    }
}
export const mainpage = new mainPage();