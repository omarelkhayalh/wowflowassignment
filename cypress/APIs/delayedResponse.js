describe('API Test Suite', () => {
    it('should return a successful response', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: {
                delay: 5
            }
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('page', 1);
            expect(response.body).to.have.property('per_page', 6);
            expect(response.body).to.have.property('total', 12);
            expect(response.body).to.have.property('total_pages', 2);
            expect(response.body.data).to.be.an('array').and.have.lengthOf(6);
        });
    });

    it('should have valid user data', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: {
                delay: 5
            }
        }).should((response) => {
            const userData = response.body.data;

            userData.forEach((user) => {
                expect(user).to.have.property('id').to.be.a('number');
                expect(user).to.have.property('email').to.be.a('string');
                expect(user).to.have.property('first_name').to.be.a('string');
                expect(user).to.have.property('last_name').to.be.a('string');
                expect(user).to.have.property('avatar').to.be.a('string');
            });
        });
    });

    it('should have a support URL', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: {
                delay: 5
            }
        }).should((response) => {
            const support = response.body.support;
            expect(support).to.have.property('url').to.be.a('string');
            expect(support).to.have.property('text').to.be.a('string');
        });
    });
});
