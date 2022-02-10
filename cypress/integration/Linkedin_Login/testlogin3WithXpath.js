

require('cypress-xpath')  


describe('TestIng with Xpath', () => {
   beforeEach(function(){  
      cy.visit('https://www.linkedin.com')
    })


      it('login scenario', function () {
        // cy.visit(urlAdmin)
        cy.xpath('//*[@id="main-content"]')
        cy.xpath('/html/body/main/section[1]/div/h1').should('be.visible')
        cy.xpath('//*[@id="email-or-phone"]').type('Joaq.pareja@gmail.com')
        cy.xpath('//*[@id="password"]').type('Shonenechi1!' , { sensitive: true })
        cy.wait(5000)
        .xpath('//*[@id="join-form-submit"]').click()
        .contains('contains')
       
      //   .url().should('match', /feed/)    
}) 
})