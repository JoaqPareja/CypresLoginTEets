require('cypress-xpath')  

import {urlLoginLinkedin} from '../support/commands'

/**
 * Loggin Admin code
 */

 errCypress()

describe('Linkedin Testing', function () {
  beforeEach(()=>{ cy.visit(urlLoginLinkedin)})

  beforeEach(function(){ 
    cy.fixture('testLogins')
    .then(Login => {
       this.Login = Login
    })
    })
    
      it('login scenario', function () {
        // cy.visit(urlAdmin)
        cy.get('input:first').type(this.Login[1].name)
        cy.get('input:last').type(this.Login[1].password , { sensitive: true })
        cy.wait(5000)
        .xpath('/html/body/div/main/div[2]/div[1]/form/div[3]/button').click()
      }) 

    })

