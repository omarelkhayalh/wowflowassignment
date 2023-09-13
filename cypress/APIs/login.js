describe('API Test Suite', () => {
  it('should return a successful response', () => {
    cy.request('GET', 'https://reqres.in/api/users').then((response) => {
      const email = response.body.data[4].email;

      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: {
          email: email,
          password: 'password'
        }
      }).then((response) => {
        const token = response.body.token;

        // Write assertions for the token
        expect(token).to.not.be.empty;
        expect(token).to.be.a('string');
      });
    });
  });
});
