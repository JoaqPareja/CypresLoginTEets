

describe('TestIng with get', () => {
  beforeEach(function(){  
    cy.visit('https://www.linkedin.com')
  })

  it('Login', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.wait(2000)
    .get('#main-content')
    .should('be.visible')
    .contains('Welcome to your professional community')
    .get('#session_key').type('')
    .get('#session_password').type('')
    cy.get('.sign-in-form__submit-button').click()
    .url().should('match', /feed/)     
    cy.get('.global-nav__primary-link-text').click({ multiple: true } )
    .wait(3000)
    .should('be.visible')
    cy.get('#ember27 > span').click()
    


  })

})