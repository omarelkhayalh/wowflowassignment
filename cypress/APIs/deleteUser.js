
describe('API Test Suite', () => {
  it('should return a successful response', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2'
    }).then((response) => {
      expect(response.status).to.eq(204); // Assuming a successful deletion returns status code 204
    });
  });
});  