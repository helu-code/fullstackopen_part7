describe('Blog ', function() {

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Heikki Lumiaho',
      username: 'heilumi',
      password: 'heilumi'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    //cy.visit('http://localhost:3000')
  })


  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Login')
  })

  it('user can login', function () {
    cy.get('#username')
      .type('heilumi')
    cy.get('#password')
      .type('heilumi')
    cy.contains('login')
      .click()
    cy.contains('Heikki Lumiaho logged in')
  })  

  it('a new Blog can be created', function() {
    cy.contains('New blog')
      .click()
    cy.get('#title')
      .type('a blog created by cypress')
    cy.get('#author')
      .type('heilumi')
    cy.get('#url')
      .type('http://heilumi')
      
    cy.contains('create')
      .click()
    cy.contains('a blog created by cypress')
  })

})