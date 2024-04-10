describe('Testing basic search in biblored catalog', () => {
    beforeEach(()=>{
       cy.visit('https://catalogo.biblored.gov.co/')
        cy.wait(7000)
    })

    it('Test empty search feedback', () => {
        cy.get('button.search.s20.b-none.bkzero').click()
        cy.wait(1000)
        cy.get('div.invalid-feedback').then(($divs)=>{
            expect($divs.length).to.equal(1)
        })
    })

    it('Redirects to search results page after searching', () => {
        const searchText ="Quijote"
        
        // Type text into search input
        cy.get('input[name="q"]').type(searchText)

        // Click on the search button
        cy.get('button.search.s20.b-none.bkzero').click()

        // Wait for the URL to change
        cy.url().should('include', '/?q=' + encodeURIComponent(searchText))
            .and('include', 'for=LIVRE')
    })



  })