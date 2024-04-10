describe('Testing basic search in biblored catalog', () => {
    beforeEach(()=>{
       cy.visit('https://catalogo.biblored.gov.co/')
        cy.wait(7000)
    })

    it('Test link', () => {
        cy.get('label.tag3.s12.negrito.guia_pesquisa').last().click()
        cy.wait(1000)
        cy.url().should('eq', 'https://catalogo.biblored.gov.co/plano_ensino')

    })

    it('Test empty search feedback', () => {
        cy.get('label.tag3.s12.negrito.guia_pesquisa').last().click()
        cy.get('button.search.s20.b-none.bkzero').click()
        cy.wait(1000)
        cy.get('div.p-3.s20').then(($divs)=>{
            expect($divs.length).to.equal(1)
        })
    })




    it('Test empty search feedback', () => {
        cy.get('label.tag3.s12.negrito.guia_pesquisa').last().click()
        // Abre el menú desplegable
        cy.get('input.form-control').first().click();

        // Selecciona la opción deseada del menú desplegable
        cy.contains('1 - 01USAQUEN').click();




        cy.get('button.search.s20.b-none.bkzero').click()
        cy.wait(1000)
        cy.get('div.p-3.s20').then(($divs)=>{
            expect($divs.length).to.equal(1)
        })
    })



  })