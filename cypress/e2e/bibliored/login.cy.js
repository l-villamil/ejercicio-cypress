describe('Testing basic search in biblored catalog', () => {
    beforeEach(()=>{
       cy.visit('https://catalogo.biblored.gov.co/')
        cy.wait(1000)
    })

    it('test link between home and login', () => {
        cy.get('button.b-none.bkbranco.cortxt.hover.hpreto.p-2.rad5.s14').first().click({ force: true })
        cy.wait(1000)
        cy.url().should('eq', 'https://catalogo.biblored.gov.co/login?redirect=/')

    })

    it('correct login', () => {
        cy.get('button.b-none.bkbranco.cortxt.hover.hpreto.p-2.rad5.s14').first().click({ force: true })
        const user ="1000049328"
        const password="HUBBLE"
        
        // Type text into search input
        cy.get('#username').type(user)
        cy.get('#password').type(password)
        

        // Click on the search button
        cy.get('button.bkverde.branco.b-none.sverde.hover.hpreto.pad5.rad5.t10.r10.f770.s13.btn.btn-secondary').click()

        // Wait for the URL to change
        cy.wait(3000)
        cy.url().should('eq', 'https://catalogo.biblored.gov.co/meupergamum')
    })



    it('logout', () => {
        cy.get('button.b-none.bkbranco.cortxt.hover.hpreto.p-2.rad5.s14').first().click({ force: true })
        const user ="1000049328"
        const password="HUBBLE"
        
        // Type text into search input
        cy.get('#username').type(user)
        cy.get('#password').type(password)
        

        // Click on the search button
        cy.get('button.bkverde.branco.b-none.sverde.hover.hpreto.pad5.rad5.t10.r10.f770.s13.btn.btn-secondary').click()

        // Wait for the URL to change
        cy.wait(3000)
        cy.get('button.b-none.b-w2.bkbranco.hover.hrad5.htema.p-2.preto70.rad5.s14').first().click({ force: true })
        cy.url().should('eq', 'https://catalogo.biblored.gov.co/login?redirect=/meupergamum')
    })



  })