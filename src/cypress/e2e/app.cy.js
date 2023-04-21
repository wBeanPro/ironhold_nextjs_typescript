describe('Navigation', () => {
    it('Test IronHold', () => {
      cy.server()
          .route('**/repos/cypress-io/cypress*')
          .as('getSiteInfo');
      cy.visit('http://localhost:3000/')
      cy.get('input[name="username"]').type('demo')
      cy.get('input[name="password"]').type('mydem0')
      cy.get('input[name="btn_login"]').click()
      .wait('@getSiteInfo', { timeout: 20000 })
      .then((xhr) => {
        cy.log(JSON.stringify(xhr.response.body))
      })

      cy.get('a[id="btn_forgot"]').click()
      cy.get('a[id="btn_reset"]').click().wait('@getSiteInfo', { timeout: 20000 }).then((xhr) => {
        cy.log(JSON.stringify(xhr.response.body))
      })
    })
  })