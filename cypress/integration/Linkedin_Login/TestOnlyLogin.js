


require('cypress-xpath')  


describe('TestIng with Xpath', () => {
   beforeEach(function(){  
      cy.visit('https://www.linkedin.com/checkpoint/rm/sign-in-another-account?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin')
    })


    it('login scenario', function () {
        // cy.visit(urlAdmin)
        cy.xpath('//*[@id="username"]').type('')
        cy.xpath('//*[@id="password"]').type('' , { sensitive: true })
        cy.wait(5000)
        .xpath('/html/body/div/main/div[2]/div[1]/form/div[3]/button').click()
       
      //   .url().should('match', /feed/)    
})


// it('login scenario', function () {
//     // cy.visit(urlAdmin)
//     cy.get('input:first').type('')
//      cy.get('input:last').type('' , { sensitive: true })
//     cy.wait(5000)
//     .xpath('/html/body/div/main/div[2]/div[1]/form/div[3]/button').click()
   
//   //   .url().should('match', /feed/)    
// })

})